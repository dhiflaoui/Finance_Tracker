import { _ as __nuxt_component_0 } from './Form-Bw62B85A.mjs';
import { a as useAppToast, b as __nuxt_component_1, _ as __nuxt_component_1$1 } from './useAppToast-ByP0wevk.mjs';
import { u as useSupabaseUser, h as __nuxt_component_2$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { z } from 'zod';
import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import '@vueuse/core';
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

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const { toastSuccess, toastError } = useAppToast();
    const pending = ref(false);
    const state = ref({
      name: (_a = user.value.user_metadata) == null ? void 0 : _a.full_name,
      email: user.value.email
    });
    const schema = z.object({
      name: z.string().min(2).optional(),
      email: z.string().email()
    });
    const saveProfile = async () => {
      pending.value = true;
      try {
        const data = {
          data: {
            full_name: state.value.name
          }
        };
        if (state.value.email !== user.value.email) {
          data.email = state.value.email;
        }
        const { error } = await supabase.auth.updateUser(data);
        if (error)
          throw error;
        toastSuccess({
          title: "Profile updated",
          description: "Your profile has been updated"
        });
      } catch (error) {
        toastError({
          title: "Error updating profile",
          description: error.message
        });
      } finally {
        pending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1;
      const _component_UInput = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        state: unref(state),
        schema: unref(schema),
        onSubmit: saveProfile
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "mb-4",
              label: "Full Name",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              class: "mb-4",
              label: "Email",
              name: "email",
              help: "You will receive a confirmation email on both the old and the new addresses if you modify the email address"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
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
                class: "mb-4",
                label: "Full Name",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                class: "mb-4",
                label: "Email",
                name: "email",
                help: "You will receive a confirmation email on both the old and the new addresses if you modify the email address"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-zVB4cXzo.mjs.map
