import { _ as __nuxt_component_0 } from './Card-J1mmD4IC.mjs';
import { u as useFormEvents, a as __nuxt_component_1, _ as __nuxt_component_1$1 } from './FormGroup-CjdXc7SC.mjs';
import { defineComponent, computed, useSSRContext, ref, watch, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, unref, Fragment, renderList, withModifiers } from 'vue';
import { q as defu } from '../runtime.mjs';
import { e as appConfig, f as useAppConfig, g as classNames, h as __nuxt_component_3, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrLooseContain } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './Select-Ca4ggLVM.mjs';
import { z } from 'zod';
import { u as useFetchTransactions } from './useFetchTransactions-CYL2yxWR.mjs';
import { u as useCategoryList } from './useCategoryList-BezbSZ5f.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'lodash-es';
import './useSupabaseClient-DpDrOPe6.mjs';
import './constants-BX1jF9zp.mjs';

const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => appConfig.ui.radio.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.radio
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.radio));
    const { emitFormBlur } = useFormEvents();
    const pick = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        if (value) {
          emitFormBlur();
        }
      }
    });
    const inputClass = computed(() => {
      return classNames(
        ui.value.base,
        ui.value.background,
        ui.value.border,
        ui.value.ring.replaceAll("{color}", props.color),
        ui.value.color.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      pick,
      inputClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><div class="flex items-center h-5"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: `${_ctx.name}-${_ctx.value}`,
    checked: ssrLooseEqual(_ctx.pick, _ctx.value),
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    type: "radio",
    class: ["form-radio", _ctx.inputClass]
  }, _ctx.$attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.pick))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="ms-3 text-sm"><label${ssrRenderAttr("for", `${_ctx.name}-${_ctx.value}`)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">${ssrInterpolate(_ctx.help)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/forms/Radio.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => appConfig.ui.checkbox.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.checkbox
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.checkbox));
    const { emitFormBlur } = useFormEvents();
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event);
      emitFormBlur();
    };
    const inputClass = computed(() => {
      return classNames(
        ui.value.base,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        ui.value.ring.replaceAll("{color}", props.color),
        ui.value.color.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      toggle,
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><div class="flex items-center h-5"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.name,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: ["form-checkbox", _ctx.inputClass]
  }, _ctx.$attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="ms-3 text-sm"><label${ssrRenderAttr("for", _ctx.name)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">${ssrInterpolate(_ctx.help)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const { categoryList } = useCategoryList();
    const {
      setOverallLimit,
      setCategoryLimit,
      setLimitTimePeriod,
      setNotificationSettings
    } = useFetchTransactions();
    const limitType = ref("overall");
    const overallLimit = ref(0);
    const categoryLimits = ref([{ category: "", amount: 0 }]);
    const limitTimePeriod = ref("monthly");
    const pending = ref(false);
    const notifications = ref({
      email: true,
      push: false,
      threshold: 80
    });
    const overallLimitError = ref("");
    const categoryLimitError = ref("");
    const timePeriodOptions = [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "yearly", label: "Yearly" }
    ];
    watch(limitType, (newType) => {
      if (newType === "overall") {
        categoryLimits.value = [{ category: "", amount: 0 }];
        categoryLimitError.value = "";
      } else {
        overallLimit.value = 0;
        overallLimitError.value = "";
      }
    });
    const schema = computed(() => {
      if (limitType.value === "overall") {
        return z.object({
          overallLimit: z.number().positive("Overall spending limit must be a positive number."),
          notifications: z.object({
            threshold: z.number().min(1).max(100)
          })
        });
      } else {
        return z.object({
          categoryLimits: z.array(
            z.object({
              category: z.string().min(1, "Category is required"),
              amount: z.number().min(0, "Amount must be non-negative")
            })
          ),
          notifications: z.object({
            threshold: z.number().min(1).max(100)
          })
        });
      }
    });
    const hasErrors = computed(() => {
      return overallLimitError.value || categoryLimitError.value;
    });
    const addCategoryLimit = () => {
      categoryLimits.value.push({ category: "", amount: 0 });
    };
    const removeCategoryLimit = (index) => {
      categoryLimits.value.splice(index, 1);
    };
    const validateSettings = () => {
      overallLimitError.value = "";
      categoryLimitError.value = "";
      try {
        const validationData = limitType.value === "overall" ? {
          overallLimit: Number(overallLimit.value),
          notifications: {
            threshold: Number(notifications.value.threshold)
          }
        } : {
          categoryLimits: categoryLimits.value.map((limit) => ({
            category: limit.category,
            amount: Number(limit.amount)
          })),
          notifications: {
            threshold: Number(notifications.value.threshold)
          }
        };
        schema.value.parse(validationData);
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          error.errors.forEach((err) => {
            if (err.path[0] === "overallLimit") {
              overallLimitError.value = err.message;
            } else if (err.path[0] === "categoryLimits") {
              categoryLimitError.value = "Please check category limits for errors";
            }
          });
        }
        return false;
      }
    };
    const saveSettings = async () => {
      if (!validateSettings())
        return;
      pending.value = true;
      try {
        if (limitType.value === "overall") {
          await setOverallLimit({
            amount: overallLimit.value
          });
        } else {
          await Promise.all(
            categoryLimits.value.map(
              (limit) => setCategoryLimit({
                category: limit.category,
                amount: limit.amount
              })
            )
          );
        }
        await setLimitTimePeriod(limitTimePeriod.value);
        await setNotificationSettings(notifications.value);
        alert("Settings saved successfully!");
      } catch (error) {
        console.error("Error saving settings:", error);
        alert("Failed to save settings. Please try again.");
      } finally {
        pending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1;
      const _component_URadio = __nuxt_component_2;
      const _component_UInput = __nuxt_component_1$1;
      const _component_USelect = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3;
      const _component_UCheckbox = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-3xl font-bold"${_scopeId}>Spent Limiter</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-3xl font-bold" }, "Spent Limiter")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Limit Type",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_URadio, {
                    modelValue: limitType.value,
                    "onUpdate:modelValue": ($event) => limitType.value = $event,
                    value: "overall",
                    label: "Overall Spending Limit"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_URadio, {
                    modelValue: limitType.value,
                    "onUpdate:modelValue": ($event) => limitType.value = $event,
                    value: "category",
                    label: "Category Spending Limits"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_URadio, {
                        modelValue: limitType.value,
                        "onUpdate:modelValue": ($event) => limitType.value = $event,
                        value: "overall",
                        label: "Overall Spending Limit"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_URadio, {
                        modelValue: limitType.value,
                        "onUpdate:modelValue": ($event) => limitType.value = $event,
                        value: "category",
                        label: "Category Spending Limits"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (limitType.value === "overall") {
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "Overall Spending Limit",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UInput, {
                      type: "number",
                      modelValue: overallLimit.value,
                      "onUpdate:modelValue": ($event) => overallLimit.value = $event,
                      placeholder: "Enter overall spending limit",
                      disabled: pending.value,
                      step: "0.01",
                      min: "0"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (overallLimitError.value) {
                      _push3(`<span class="text-red-500"${_scopeId2}>${ssrInterpolate(overallLimitError.value)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UInput, {
                          type: "number",
                          modelValue: overallLimit.value,
                          "onUpdate:modelValue": ($event) => overallLimit.value = $event,
                          placeholder: "Enter overall spending limit",
                          disabled: pending.value,
                          step: "0.01",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      overallLimitError.value ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, toDisplayString(overallLimitError.value), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "Category Spending Limits",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(categoryLimits.value, (limit, index) => {
                      _push3(`<div class="mb-2"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_USelect, {
                        modelValue: limit.category,
                        "onUpdate:modelValue": ($event) => limit.category = $event,
                        options: unref(categoryList),
                        class: "flex-1",
                        disabled: pending.value
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UInput, {
                        type: "number",
                        modelValue: limit.amount,
                        "onUpdate:modelValue": ($event) => limit.amount = $event,
                        placeholder: "Limit amount",
                        class: "w-32",
                        disabled: pending.value,
                        step: "0.01",
                        min: "0"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "red",
                        variant: "soft",
                        icon: "i-heroicons-trash",
                        onClick: ($event) => removeCategoryLimit(index),
                        disabled: pending.value
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "sm",
                      color: "gray",
                      variant: "soft",
                      icon: "i-heroicons-plus",
                      label: "Add Category Limit",
                      onClick: addCategoryLimit,
                      disabled: pending.value || categoryLimits.value.length >= unref(categoryList).length,
                      class: "mt-2"
                    }, null, _parent3, _scopeId2));
                    if (categoryLimitError.value) {
                      _push3(`<span class="text-red-500"${_scopeId2}>${ssrInterpolate(categoryLimitError.value)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(categoryLimits.value, (limit, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "mb-2"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_USelect, {
                              modelValue: limit.category,
                              "onUpdate:modelValue": ($event) => limit.category = $event,
                              options: unref(categoryList),
                              class: "flex-1",
                              disabled: pending.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"]),
                            createVNode(_component_UInput, {
                              type: "number",
                              modelValue: limit.amount,
                              "onUpdate:modelValue": ($event) => limit.amount = $event,
                              placeholder: "Limit amount",
                              class: "w-32",
                              disabled: pending.value,
                              step: "0.01",
                              min: "0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                            createVNode(_component_UButton, {
                              color: "red",
                              variant: "soft",
                              icon: "i-heroicons-trash",
                              onClick: ($event) => removeCategoryLimit(index),
                              disabled: pending.value
                            }, null, 8, ["onClick", "disabled"])
                          ])
                        ]);
                      }), 128)),
                      createVNode(_component_UButton, {
                        size: "sm",
                        color: "gray",
                        variant: "soft",
                        icon: "i-heroicons-plus",
                        label: "Add Category Limit",
                        onClick: addCategoryLimit,
                        disabled: pending.value || categoryLimits.value.length >= unref(categoryList).length,
                        class: "mt-2"
                      }, null, 8, ["disabled"]),
                      categoryLimitError.value ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, toDisplayString(categoryLimitError.value), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Limit Time Period",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: limitTimePeriod.value,
                    "onUpdate:modelValue": ($event) => limitTimePeriod.value = $event,
                    options: timePeriodOptions,
                    disabled: pending.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: limitTimePeriod.value,
                      "onUpdate:modelValue": ($event) => limitTimePeriod.value = $event,
                      options: timePeriodOptions,
                      disabled: pending.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Notification Settings",
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: notifications.value.email,
                    "onUpdate:modelValue": ($event) => notifications.value.email = $event,
                    label: "Email notifications",
                    disabled: pending.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: notifications.value.push,
                    "onUpdate:modelValue": ($event) => notifications.value.push = $event,
                    label: "Push notifications",
                    disabled: pending.value
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-2"${_scopeId2}><label class="text-sm text-gray-600"${_scopeId2}>Warning Threshold</label><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    type: "number",
                    modelValue: notifications.value.threshold,
                    "onUpdate:modelValue": ($event) => notifications.value.threshold = $event,
                    placeholder: "Warning threshold %",
                    class: "w-32",
                    disabled: pending.value,
                    min: "1",
                    max: "100"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-sm text-gray-600"${_scopeId2}>% of limit</span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: notifications.value.email,
                        "onUpdate:modelValue": ($event) => notifications.value.email = $event,
                        label: "Email notifications",
                        disabled: pending.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_UCheckbox, {
                        modelValue: notifications.value.push,
                        "onUpdate:modelValue": ($event) => notifications.value.push = $event,
                        label: "Push notifications",
                        disabled: pending.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode("label", { class: "text-sm text-gray-600" }, "Warning Threshold"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: notifications.value.threshold,
                            "onUpdate:modelValue": ($event) => notifications.value.threshold = $event,
                            placeholder: "Warning threshold %",
                            class: "w-32",
                            disabled: pending.value,
                            min: "1",
                            max: "100"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode("span", { class: "text-sm text-gray-600" }, "% of limit")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              class: "mt-4",
              type: "submit",
              color: "black",
              variant: "solid",
              label: "Save Settings",
              loading: pending.value,
              disabled: pending.value || hasErrors.value
            }, null, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(saveSettings, ["prevent"])
              }, [
                createVNode(_component_UFormGroup, {
                  label: "Limit Type",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_URadio, {
                        modelValue: limitType.value,
                        "onUpdate:modelValue": ($event) => limitType.value = $event,
                        value: "overall",
                        label: "Overall Spending Limit"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_URadio, {
                        modelValue: limitType.value,
                        "onUpdate:modelValue": ($event) => limitType.value = $event,
                        value: "category",
                        label: "Category Spending Limits"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                limitType.value === "overall" ? (openBlock(), createBlock(_component_UFormGroup, {
                  key: 0,
                  label: "Overall Spending Limit",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UInput, {
                        type: "number",
                        modelValue: overallLimit.value,
                        "onUpdate:modelValue": ($event) => overallLimit.value = $event,
                        placeholder: "Enter overall spending limit",
                        disabled: pending.value,
                        step: "0.01",
                        min: "0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    overallLimitError.value ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-red-500"
                    }, toDisplayString(overallLimitError.value), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_UFormGroup, {
                  key: 1,
                  label: "Category Spending Limits",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(categoryLimits.value, (limit, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "mb-2"
                      }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_USelect, {
                            modelValue: limit.category,
                            "onUpdate:modelValue": ($event) => limit.category = $event,
                            options: unref(categoryList),
                            class: "flex-1",
                            disabled: pending.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"]),
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: limit.amount,
                            "onUpdate:modelValue": ($event) => limit.amount = $event,
                            placeholder: "Limit amount",
                            class: "w-32",
                            disabled: pending.value,
                            step: "0.01",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(_component_UButton, {
                            color: "red",
                            variant: "soft",
                            icon: "i-heroicons-trash",
                            onClick: ($event) => removeCategoryLimit(index),
                            disabled: pending.value
                          }, null, 8, ["onClick", "disabled"])
                        ])
                      ]);
                    }), 128)),
                    createVNode(_component_UButton, {
                      size: "sm",
                      color: "gray",
                      variant: "soft",
                      icon: "i-heroicons-plus",
                      label: "Add Category Limit",
                      onClick: addCategoryLimit,
                      disabled: pending.value || categoryLimits.value.length >= unref(categoryList).length,
                      class: "mt-2"
                    }, null, 8, ["disabled"]),
                    categoryLimitError.value ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-red-500"
                    }, toDisplayString(categoryLimitError.value), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })),
                createVNode(_component_UFormGroup, {
                  label: "Limit Time Period",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: limitTimePeriod.value,
                      "onUpdate:modelValue": ($event) => limitTimePeriod.value = $event,
                      options: timePeriodOptions,
                      disabled: pending.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Notification Settings",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: notifications.value.email,
                        "onUpdate:modelValue": ($event) => notifications.value.email = $event,
                        label: "Email notifications",
                        disabled: pending.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(_component_UCheckbox, {
                        modelValue: notifications.value.push,
                        "onUpdate:modelValue": ($event) => notifications.value.push = $event,
                        label: "Push notifications",
                        disabled: pending.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode("label", { class: "text-sm text-gray-600" }, "Warning Threshold"),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: notifications.value.threshold,
                            "onUpdate:modelValue": ($event) => notifications.value.threshold = $event,
                            placeholder: "Warning threshold %",
                            class: "w-32",
                            disabled: pending.value,
                            min: "1",
                            max: "100"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode("span", { class: "text-sm text-gray-600" }, "% of limit")
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  class: "mt-4",
                  type: "submit",
                  color: "black",
                  variant: "solid",
                  label: "Save Settings",
                  loading: pending.value,
                  disabled: pending.value || hasErrors.value
                }, null, 8, ["loading", "disabled"])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notifications-BilAbqfh.mjs.map
