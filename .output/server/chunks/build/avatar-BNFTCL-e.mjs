import { b as useAppToast, _ as __nuxt_component_1$1, a as __nuxt_component_1 } from './useAppToast-D07YE5h4.mjs';
import { u as useSupabaseUser, c as __nuxt_component_4, g as __nuxt_component_2$1 } from './server.mjs';
import { ref, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSupabaseClient } from './useSupabaseClient-BOXXNXEX.mjs';
import { u as useAvatarUrl } from './useAvatarUrl-DeaaobzZ.mjs';
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
  __name: "avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const { toastSuccess, toastError } = useAppToast();
    const uploading = ref(false);
    const fileInput = ref(null);
    const { avatarUrl: url } = useAvatarUrl();
    const saveAvatar = async () => {
      var _a;
      const file = fileInput.value.input.files[0];
      if (!file) {
        toastError({
          title: "No file selected",
          description: "Please select a file to upload First"
        });
        return;
      }
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      try {
        uploading.value = true;
        const currentAvatar = (_a = user.value.user_metadata) == null ? void 0 : _a.avatar_url;
        const { error } = await supabase.storage.from("avatars").upload(`${user.value.id}/${fileName}`, file, {
          cacheControl: "3600",
          upsert: true
        });
        if (error)
          throw error;
        toastSuccess({
          title: "Avatar uploaded successfully",
          description: "Your avatar has been uploaded successfully"
        });
        await supabase.auth.updateUser({
          data: {
            avatar_url: `${user.value.id}/${fileName}`
          }
        });
        if (currentAvatar) {
          const { error: error2 } = await supabase.storage.from("avatars").remove([`${user.value.id}/${currentAvatar.split("/").pop()}`]);
          if (error2)
            throw error2;
        }
        fileInput.value.input.value = null;
      } catch (error) {
        toastError({
          title: "Error uploading avatar",
          description: error.message
        });
      } finally {
        uploading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UAvatar = __nuxt_component_4;
      const _component_UInput = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Current avatar",
        class: "w-full",
        help: "This would be blank by default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: (_a = unref(url)) != null ? _a : "https://avatars.githubusercontent.com/u/739984?v=4",
              size: "3xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UAvatar, {
                src: (_b = unref(url)) != null ? _b : "https://avatars.githubusercontent.com/u/739984?v=4",
                size: "3xl"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "New avatar",
        class: "w-full",
        name: "avatar",
        help: "After choosing an image click Save to actually upload the new avatar"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              type: "file",
              ref_key: "fileInput",
              ref: fileInput
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                type: "file",
                ref_key: "fileInput",
                ref: fileInput
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        color: "black",
        variant: "solid",
        label: "Save",
        loading: unref(uploading),
        disabled: unref(uploading),
        onClick: saveAvatar
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=avatar-BNFTCL-e.mjs.map
