import { c as __nuxt_component_1, d as __nuxt_component_4, m as __nuxt_component_0$1, e as appConfig, f as useAppConfig, o as __nuxt_component_1$1, _ as _export_sfc } from './server.mjs';
import { defineComponent, computed, useSSRContext, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { q as defu } from '../runtime.mjs';
import { omit } from 'lodash-es';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_1,
    UAvatar: __nuxt_component_4,
    ULink: __nuxt_component_0$1
  },
  props: {
    links: {
      type: Array,
      default: () => []
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.verticalNavigation
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.verticalNavigation));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      omit
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_4;
  const _component_UIcon = __nuxt_component_1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.links, (link, index) => {
    _push(ssrRenderComponent(_component_ULink, mergeProps({
      key: index,
      ref_for: true
    }, _ctx.omit(link, ["label", "icon", "iconClass", "avatar", "badge", "click"]), {
      class: [_ctx.ui.base, _ctx.ui.padding, _ctx.ui.width, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.font, _ctx.ui.size],
      "active-class": _ctx.ui.active,
      "inactive-class": _ctx.ui.inactive,
      onClick: link.click,
      onKeyup: ($event) => $event.target.blur()
    }), {
      default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "avatar", {
            link,
            isActive
          }, () => {
            if (link.avatar) {
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                class: [_ctx.ui.avatar.base]
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "icon", {
            link,
            isActive
          }, () => {
            if (link.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: [_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, link.iconClass]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "default", {
            link,
            isActive
          }, () => {
            if (link.label) {
              _push2(`<span class="${ssrRenderClass(_ctx.ui.label)}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "badge", {
            link,
            isActive
          }, () => {
            if (link.badge) {
              _push2(`<span class="${ssrRenderClass([_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive])}"${_scopeId}>${ssrInterpolate(link.badge)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => [
              link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                key: 0,
                ref_for: true
              }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                class: [_ctx.ui.avatar.base]
              }), null, 16, ["class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => [
              link.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: link.icon,
                class: [_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, link.iconClass]
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => [
              link.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: _ctx.ui.label
              }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => [
              link.badge ? (openBlock(), createBlock("span", {
                key: 0,
                class: [_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive]
              }, toDisplayString(link.badge), 3)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/navigation/VerticalNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        label: "Profile",
        icon: "i-heroicons-user",
        to: "/settings/profile"
      },
      {
        label: "Avatar",
        icon: "i-heroicons-cog-8-tooth",
        to: "/settings/avatar"
      },
      {
        label: "Settings",
        icon: "i-heroicons-cog-8-tooth",
        to: "/settings/settings"
      },
      {
        label: "Notifications",
        icon: "i-heroicons-bell-alert",
        to: "/settings/notifications"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UVerticalNavigation = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-6 gap-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UVerticalNavigation, {
        links,
        class: "col-span-2"
      }, null, _parent));
      _push(`<div class="col-span-4">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-C2KatrCc.mjs.map
