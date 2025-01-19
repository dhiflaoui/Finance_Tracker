import { defineComponent, ref, provide, h } from 'vue';
import { useEventBus } from '@vueuse/core';

const __nuxt_component_0 = defineComponent({
  props: {
    schema: {
      type: Object,
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    }
  },
  setup(props, { slots, expose }) {
    const seed = Math.random().toString(36).substring(7);
    const bus = useEventBus(`form-${seed}`);
    bus.on(async (event) => {
      if (event.type === "blur") {
        const otherErrors = errors.value.filter(
          (error) => error.path !== event.path
        );
        const pathErrors = (await getErrors()).filter(
          (error) => error.path === event.path
        );
        errors.value = otherErrors.concat(pathErrors);
      }
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate() {
      errors.value = await getErrors();
      if (errors.value.length > 0) {
        throw new Error(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    expose({
      validate
    });
    return () => {
      var _a;
      return h("form", (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
function isZodError(error) {
  return error.issues !== void 0;
}
async function getZodErrors(state, schema) {
  try {
    schema.parse(state);
    return [];
  } catch (error) {
    if (isZodError(error)) {
      return error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message
      }));
    } else {
      throw error;
    }
  }
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Form-Bw62B85A.mjs.map
