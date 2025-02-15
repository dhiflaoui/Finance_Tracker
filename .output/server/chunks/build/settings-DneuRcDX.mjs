import { _ as __nuxt_component_0 } from './Form-Bw62B85A.mjs';
import { a as useAppToast, b as __nuxt_component_1, _ as __nuxt_component_1$1 } from './useAppToast-ByP0wevk.mjs';
import { _ as __nuxt_component_2 } from './Select-DjvXt6Ei.mjs';
import { u as useSupabaseUser, h as __nuxt_component_2$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext, isRef, withKeys } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { z } from 'zod';
import { t as transactionViewOptions, b as currencyOptions } from './constants-BX1jF9zp.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import { u as useCategoryList } from './useCategoryList-BezbSZ5f.mjs';
import '@vueuse/core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'lodash-es';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';

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
      const _component_UFormGroup = __nuxt_component_1;
      const _component_UInput = __nuxt_component_1$1;
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
      const _component_UFormGroup = __nuxt_component_1;
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
//# sourceMappingURL=settings-DneuRcDX.mjs.map
