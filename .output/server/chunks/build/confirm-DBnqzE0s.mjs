import { _ as __nuxt_component_1 } from './Card-j3nIaTpi.mjs';
import { withCtx, createTextVNode, useSSRContext, watch } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSupabaseUser, n as navigateTo } from './server.mjs';
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
    useRedirectIfAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Signing in... `);
          } else {
            return [
              createTextVNode(" Signing in... ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Wait a moment while we sign you in... `);
          } else {
            return [
              createTextVNode(" Wait a moment while we sign you in... ")
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

export { _sfc_main as default };
//# sourceMappingURL=confirm-DBnqzE0s.mjs.map
