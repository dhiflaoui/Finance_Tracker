import { _ as __nuxt_component_0 } from './Form-Bw62B85A.mjs';
import { u as useFormEvents, a as useAppToast, b as __nuxt_component_1$1, _ as __nuxt_component_1$1$1 } from './useAppToast-ByP0wevk.mjs';
import { c as __nuxt_component_1, e as appConfig, f as useAppConfig, g as classNames, u as useSupabaseUser, h as __nuxt_component_2$1, _ as _export_sfc } from './server.mjs';
import { defineComponent, computed, useSSRContext, ref, mergeProps, unref, withCtx, createVNode, isRef, withKeys } from 'vue';
import { get } from 'lodash-es';
import { q as defu } from '../runtime.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { z } from 'zod';
import { t as transactionViewOptions, b as currencyOptions } from './constants-BX1jF9zp.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import { u as useCategoryList } from './useCategoryList-BezbSZ5f.mjs';
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
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
      default: () => appConfig.ui.select.default.trailingIcon
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
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: () => appConfig.ui.select.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.select.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.select.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.select.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.select.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.select.variant),
          ...Object.values(appConfig.ui.select.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.select
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.select));
    const { emitFormBlur } = useFormEvents();
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emitFormBlur();
      emit("change", event);
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.base,
        ui.value.rounded,
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
      normalizedOptionsWithPlaceholder,
      normalizedValue,
      isLeading,
      isTrailing,
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><select${ssrRenderAttrs(mergeProps({
    id: _ctx.name,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled || _ctx.loading,
    class: ["form-select", _ctx.selectClass]
  }, _ctx.$attrs))}><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])}><!--[-->`);
      ssrRenderList(option.children, (childOption, index2) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""}>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""}>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
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
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "CategoryInput",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      required: true
    },
    initialCategories: {
      type: Array,
      required: true
    }
  },
  emits: ["update:categories"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const newCategory = ref("");
    const addItem = () => {
      if (!newCategory.value)
        return;
      const updatedCategories = [...props.categories, newCategory.value];
      emit("update:categories", updatedCategories);
      newCategory.value = "";
    };
    const removeItem = (category) => {
      const updatedCategories = props.categories.filter((c) => c !== category);
      emit("update:categories", updatedCategories);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_1$1$1;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex gap-2 items-start">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Expense categories",
        name: "newCategory",
        class: "flex-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              type: "text",
              placeholder: "Add new category...",
              onKeyup: addItem,
              modelValue: unref(newCategory),
              "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
              clearable: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                type: "text",
                placeholder: "Add new category...",
                onKeyup: withKeys(addItem, ["enter"]),
                modelValue: unref(newCategory),
                "onUpdate:modelValue": ($event) => isRef(newCategory) ? newCategory.value = $event : null,
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "mt-7",
        onClick: addItem,
        color: "primary",
        size: "md",
        label: "Add",
        disabled: !unref(newCategory)
      }, null, _parent));
      _push(`</div><div class="mt-4 space-y-2"><!--[-->`);
      ssrRenderList(__props.categories, (catg) => {
        _push(`<div class="flex items-center justify-between p-1 rounded border"><span>${ssrInterpolate(catg)}</span>`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "red",
          variant: "soft",
          icon: "i-heroicons-trash",
          onClick: ($event) => removeItem(catg),
          title: "Delete category"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoryInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2, _b2;
    var _a, _b, _c, _d;
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const { toastSuccess, toastError } = useAppToast();
    const pending = ref(false);
    const { categoryList } = useCategoryList();
    const state = ref({
      transactionView: (_a2 = (_b = (_a = user.value) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.transaction_view) != null ? _a2 : transactionViewOptions[1],
      currency: (_b2 = (_d = (_c = user.value) == null ? void 0 : _c.user_metadata) == null ? void 0 : _d.currency) != null ? _b2 : "USD",
      categories: categoryList.value
    });
    const schema = z.object({
      transactionView: z.enum(transactionViewOptions),
      currency: z.string(),
      categories: z.array(z.string())
    });
    const saveSettings = async () => {
      pending.value = true;
      try {
        const { error } = await supabase.auth.updateUser({
          data: {
            transaction_view: state.value.transactionView,
            currency: state.value.currency,
            categories: state.value.categories
          }
        });
        if (error)
          throw error;
        toastSuccess({ title: "Settings updated" });
      } catch (error) {
        toastError({
          title: "Error updating settings",
          description: error.message
        });
      } finally {
        pending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_USelect = __nuxt_component_2;
      const _component_CategoryInput = _sfc_main$1;
      const _component_UButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        state: unref(state),
        schema: unref(schema),
        onSubmit: saveSettings
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Transaction View",
              class: "mb-4",
              help: "Choose how you would like to view transactions"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(state).transactionView,
                    "onUpdate:modelValue": ($event) => unref(state).transactionView = $event,
                    options: unref(transactionViewOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(state).transactionView,
                      "onUpdate:modelValue": ($event) => unref(state).transactionView = $event,
                      options: unref(transactionViewOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Currency",
              class: "mb-4",
              help: "Choose the currency you would like to use"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(state).currency,
                    "onUpdate:modelValue": ($event) => unref(state).currency = $event,
                    options: unref(currencyOptions)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(state).currency,
                      "onUpdate:modelValue": ($event) => unref(state).currency = $event,
                      options: unref(currencyOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CategoryInput, {
              categories: unref(state).categories,
              "onUpdate:categories": ($event) => unref(state).categories = $event,
              "initial-categories": unref(categoryList)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              class: "mt-4",
              type: "submit",
              color: "black",
              variant: "solid",
              label: "Save",
              loading: unref(pending),
              disabled: unref(pending)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "Transaction View",
                class: "mb-4",
                help: "Choose how you would like to view transactions"
              }, {
                default: withCtx(() => [
                  createVNode(_component_USelect, {
                    modelValue: unref(state).transactionView,
                    "onUpdate:modelValue": ($event) => unref(state).transactionView = $event,
                    options: unref(transactionViewOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "Currency",
                class: "mb-4",
                help: "Choose the currency you would like to use"
              }, {
                default: withCtx(() => [
                  createVNode(_component_USelect, {
                    modelValue: unref(state).currency,
                    "onUpdate:modelValue": ($event) => unref(state).currency = $event,
                    options: unref(currencyOptions)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_CategoryInput, {
                categories: unref(state).categories,
                "onUpdate:categories": ($event) => unref(state).categories = $event,
                "initial-categories": unref(categoryList)
              }, null, 8, ["categories", "onUpdate:categories", "initial-categories"]),
              createVNode(_component_UButton, {
                class: "mt-4",
                type: "submit",
                color: "black",
                variant: "solid",
                label: "Save",
                loading: unref(pending),
                disabled: unref(pending)
              }, null, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-B2l1EApn.mjs.map
