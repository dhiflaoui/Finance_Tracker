import { inject, defineComponent, computed, provide, cloneVNode, h, ref, useSSRContext, mergeProps } from 'vue';
import { q as defu } from '../runtime.mjs';
import { e as appConfig, f as useAppConfig, p as getSlotsChildren, c as __nuxt_component_1$2, g as classNames, q as useToast, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';

const useFormEvents = () => {
  const formBus = inject("form-events", void 0);
  const formPath = inject("form-path", void 0);
  const emitFormBlur = () => {
    if (formBus && formPath) {
      formBus.emit({ type: "blur", path: formPath });
    }
  };
  return {
    emitFormBlur
  };
};
const __nuxt_component_1$1 = defineComponent({
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(appConfig.ui.formGroup.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.formGroup
    }
  },
  setup(props, { slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.formGroup));
    provide("form-path", props.name);
    const formErrors = inject("form-errors", null);
    const errorMessage = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error) => error.path === props.name)) == null ? void 0 : _b.message;
    });
    const children = computed(() => getSlotsChildren(slots));
    const clones = computed(() => children.value.map((node) => {
      var _a;
      const vProps = {};
      if (errorMessage.value) {
        vProps.oldColor = (_a = node.props) == null ? void 0 : _a.color;
        vProps.color = "red";
      } else if (vProps.oldColor) {
        vProps.color = vProps.oldColor;
      }
      if (props.name) {
        vProps.name = props.name;
      }
      if (props.size) {
        vProps.size = props.size;
      }
      return cloneVNode(node, vProps);
    }));
    return () => h("div", { class: [ui.value.wrapper] }, [
      props.label && h("div", { class: [ui.value.label.wrapper, ui.value.size[props.size]] }, [
        h("label", { for: props.name, class: [ui.value.label.base, props.required && ui.value.label.required] }, props.label),
        props.hint && h("span", { class: [ui.value.hint] }, props.hint)
      ]),
      props.description && h("p", { class: [
        ui.value.description,
        ui.value.size[props.size]
      ] }, props.description),
      h("div", { class: [!!props.label && ui.value.container] }, [
        ...clones.value,
        errorMessage.value ? h("p", { class: [ui.value.error, ui.value.size[props.size]] }, errorMessage.value) : props.help ? h("p", { class: [ui.value.help, ui.value.size[props.size]] }, props.help) : null
      ])
    ]);
  }
});
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_1$2
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.input.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.input.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.input.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.input.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.input.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.input.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.input.variant),
          ...Object.values(appConfig.ui.input.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.input
    }
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.input));
    const { emitFormBlur } = useFormEvents();
    const input = ref(null);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.base,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[props.size],
        props.padded ? ui.value.padding[props.size] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        (isLeading.value || slots.leading) && ui.value.leading.padding[props.size],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[props.size]
      );
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[props.size]
      );
    });
    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(props.color) && ui.value.icon.color.replaceAll("{color}", props.color),
        ui.value.icon.size[props.size],
        props.loading && "animate-spin"
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[props.size]
      );
    });
    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(props.color) && ui.value.icon.color.replaceAll("{color}", props.color),
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && "animate-spin"
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      input,
      isLeading,
      isTrailing,
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.name,
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled || _ctx.loading,
    class: ["form-input", _ctx.inputClass]
  }, _ctx.$attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const useAppToast = () => {
  const toast = useToast();
  return {
    toastSuccess: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-check-circle",
        color: "green",
        type: "success"
      });
    },
    toastError: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
        type: "error"
      });
    }
  };
};

export { __nuxt_component_1$1 as _, __nuxt_component_1 as a, useAppToast as b, useFormEvents as u };
//# sourceMappingURL=useAppToast-BHAQYvqX.mjs.map
