import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, isRef, withModifiers, resolveComponent, renderSlot, openBlock, createBlock, renderList } from 'vue';
import { q as defu } from '../runtime.mjs';
import { d as appConfig, e as useAppConfig, k as useRuntimeConfig, _ as _export_sfc, b as __nuxt_component_1$3, g as __nuxt_component_2$1, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { O, o as o$1, A, T, i as i$2, s as s2, N, u as u$1, d as o, f as T$1, a as i, P, e as N$1 } from './keyboard-DHi4gVZX.mjs';
import { f, u, t } from './hidden-LGrrAexB.mjs';
import { _ as __nuxt_component_1 } from './Card-j3nIaTpi.mjs';
import { b as useAppToast, _ as __nuxt_component_1$1, a as __nuxt_component_1$2 } from './useAppToast-D07YE5h4.mjs';
import { z } from 'zod';
import { u as useSupabaseClient } from './useSupabaseClient-BOXXNXEX.mjs';
import { c as categories } from './constants-BX1jF9zp.mjs';
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

let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: u.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a = 50;
    function r() {
      var u2;
      if (a-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((s2) => (s2[s2.Forwards = 0] = "Forwards", s2[s2.Backwards = 1] = "Backwards", s2))(te || {}), le = ((d2) => (d2[d2.Less = -1] = "Less", d2[d2.Equal = 0] = "Equal", d2[d2.Greater = 1] = "Greater", d2))(le || {});
let U = Symbol("TabsContext");
function C(a) {
  let b = inject(U, null);
  if (b === null) {
    let s2 = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, C), s2;
  }
  return b;
}
let G = Symbol("TabsSSRContext"), me = defineComponent({ name: "TabGroup", emits: { change: (a) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a, { slots: b, attrs: s2, emit: d$1 }) {
  var E;
  let i2 = ref((E = a.selectedIndex) != null ? E : a.defaultIndex), l = ref([]), r = ref([]), p = computed(() => a.selectedIndex !== null), R = computed(() => p.value ? a.selectedIndex : i2.value);
  function y(t2) {
    var c;
    let n = O(u2.tabs.value, o$1), o$12 = O(u2.panels.value, o$1), e = n.filter((I) => {
      var m;
      return !((m = o$1(I)) != null && m.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > n.length - 1) {
      let I = u$1(i2.value === null ? 0 : Math.sign(t2 - i2.value), { [-1]: () => 1, [0]: () => u$1(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), m = u$1(I, { [0]: () => n.indexOf(e[0]), [1]: () => n.indexOf(e[e.length - 1]) });
      m !== -1 && (i2.value = m), u2.tabs.value = n, u2.panels.value = o$12;
    } else {
      let I = n.slice(0, t2), h2 = [...n.slice(t2), ...I].find((W) => e.includes(W));
      if (!h2)
        return;
      let O2 = (c = n.indexOf(h2)) != null ? c : u2.selectedIndex.value;
      O2 === -1 && (O2 = u2.selectedIndex.value), i2.value = O2, u2.tabs.value = n, u2.panels.value = o$12;
    }
  }
  let u2 = { selectedIndex: computed(() => {
    var t2, n;
    return (n = (t2 = i2.value) != null ? t2 : a.defaultIndex) != null ? n : null;
  }), orientation: computed(() => a.vertical ? "vertical" : "horizontal"), activation: computed(() => a.manual ? "manual" : "auto"), tabs: l, panels: r, setSelectedIndex(t2) {
    R.value !== t2 && d$1("change", t2), p.value || y(t2);
  }, registerTab(t2) {
    var o$12;
    if (l.value.includes(t2))
      return;
    let n = l.value[i2.value];
    if (l.value.push(t2), l.value = O(l.value, o$1), !p.value) {
      let e = (o$12 = l.value.indexOf(n)) != null ? o$12 : i2.value;
      e !== -1 && (i2.value = e);
    }
  }, unregisterTab(t2) {
    let n = l.value.indexOf(t2);
    n !== -1 && l.value.splice(n, 1);
  }, registerPanel(t2) {
    r.value.includes(t2) || (r.value.push(t2), r.value = O(r.value, o$1));
  }, unregisterPanel(t2) {
    let n = r.value.indexOf(t2);
    n !== -1 && r.value.splice(n, 1);
  } };
  provide(U, u2);
  let T$12 = ref({ tabs: [], panels: [] }), x = ref(false);
  onMounted(() => {
    x.value = true;
  }), provide(G, computed(() => x.value ? null : T$12.value));
  let w = computed(() => a.selectedIndex);
  return onMounted(() => {
    watch([w], () => {
      var t2;
      return y((t2 = a.selectedIndex) != null ? t2 : a.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!p.value || R.value == null || u2.tabs.value.length <= 0)
      return;
    let t2 = O(u2.tabs.value, o$1);
    t2.some((o$12, e) => o$1(u2.tabs.value[e]) !== o$1(o$12)) && u2.setSelectedIndex(t2.findIndex((o$12) => o$1(o$12) === o$1(u2.tabs.value[R.value])));
  }), () => {
    let t2 = { selectedIndex: i2.value };
    return h(Fragment, [l.value.length <= 0 && h(d, { onFocus: () => {
      for (let n of l.value) {
        let o$12 = o$1(n);
        if ((o$12 == null ? void 0 : o$12.tabIndex) === 0)
          return o$12.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...s2, ...T(a, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: b, attrs: s2, name: "TabGroup" })]);
  };
} }), pe = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a, { attrs: b, slots: s2 }) {
  let d2 = C("TabList");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value }, l = { role: "tablist", "aria-orientation": d2.orientation.value };
    return A({ ourProps: l, theirProps: a, slot: i2, attrs: b, slots: s2, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a, { attrs: b, slots: s$1, expose: d2 }) {
  var o$2;
  let i$2$1 = (o$2 = a.id) != null ? o$2 : `headlessui-tabs-tab-${i$2()}`, l = C("Tab"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l.registerTab(r)), onUnmounted(() => l.unregisterTab(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let e = p.value.tabs.indexOf(i$2$1);
      return e === -1 ? p.value.tabs.push(i$2$1) - 1 : e;
    }
    return -1;
  }), y = computed(() => {
    let e = l.tabs.value.indexOf(r);
    return e === -1 ? R.value : e;
  }), u2 = computed(() => y.value === l.selectedIndex.value);
  function T2(e) {
    var I;
    let c = e();
    if (c === T$1.Success && l.activation.value === "auto") {
      let m = (I = i(r)) == null ? void 0 : I.activeElement, h2 = l.tabs.value.findIndex((O2) => o$1(O2) === m);
      h2 !== -1 && l.setSelectedIndex(h2);
    }
    return c;
  }
  function x(e) {
    let c = l.tabs.value.map((m) => o$1(m)).filter(Boolean);
    if (e.key === o.Space || e.key === o.Enter) {
      e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(y.value);
      return;
    }
    switch (e.key) {
      case o.Home:
      case o.PageUp:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.First));
      case o.End:
      case o.PageDown:
        return e.preventDefault(), e.stopPropagation(), T2(() => P(c, N$1.Last));
    }
    if (T2(() => u$1(l.orientation.value, { vertical() {
      return e.key === o.ArrowUp ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowDown ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e.key === o.ArrowLeft ? P(c, N$1.Previous | N$1.WrapAround) : e.key === o.ArrowRight ? P(c, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success)
      return e.preventDefault();
  }
  let w = ref(false);
  function E() {
    var e;
    w.value || (w.value = true, !a.disabled && ((e = o$1(r)) == null || e.focus({ preventScroll: true }), l.setSelectedIndex(y.value), t(() => {
      w.value = false;
    })));
  }
  function t$1(e) {
    e.preventDefault();
  }
  let n = s2(computed(() => ({ as: a.as, type: b.type })), r);
  return () => {
    var m, h2;
    let e = { selected: u2.value, disabled: (m = a.disabled) != null ? m : false }, { ...c } = a, I = { ref: r, onKeydown: x, onMousedown: t$1, onClick: E, id: i$2$1, role: "tab", type: n.value, "aria-controls": (h2 = o$1(l.panels.value[y.value])) == null ? void 0 : h2.id, "aria-selected": u2.value, tabIndex: u2.value ? 0 : -1, disabled: a.disabled ? true : void 0 };
    return A({ ourProps: I, theirProps: c, slot: e, attrs: b, slots: s$1, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a, { slots: b, attrs: s2 }) {
  let d2 = C("TabPanels");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value };
    return A({ theirProps: a, ourProps: {}, slot: i2, attrs: s2, slots: b, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a, { attrs: b, slots: s2, expose: d2 }) {
  var T2;
  let i$12 = (T2 = a.id) != null ? T2 : `headlessui-tabs-panel-${i$2()}`, l = C("TabPanel"), r = ref(null);
  d2({ el: r, $el: r }), onMounted(() => l.registerPanel(r)), onUnmounted(() => l.unregisterPanel(r));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let x = p.value.panels.indexOf(i$12);
      return x === -1 ? p.value.panels.push(i$12) - 1 : x;
    }
    return -1;
  }), y = computed(() => {
    let x = l.panels.value.indexOf(r);
    return x === -1 ? R.value : x;
  }), u2 = computed(() => y.value === l.selectedIndex.value);
  return () => {
    var n;
    let x = { selected: u2.value }, { tabIndex: w, ...E } = a, t2 = { ref: r, id: i$12, role: "tabpanel", "aria-labelledby": (n = o$1(l.tabs.value[y.value])) == null ? void 0 : n.id, tabIndex: u2.value ? w : -1 };
    return !u2.value && a.unmount && !a.static ? h(f, { as: "span", "aria-hidden": true, ...t2 }) : A({ ourProps: t2, theirProps: E, slot: x, attrs: b, slots: s2, features: N.Static | N.RenderStrategy, visible: u2.value, name: "TabPanel" });
  };
} });
const _sfc_main$3 = defineComponent({
  components: {
    HTabGroup: me,
    HTabList: pe,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  props: {
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.tabs
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.tabs));
    const itemRefs = ref([]);
    const markerRef = ref();
    function onChange(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      itemRefs,
      markerRef,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "default-index": _ctx.defaultIndex,
    as: "div",
    class: _ctx.ui.wrapper,
    onChange: _ctx.onChange
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`${ssrInterpolate(item.label)}`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HTabPanels, {
          class: _ctx.ui.container
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base
                }, {
                  default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => {
                        _push4(`${ssrInterpolate(item.content)}`);
                      }, _push4, _parent4, _scopeId3);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base
                  }, {
                    default: withCtx(({ selected }) => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HTabList, {
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ])
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          createVNode(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const success = ref(false);
    const email = ref("");
    const pending = ref(false);
    useSupabaseClient();
    useAppToast();
    const redirectUrl = useRuntimeConfig().public.baseUrl;
    console.log("**************redirectUrl*****************: ", redirectUrl);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_1$2;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UCard = __nuxt_component_1;
      if (!success.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg" }, _attrs))}><form>`);
        _push(ssrRenderComponent(_component_UFormGroup, {
          label: "Email Address",
          name: "email",
          class: "mb-2 text-sm",
          required: true,
          help: "You will receive an email with the confirmation link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                type: "email",
                required: "",
                modelValue: email.value,
                "onUpdate:modelValue": ($event) => email.value = $event,
                onBlur: validateField,
                placeholder: "Enter your email"
              }, {
                leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-envelope" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
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
        }, _parent));
        _push(`<p class="${ssrRenderClass([{ "text-red-600": errors.value }, "h-5 text-sm mb-2"])}">${ssrInterpolate(errors.value)}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          type: "submit",
          variant: "solid",
          color: "teal",
          size: "lg",
          class: [
            "rounded-xl shadow-md",
            {
              "transition-transform hover:scale-[1.02] active:scale-[0.98]": !pending.value && !errors.value
            }
          ],
          loading: pending.value,
          disabled: pending.value || !!errors.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign-in`);
            } else {
              return [
                createTextVNode("Sign-in")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form></div>`);
      } else {
        _push(ssrRenderComponent(_component_UCard, _attrs, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-bold text-xl"${_scopeId}>Email has been sent</span>`);
            } else {
              return [
                createVNode("span", { class: "font-bold text-xl" }, "Email has been sent")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}> We have sent an email to <strong${_scopeId}>${ssrInterpolate(email.value)}</strong> with a link to sign in </p><p class="font-bold"${_scopeId}>Important: the link will expire in 5 minutes.</p></div>`);
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
        }, _parent));
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignIn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    let showPassword = ref(false);
    const { toastSuccess, toastError } = useAppToast();
    const supabase = useSupabaseClient();
    const accountSchema = z.object({
      password: z.string().min(8, "Password must be at least 8 characters").max(50, "Password must be less than 50 characters").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
      email: z.string().email("Invalid email address").min(1, "Email is required"),
      fullName: z.string().min(1, "Full Name is required").max(100, "Full name must be less than 100 characters")
    });
    const accountForm = ref({
      email: "",
      password: "",
      fullName: ""
    });
    const errors = ref({});
    const pending = ref(false);
    const validateField = (field) => {
      try {
        const fieldSchema = accountSchema.shape[field];
        fieldSchema.parse(accountForm.value[field]);
        errors.value[field] = "";
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.value[field] = error.errors[0].message;
        }
      }
    };
    const validateForm = () => {
      try {
        accountSchema.parse(accountForm.value);
        errors.value = {};
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          error.errors.forEach((err) => {
            if (err.path[0]) {
              errors.value[err.path[0]] = err.message;
            }
          });
        }
        return false;
      }
    };
    const isFormValid = computed(() => {
      return accountSchema.safeParse(accountForm.value).success;
    });
    async function onSubmitAccount() {
      if (!validateForm()) {
        return;
      }
      pending.value = true;
      try {
        const { error } = await supabase.auth.signUp({
          email: accountForm.value.email,
          password: accountForm.value.password,
          options: {
            data: {
              first_name: accountForm.value.fullName,
              categories: [...categories]
            }
          }
        });
        navigateTo(`/`);
        toastSuccess({
          title: "user saved",
          description: "User added successfully"
        });
        accountForm.value = {
          email: "",
          password: "",
          fullName: ""
        };
        if (error) {
          toastError({
            title: "Error while adding your account",
            description: error.message
          });
        }
        errors.value = {};
      } catch (error) {
        console.error("An error occurred while adding user account: ", error);
      } finally {
        pending.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_1$1;
      const _component_UInput = __nuxt_component_1$2;
      const _component_UIcon = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: "bg-gray-50 dark:bg-gray-800",
        onSubmit: onSubmitAccount
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Full Name",
              name: "fullName",
              error: errors.value.fullName,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: accountForm.value.fullName,
                    "onUpdate:modelValue": ($event) => accountForm.value.fullName = $event,
                    onBlur: ($event) => validateField("fullName"),
                    required: "",
                    placeholder: "Enter your Full Name"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-user" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, { name: "i-heroicons-user" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: accountForm.value.fullName,
                      "onUpdate:modelValue": ($event) => accountForm.value.fullName = $event,
                      onBlur: ($event) => validateField("fullName"),
                      required: "",
                      placeholder: "Enter your Full Name"
                    }, {
                      leading: withCtx(() => [
                        createVNode(_component_UIcon, { name: "i-heroicons-user" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Email",
              name: "email",
              error: errors.value.email,
              required: "",
              class: "mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    placeholder: "Enter your email",
                    modelValue: accountForm.value.email,
                    "onUpdate:modelValue": ($event) => accountForm.value.email = $event,
                    onBlur: ($event) => validateField("email"),
                    required: ""
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
                      placeholder: "Enter your email",
                      modelValue: accountForm.value.email,
                      "onUpdate:modelValue": ($event) => accountForm.value.email = $event,
                      onBlur: ($event) => validateField("email"),
                      required: ""
                    }, {
                      leading: withCtx(() => [
                        createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Password",
              name: "password",
              error: errors.value.password,
              required: "",
              class: "mb-4 mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    type: unref(showPassword) ? "text" : "password",
                    modelValue: accountForm.value.password,
                    "onUpdate:modelValue": ($event) => accountForm.value.password = $event,
                    onBlur: ($event) => validateField("password"),
                    placeholder: "Enter your password"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, { name: "i-heroicons-lock-closed" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, { name: "i-heroicons-lock-closed" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<button type="button" class="absolute right-2 top-1/2 -translate-y-1/2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: unref(showPassword) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                    class: "h-5 w-5 text-gray-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UInput, {
                        type: unref(showPassword) ? "text" : "password",
                        modelValue: accountForm.value.password,
                        "onUpdate:modelValue": ($event) => accountForm.value.password = $event,
                        onBlur: ($event) => validateField("password"),
                        placeholder: "Enter your password"
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, { name: "i-heroicons-lock-closed" })
                        ]),
                        _: 1
                      }, 8, ["type", "modelValue", "onUpdate:modelValue", "onBlur"]),
                      createVNode("button", {
                        type: "button",
                        class: "absolute right-2 top-1/2 -translate-y-1/2",
                        onClick: ($event) => isRef(showPassword) ? showPassword.value = !unref(showPassword) : showPassword = !unref(showPassword)
                      }, [
                        createVNode(_component_UIcon, {
                          name: unref(showPassword) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                          class: "h-5 w-5 text-gray-500"
                        }, null, 8, ["name"])
                      ], 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              variant: "solid",
              color: "teal",
              loading: pending.value,
              disabled: pending.value || !isFormValid.value,
              size: "lg",
              class: [
                "rounded-xl shadow-md",
                {
                  "transition-transform hover:scale-[1.02] active:scale-[0.98]": !pending.value && !errors.value
                }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign-Up `);
                } else {
                  return [
                    createTextVNode(" Sign-Up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(onSubmitAccount, ["prevent"])
              }, [
                createVNode(_component_UFormGroup, {
                  label: "Full Name",
                  name: "fullName",
                  error: errors.value.fullName,
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: accountForm.value.fullName,
                      "onUpdate:modelValue": ($event) => accountForm.value.fullName = $event,
                      onBlur: ($event) => validateField("fullName"),
                      required: "",
                      placeholder: "Enter your Full Name"
                    }, {
                      leading: withCtx(() => [
                        createVNode(_component_UIcon, { name: "i-heroicons-user" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_UFormGroup, {
                  label: "Email",
                  name: "email",
                  error: errors.value.email,
                  required: "",
                  class: "mt-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      placeholder: "Enter your email",
                      modelValue: accountForm.value.email,
                      "onUpdate:modelValue": ($event) => accountForm.value.email = $event,
                      onBlur: ($event) => validateField("email"),
                      required: ""
                    }, {
                      leading: withCtx(() => [
                        createVNode(_component_UIcon, { name: "i-heroicons-envelope" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_UFormGroup, {
                  label: "Password",
                  name: "password",
                  error: errors.value.password,
                  required: "",
                  class: "mb-4 mt-2"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UInput, {
                        type: unref(showPassword) ? "text" : "password",
                        modelValue: accountForm.value.password,
                        "onUpdate:modelValue": ($event) => accountForm.value.password = $event,
                        onBlur: ($event) => validateField("password"),
                        placeholder: "Enter your password"
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, { name: "i-heroicons-lock-closed" })
                        ]),
                        _: 1
                      }, 8, ["type", "modelValue", "onUpdate:modelValue", "onBlur"]),
                      createVNode("button", {
                        type: "button",
                        class: "absolute right-2 top-1/2 -translate-y-1/2",
                        onClick: ($event) => isRef(showPassword) ? showPassword.value = !unref(showPassword) : showPassword = !unref(showPassword)
                      }, [
                        createVNode(_component_UIcon, {
                          name: unref(showPassword) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
                          class: "h-5 w-5 text-gray-500"
                        }, null, 8, ["name"])
                      ], 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["error"]),
                createVNode(_component_UButton, {
                  type: "submit",
                  variant: "solid",
                  color: "teal",
                  loading: pending.value,
                  disabled: pending.value || !isFormValid.value,
                  size: "lg",
                  class: [
                    "rounded-xl shadow-md",
                    {
                      "transition-transform hover:scale-[1.02] active:scale-[0.98]": !pending.value && !errors.value
                    }
                  ]
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sign-Up ")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "class"])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        slot: "signIn",
        label: "SignIn"
      },
      {
        slot: "signUp",
        label: "SignUp"
      }
    ];
    ref("signIn");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        items,
        variant: "link",
        class: "gap-4 w-full",
        ui: { trigger: "flex-1" }
      }, _attrs), {
        signIn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Sign-in to Finance Tracker </p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Sign-in to Finance Tracker ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Sign-in to Finance Tracker ")
                ]),
                default: withCtx(() => [
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              })
            ];
          }
        }),
        signUp: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Sign-Up for the Finance Tracker </p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Sign-Up for the Finance Tracker ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Sign-Up for the Finance Tracker ")
                ]),
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-C4-CugHO.mjs.map
