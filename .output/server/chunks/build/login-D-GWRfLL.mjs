import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Card-J1mmD4IC.mjs';
import { l as useRuntimeConfig, c as __nuxt_component_1, h as __nuxt_component_2$1 } from './server.mjs';
import { a as useAppToast, b as __nuxt_component_1$1, _ as __nuxt_component_1$1$1 } from './useAppToast-ByP0wevk.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, withModifiers } from 'vue';
import { z } from 'zod';
import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import '../runtime.mjs';
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

const _sfc_main$1 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const success = ref(false);
    const email = ref("");
    const pending = ref(false);
    const supabase = useSupabaseClient();
    const { toastError } = useAppToast();
    const redirectUrl = useRuntimeConfig().public.baseUrl;
    console.log('"""""""""""redirectUrl""""""""""""""": ', redirectUrl);
    const emailSchema = z.string().email("Please enter a valid email address");
    const errors = ref("");
    const validateField = () => {
      try {
        emailSchema.parse(email.value);
        errors.value = "";
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.value = error.errors[0].message;
        }
      }
    };
    const handleLogin = async () => {
      validateField();
      if (errors.value) {
        return;
      }
      pending.value = true;
      try {
        const { error } = await supabase.auth.signInWithOtp({
          email: email.value,
          options: {
            emailRedirectTo: `${redirectUrl}/confirm`
          }
        });
        if (error) {
          toastError({
            title: "Error authenticating",
            description: error.message
          });
        } else {
          success.value = true;
        }
      } catch (error) {
        console.error("Error authenticating:", error);
        email.value = "";
        errors.value = "";
        success.value = false;
      } finally {
        pending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_1$1$1;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4" }, _attrs))}><div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent"></div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "w-full max-w-md relative z-10 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 text-center"${_scopeId}><div class="flex justify-center"${_scopeId}><div class="p-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-trending-up",
              class: "h-8 w-8 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><h1 class="text-2xl font-bold text-white"${_scopeId}>Welcome Back</h1><p class="text-slate-400"${_scopeId}>Sign in to your finance dashboard</p></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 text-center" }, [
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode("div", { class: "p-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-trending-up",
                      class: "h-8 w-8 text-white"
                    })
                  ])
                ]),
                createVNode("h1", { class: "text-2xl font-bold text-white" }, "Welcome Back"),
                createVNode("p", { class: "text-slate-400" }, "Sign in to your finance dashboard")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!success.value) {
              _push2(`<div class="space-y-6"${_scopeId}><form${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormGroup, {
                label: "Email Address",
                name: "email",
                class: "mb-2 text-sm",
                required: true,
                help: "You will receive an email with the confirmation link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      type: "email",
                      required: "",
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      onBlur: validateField,
                      placeholder: "Enter your email"
                    }, {
                      leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-envelope" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        type: "email",
                        required: "",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        onBlur: validateField,
                        placeholder: "Enter your email"
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="${ssrRenderClass([{ "text-red-600": errors.value }, "h-5 text-sm mb-2"])}"${_scopeId}>${ssrInterpolate(errors.value)}</p>`);
              _push2(ssrRenderComponent(_component_UButton, {
                type: "submit",
                variant: "outline",
                color: "teal",
                block: "",
                class: [
                  "w-full bg-gradient-to-r  text-white font-medium py-2.5 transition-all duration-200 rounded-xl shadow-md hover:shadow-xl",
                  {
                    "transition-transform hover:scale-[1.02] active:scale-[0.98]": !pending.value && !errors.value
                  }
                ],
                loading: pending.value,
                disabled: pending.value || !!errors.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (pending.value) {
                      _push3(`<div class="flex items-center space-x-2"${_scopeId2}><span${_scopeId2}>Signing in...</span></div>`);
                    } else {
                      _push3(`<!--[--> Sign In <!--]-->`);
                    }
                  } else {
                    return [
                      pending.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center space-x-2"
                      }, [
                        createVNode("span", null, "Signing in...")
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Sign In ")
                      ], 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form></div>`);
            } else {
              _push2(ssrRenderComponent(_component_UCard, { ui: {
                divide: "divide-y-0",
                header: { padding: "px-4 py-5 sm:px-6" },
                body: { padding: "px-4 py-5 sm:p-6" }
              } }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="font-bold text-xl"${_scopeId2}>Email has been sent</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "font-bold text-xl" }, "Email has been sent")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}><p${_scopeId2}> We have sent an email to <strong${_scopeId2}>${ssrInterpolate(email.value)}</strong> with a link to sign in </p><p class="font-bold"${_scopeId2}>Important: the link will expire in 5 minutes.</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("p", null, [
                          createTextVNode(" We have sent an email to "),
                          createVNode("strong", null, toDisplayString(email.value), 1),
                          createTextVNode(" with a link to sign in ")
                        ]),
                        createVNode("p", { class: "font-bold" }, "Important: the link will expire in 5 minutes.")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              !success.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-6"
              }, [
                createVNode("form", {
                  onSubmit: withModifiers(handleLogin, ["prevent"])
                }, [
                  createVNode(_component_UFormGroup, {
                    label: "Email Address",
                    name: "email",
                    class: "mb-2 text-sm",
                    required: true,
                    help: "You will receive an email with the confirmation link"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        type: "email",
                        required: "",
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        onBlur: validateField,
                        placeholder: "Enter your email"
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("p", {
                    class: [{ "text-red-600": errors.value }, "h-5 text-sm mb-2"]
                  }, toDisplayString(errors.value), 3),
                  createVNode(_component_UButton, {
                    type: "submit",
                    variant: "outline",
                    color: "teal",
                    block: "",
                    class: [
                      "w-full bg-gradient-to-r  text-white font-medium py-2.5 transition-all duration-200 rounded-xl shadow-md hover:shadow-xl",
                      {
                        "transition-transform hover:scale-[1.02] active:scale-[0.98]": !pending.value && !errors.value
                      }
                    ],
                    loading: pending.value,
                    disabled: pending.value || !!errors.value
                  }, {
                    default: withCtx(() => [
                      pending.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center space-x-2"
                      }, [
                        createVNode("span", null, "Signing in...")
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Sign In ")
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["class", "loading", "disabled"])
                ], 32)
              ])) : (openBlock(), createBlock(_component_UCard, {
                key: 1,
                ui: {
                  divide: "divide-y-0",
                  header: { padding: "px-4 py-5 sm:px-6" },
                  body: { padding: "px-4 py-5 sm:p-6" }
                }
              }, {
                header: withCtx(() => [
                  createVNode("span", { class: "font-bold text-xl" }, "Email has been sent")
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", null, [
                      createTextVNode(" We have sent an email to "),
                      createVNode("strong", null, toDisplayString(email.value), 1),
                      createTextVNode(" with a link to sign in ")
                    ]),
                    createVNode("p", { class: "font-bold" }, "Important: the link will expire in 5 minutes.")
                  ])
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-D-GWRfLL.mjs.map
