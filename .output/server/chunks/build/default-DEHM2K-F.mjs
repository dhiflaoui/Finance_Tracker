import { t as useHead, u as useSupabaseUser, s as useState, n as navigateTo, a as __nuxt_component_0$2, c as __nuxt_component_1, h as __nuxt_component_2$1, d as __nuxt_component_4 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Dropdown-CaclXtAE.mjs';
import { mergeProps, useSSRContext, ref, computed, withCtx, createTextVNode, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useAvatarUrl } from './useAvatarUrl-BlMNqUT-.mjs';
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

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$1 = {
  __name: "app-header",
  __ssrInlineRender: true,
  setup(__props) {
    const { avatarUrl: url } = useAvatarUrl();
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const notifications = ref([
      {
        id: 1,
        message: "You're approaching your monthly spending limit",
        time: "2h ago",
        read: false
      },
      {
        id: 2,
        message: "New feature: CSV import is now available!",
        time: "1d ago",
        read: true
      }
    ]);
    const unreadNotificationsCount = computed(
      () => notifications.value.filter((n) => !n.read).length
    );
    computed(
      () => unreadNotificationsCount.value > 0
    );
    computed(() => [
      ...notifications.value.map((notification) => ({
        label: notification.message,
        icon: notification.read ? "i-heroicons-check" : "i-heroicons-bell",
        click: () => markNotificationAsRead(notification.id)
      }))
    ]);
    function markNotificationAsRead(id) {
      const notification = notifications.value.find((n) => n.id === id);
      if (notification)
        notification.read = true;
    }
    const items = [
      [
        {
          slot: "account",
          disabled: true
        }
      ],
      [
        {
          label: "Settings",
          icon: "i-heroicons-cog-8-tooth",
          click: () => navigateTo("/settings/profile")
        },
        {
          label: "Sign out",
          icon: "i-heroicons-arrow-left-on-rectangle",
          click: async () => {
            await supabase.auth.signOut();
            return navigateTo("/login");
          }
        }
      ]
    ];
    const colorMode = useColorMode();
    const btnColor = computed(
      () => colorMode.preference === "light" ? "black" : "white"
    );
    const btnIcon = computed(
      () => colorMode.preference === "light" ? "i-heroicons-moon" : "i-heroicons-sun"
    );
    function toggleMode() {
      colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UDropdown = __nuxt_component_3;
      const _component_UAvatar = __nuxt_component_4;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center mt-10" }, _attrs))}><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-2xl font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Finance Tracker`);
          } else {
            return [
              createTextVNode("My Finance Tracker")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-banknotes",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: unref(btnIcon),
        color: unref(btnColor),
        size: "sm",
        square: "",
        onClick: toggleMode,
        class: "dark:text-white"
      }, null, _parent));
      if (unref(user)) {
        _push(ssrRenderComponent(_component_UDropdown, {
          items,
          ui: { item: { disabled: "cursor-text select-text" }, width: "w-64" }
        }, {
          account: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="text-left"${_scopeId}><p${_scopeId}>Signed in as</p><p class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate((_a = unref(user).user_metadata.full_name) != null ? _a : unref(user).email)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-left" }, [
                  createVNode("p", null, "Signed in as"),
                  createVNode("p", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString((_b = unref(user).user_metadata.full_name) != null ? _b : unref(user).email), 1)
                ])
              ];
            }
          }),
          item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                createVNode(_component_UIcon, {
                  name: item.icon,
                  class: "flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
                }, null, 8, ["name"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: (_a = unref(url)) != null ? _a : "https://avatars.githubusercontent.com/u/739984?v=4",
                alt: "Avatar"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UAvatar, {
                  src: (_b = unref(url)) != null ? _b : "https://avatars.githubusercontent.com/u/739984?v=4",
                  alt: "Avatar"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
          crossorigin: ""
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto max-w-4xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="my-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DEHM2K-F.mjs.map
