import { _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "404Page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen" }, _attrs))} data-v-4ebc1bf6><h1 class="text-4xl font-bold mb-4" data-v-4ebc1bf6>Page Not Found</h1><p class="text-lg mb-8" data-v-4ebc1bf6> Sorry, the page you are looking for does not exist. </p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-blue-500 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go back to Home`);
          } else {
            return [
              createTextVNode("Go back to Home")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ebc1bf6"]]);

export { _404Page as default };
//# sourceMappingURL=404Page-eap09HI7.mjs.map
