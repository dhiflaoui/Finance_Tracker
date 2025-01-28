import { _ as _export_sfc, u as useSupabaseUser, n as navigateTo, b as __nuxt_component_0$3 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext, watch } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import '@supabase/ssr';
import 'lodash-es';

const useRedirectIfAuth = (url = "/") => {
  const user = useSupabaseUser();
  watch(
    user,
    (user2) => {
      console.log("user: ", user2);
      if (user2) {
        navigateTo(url);
      }
    },
    { immediate: true }
  );
  return { user };
};
const _sfc_main = {
  __name: "confirm",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    router.currentRoute.value;
    ref(true);
    useRedirectIfAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "empty" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="spinner-container" data-v-426f4b14${_scopeId}><div class="spinner" data-v-426f4b14${_scopeId}></div><h1 class="loading-text" data-v-426f4b14${_scopeId}> Please hold on while we process your request... </h1></div>`);
          } else {
            return [
              createVNode("div", { class: "spinner-container" }, [
                createVNode("div", { class: "spinner" }),
                createVNode("h1", { class: "loading-text" }, " Please hold on while we process your request... ")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-426f4b14"]]);

export { confirm as default };
//# sourceMappingURL=confirm-DSevv6Lj.mjs.map
