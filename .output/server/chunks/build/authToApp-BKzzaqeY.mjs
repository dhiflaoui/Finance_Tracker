import { ref, resolveComponent, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "authToApp",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("tab1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_tabs = resolveComponent("n-tabs");
      const _component_n_tab = resolveComponent("n-tab");
      const _component_Login = resolveComponent("Login");
      const _component_SignUp = resolveComponent("SignUp");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_n_tabs, {
        modelValue: unref(activeTab),
        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_tab, {
              name: "tab1",
              label: "SignIn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_tab, {
              name: "tab2",
              label: "SignUp"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_tab, {
                name: "tab1",
                label: "SignIn"
              }),
              createVNode(_component_n_tab, {
                name: "tab2",
                label: "SignUp"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeTab) === "tab1") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Login, null, null, _parent));
        _push(`</div>`);
      } else if (unref(activeTab) === "tab2") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SignUp, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/authToApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=authToApp-BKzzaqeY.mjs.map
