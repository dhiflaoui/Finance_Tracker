import { c as __nuxt_component_1$2, d as __nuxt_component_4, e as appConfig, f as useAppConfig, g as classNames, h as __nuxt_component_2$1, _ as _export_sfc, u as useSupabaseUser, i as useNuxtApp, j as asyncDataDefaults, k as createError } from './server.mjs';
import { defineComponent, computed, ref, watch, provide, h, cloneVNode, reactive, toRaw, onMounted, Fragment, watchEffect, inject, onUnmounted, nextTick, unref, getCurrentInstance, Teleport, normalizeClass, useSSRContext, withAsyncContext, mergeProps, isRef, shallowRef, toRefs, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, createTextVNode, resolveComponent, resolveDynamicComponent, renderSlot, renderList, Transition, toRef, onServerPrefetch } from 'vue';
import { useDebounceFn, computedAsync } from '@vueuse/core';
import { q as defu } from '../runtime.mjs';
import { A as A$1$1, o as o$2, u as u$3$1, c as c$1, f as f$3, w as w$2, t as t$4, i as i$2, E as E$2, T as T$1, a as i$5, s as s$1$1, b as i$3, N as N$3, l as l$2, d as i$1$1, e as u$1$1, S as S$1, g as w$2$1, h as h$1, p, j as s2, k as S, m as c$2, n as usePopper, O as O$1, q as o$1$1, r as n$1, v as w$1$1, P, x as N$1$1, y as T$1$1, z as t$1$1, _ as __nuxt_component_3 } from './Dropdown-CaclXtAE.mjs';
import { u as useFormEvents, a as useAppToast, _ as __nuxt_component_1$1$1, b as __nuxt_component_1$3 } from './useAppToast-ByP0wevk.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { Line, Doughnut } from 'vue-chartjs';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js';
import { _ as __nuxt_component_0$3 } from './Card-J1mmD4IC.mjs';
import { _ as __nuxt_component_0$4 } from './Form-Bw62B85A.mjs';
import { t as transactionViewOptions, u as useCategoryList, a as types } from './useCategoryList-C9xO7939.mjs';
import { z as z$2 } from 'zod';
import { u as useSupabaseClient } from './useSupabaseClient-S8I-hZ-A.mjs';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, sub } from 'date-fns';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'lodash-es';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

function d$4(u2, e2, r) {
  let i2 = ref(r == null ? void 0 : r.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function t$3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$1() {
  let a2 = [], s2 = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s2.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$3(() => {
      t2.current && e2[0]();
    }), s2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$1();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s2;
}
function i$1() {
  let o2 = o$1();
  return onUnmounted(() => o2.dispose()), o2;
}
function t$2() {
  let e2 = i$1();
  return (o2) => {
    e2.dispose(), e2.nextFrame(o2);
  };
}
var u$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$3 || {});
let f$2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r = d2["aria-hidden"]) != null ? r : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$1$1({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
var g$2 = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g$2 || {});
let t$1 = [];
function e$1(i2 = {}, s2 = null, t2 = []) {
  for (let [r, n2] of Object.entries(i2))
    o(t2, f$1(s2, r), n2);
  return t2;
}
function f$1(i2, s2) {
  return i2 ? i2 + "[" + s2 + "]" : s2;
}
function o(i2, s2, t2) {
  if (Array.isArray(t2))
    for (let [r, n2] of t2.entries())
      o(i2, f$1(s2, r.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s2, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s2, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s2, t2]) : typeof t2 == "number" ? i2.push([s2, `${t2}`]) : t2 == null ? i2.push([s2, ""]) : e$1(t2, s2, i2);
}
function De(a2, h2) {
  return a2 === h2;
}
var Ee = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Ee || {}), Ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ve || {}), ke = ((y2) => (y2[y2.Pointer = 0] = "Pointer", y2[y2.Focus = 1] = "Focus", y2[y2.Other = 2] = "Other", y2))(ke || {});
let ne = Symbol("ComboboxContext");
function K(a2) {
  let h2 = inject(ne, null);
  if (h2 === null) {
    let r = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, K), r;
  }
  return h2;
}
let ie = Symbol("VirtualContext"), Ae$1 = defineComponent({ name: "VirtualProvider", setup(a2, { slots: h$12 }) {
  let r = K("VirtualProvider"), y2 = computed(() => {
    let c2 = o$2(r.optionsRef);
    if (!c2)
      return { start: 0, end: 0 };
    let f2 = (void 0).getComputedStyle(c2);
    return { start: parseFloat(f2.paddingBlockStart || f2.paddingTop), end: parseFloat(f2.paddingBlockEnd || f2.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: y2.value.start, scrollPaddingEnd: y2.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$2(r.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var c2;
    return (c2 = r.virtual.value) == null ? void 0 : c2.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r.virtual.value ? o2 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (c2) => {
    if (c2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r.activationTrigger.value === 0)
        return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && o2.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((c2) => cloneVNode(h$12.default({ option: r.virtual.value.options[c2.index], open: r.comboboxState.value === 0 })[0], { key: `${e2.value}-${c2.index}`, "data-index": c2.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": c2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c2.start}px)`, overflowAnchor: "none" } })))];
} }), lt = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: h$12, attrs: r, emit: y2 }) {
  let o2 = ref(1), u2 = ref(null), e2 = ref(null), c2 = ref(null), f2 = ref(null), S2 = ref({ static: false, hold: false }), v = ref([]), d2 = ref(null), D = ref(2), E2 = ref(false);
  function w2(t2 = (n2) => n2) {
    let n2 = d2.value !== null ? v.value[d2.value] : null, s2 = t2(v.value.slice()), b = s2.length > 0 && s2[0].dataRef.order.value !== null ? s2.sort((C, A2) => C.dataRef.order.value - A2.dataRef.order.value) : O$1(s2, (C) => o$2(C.dataRef.domRef)), O$1$1 = n2 ? b.indexOf(n2) : null;
    return O$1$1 === -1 && (O$1$1 = null), { options: b, activeOptionIndex: O$1$1 };
  }
  let M2 = computed(() => a2.multiple ? 1 : 0), $2 = computed(() => a2.nullable), [B2, p2] = d$4(computed(() => a2.modelValue), (t2) => y2("update:modelValue", t2), computed(() => a2.defaultValue)), R2 = computed(() => B2.value === void 0 ? u$3$1(M2.value, { [1]: [], [0]: void 0 }) : B2.value), V = null, i2 = null;
  function I(t2) {
    return u$3$1(M2.value, { [0]() {
      return p2 == null ? void 0 : p2(t2);
    }, [1]: () => {
      let n2 = toRaw(l2.value.value).slice(), s2 = toRaw(t2), b = n2.findIndex((O2) => l2.compare(s2, toRaw(O2)));
      return b === -1 ? n2.push(s2) : n2.splice(b, 1), p2 == null ? void 0 : p2(n2);
    } });
  }
  let T2 = computed(() => {
  });
  watch([T2], ([t2], [n2]) => {
    if (l2.virtual.value && t2 && n2 && d2.value !== null) {
      let s2 = t2.indexOf(n2[d2.value]);
      s2 !== -1 ? d2.value = s2 : d2.value = null;
    }
  });
  let l2 = { comboboxState: o2, value: R2, mode: M2, compare(t2, n2) {
    if (typeof a2.by == "string") {
      let s2 = a2.by;
      return (t2 == null ? void 0 : t2[s2]) === (n2 == null ? void 0 : n2[s2]);
    }
    return a2.by === null ? De(t2, n2) : a2.by(t2, n2);
  }, calculateIndex(t2) {
    return l2.virtual.value ? a2.by === null ? l2.virtual.value.options.indexOf(t2) : l2.virtual.value.options.findIndex((n2) => l2.compare(n2, t2)) : v.value.findIndex((n2) => l2.compare(n2.dataRef.value, t2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: $2, immediate: computed(() => false), virtual: computed(() => null), inputRef: e2, labelRef: u2, buttonRef: c2, optionsRef: f2, disabled: computed(() => a2.disabled), options: v, change(t2) {
    p2(t2);
  }, activeOptionIndex: computed(() => {
    if (E2.value && d2.value === null && (l2.virtual.value ? l2.virtual.value.options.length > 0 : v.value.length > 0)) {
      if (l2.virtual.value) {
        let n2 = l2.virtual.value.options.findIndex((s2) => {
          var b;
          return !((b = l2.virtual.value) != null && b.disabled(s2));
        });
        if (n2 !== -1)
          return n2;
      }
      let t2 = v.value.findIndex((n2) => !n2.dataRef.disabled);
      if (t2 !== -1)
        return t2;
    }
    return d2.value;
  }), activationTrigger: D, optionsPropsRef: S2, closeCombobox() {
    E2.value = false, !a2.disabled && o2.value !== 1 && (o2.value = 1, d2.value = null);
  }, openCombobox() {
    if (E2.value = true, !a2.disabled && o2.value !== 0) {
      if (l2.value.value) {
        let t2 = l2.calculateIndex(l2.value.value);
        t2 !== -1 && (d2.value = t2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(t2) {
    D.value = t2;
  }, goToOption(t2, n2, s2) {
    E2.value = false, V !== null && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      if (a2.disabled || f2.value && !S2.value.static && o2.value === 1)
        return;
      if (l2.virtual.value) {
        d2.value = t2 === c$1.Specific ? n2 : f$3({ focus: t2 }, { resolveItems: () => l2.virtual.value.options, resolveActiveIndex: () => {
          var C, A2;
          return (A2 = (C = l2.activeOptionIndex.value) != null ? C : l2.virtual.value.options.findIndex((j) => {
            var q2;
            return !((q2 = l2.virtual.value) != null && q2.disabled(j));
          })) != null ? A2 : null;
        }, resolveDisabled: (C) => l2.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), D.value = s2 != null ? s2 : 2;
        return;
      }
      let b = w2();
      if (b.activeOptionIndex === null) {
        let C = b.options.findIndex((A2) => !A2.dataRef.disabled);
        C !== -1 && (b.activeOptionIndex = C);
      }
      let O2 = t2 === c$1.Specific ? n2 : f$3({ focus: t2 }, { resolveItems: () => b.options, resolveActiveIndex: () => b.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d2.value = O2, D.value = s2 != null ? s2 : 2, v.value = b.options;
    });
  }, selectOption(t2) {
    let n2 = v.value.find((b) => b.id === t2);
    if (!n2)
      return;
    let { dataRef: s2 } = n2;
    I(s2.value);
  }, selectActiveOption() {
    if (l2.activeOptionIndex.value !== null) {
      if (l2.virtual.value)
        I(l2.virtual.value.options[l2.activeOptionIndex.value]);
      else {
        let { dataRef: t2 } = v.value[l2.activeOptionIndex.value];
        I(t2.value);
      }
      l2.goToOption(c$1.Specific, l2.activeOptionIndex.value);
    }
  }, registerOption(t2, n2) {
    let s2 = reactive({ id: t2, dataRef: n2 });
    if (l2.virtual.value) {
      v.value.push(s2);
      return;
    }
    i2 && cancelAnimationFrame(i2);
    let b = w2((O2) => (O2.push(s2), O2));
    d2.value === null && l2.isSelected(n2.value.value) && (b.activeOptionIndex = b.options.indexOf(s2)), v.value = b.options, d2.value = b.activeOptionIndex, D.value = 2, b.options.some((O2) => !o$2(O2.dataRef.domRef)) && (i2 = requestAnimationFrame(() => {
      let O2 = w2();
      v.value = O2.options, d2.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(t2, n2) {
    if (V !== null && cancelAnimationFrame(V), n2 && (E2.value = true), l2.virtual.value) {
      v.value = v.value.filter((b) => b.id !== t2);
      return;
    }
    let s2 = w2((b) => {
      let O2 = b.findIndex((C) => C.id === t2);
      return O2 !== -1 && b.splice(O2, 1), b;
    });
    v.value = s2.options, d2.value = s2.activeOptionIndex, D.value = 2;
  }, isSelected(t2) {
    return u$3$1(M2.value, { [0]: () => l2.compare(toRaw(l2.value.value), toRaw(t2)), [1]: () => toRaw(l2.value.value).some((n2) => l2.compare(toRaw(n2), toRaw(t2))) });
  }, isActive(t2) {
    return d2.value === l2.calculateIndex(t2);
  } };
  w$2([e2, c2, f2], () => l2.closeCombobox(), computed(() => o2.value === 0)), provide(ne, l2), t$4(computed(() => u$3$1(o2.value, { [0]: i$2.Open, [1]: i$2.Closed })));
  let g2 = computed(() => {
    var t2;
    return (t2 = o$2(e2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([g2], () => {
      if (!g2.value || a2.defaultValue === void 0)
        return;
      function t2() {
        l2.change(a2.defaultValue);
      }
      return g2.value.addEventListener("reset", t2), () => {
        var n2;
        (n2 = g2.value) == null || n2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    var C, A2, j;
    let { name: t2, disabled: n2, form: s2, ...b } = a2, O2 = { open: o2.value === 0, disabled: n2, activeIndex: l2.activeOptionIndex.value, activeOption: l2.activeOptionIndex.value === null ? null : l2.virtual.value ? l2.virtual.value.options[(C = l2.activeOptionIndex.value) != null ? C : 0] : (j = (A2 = l2.options.value[l2.activeOptionIndex.value]) == null ? void 0 : A2.dataRef.value) != null ? j : null, value: R2.value };
    return h(Fragment, [...t2 != null && R2.value != null ? e$1({ [t2]: R2.value }).map(([q2, ue2]) => h(f$2, E$2({ features: u$3.Hidden, key: q2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, disabled: n2, name: q2, value: ue2 }))) : [], A$1$1({ theirProps: { ...r, ...T$1(b, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: h$12, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r }) {
  var e2;
  let y2 = (e2 = a2.id) != null ? e2 : `headlessui-combobox-label-${i$5()}`, o2 = K("ComboboxLabel");
  function u2() {
    var c2;
    (c2 = o$2(o2.inputRef)) == null || c2.focus({ preventScroll: true });
  }
  return () => {
    let c2 = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...f2 } = a2, S2 = { id: y2, ref: o2.labelRef, onClick: u2 };
    return A$1$1({ ourProps: S2, theirProps: f2, slot: c2, attrs: h2, slots: r, name: "ComboboxLabel" });
  };
} });
let nt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r, expose: y2 }) {
  var S2;
  let o2 = (S2 = a2.id) != null ? S2 : `headlessui-combobox-button-${i$5()}`, u2 = K("ComboboxButton");
  y2({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(v) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (v.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$2(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function c2(v) {
    switch (v.key) {
      case o$1$1.ArrowDown:
        v.preventDefault(), v.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$1$1.ArrowUp:
        v.preventDefault(), v.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c$1.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$1$1.Escape:
        if (u2.comboboxState.value !== 0)
          return;
        v.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && v.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let f2 = s$1$1(computed(() => ({ as: a2.as, type: h2.type })), u2.buttonRef);
  return () => {
    var E2, w2;
    let v = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a2, D = { ref: u2.buttonRef, id: o2, type: f2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (E2 = o$2(u2.optionsRef)) == null ? void 0 : E2.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(w2 = o$2(u2.labelRef)) == null ? void 0 : w2.id, o2].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: c2, onClick: e2 };
    return A$1$1({ ourProps: D, theirProps: d2, slot: v, attrs: h2, slots: r, name: "ComboboxButton" });
  };
} }), it = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a2) => true }, setup(a2, { emit: h2, attrs: r, slots: y2, expose: o2 }) {
  var V;
  let u2 = (V = a2.id) != null ? V : `headlessui-combobox-input-${i$5()}`, e2 = K("ComboboxInput"), c2 = computed(() => i$3(o$2(e2.inputRef))), f2 = { value: false };
  o2({ el: e2.inputRef, $el: e2.inputRef });
  function S2() {
    e2.change(null);
    let i2 = o$2(e2.optionsRef);
    i2 && (i2.scrollTop = 0), e2.goToOption(c$1.Nothing);
  }
  let v = computed(() => {
    var I;
    let i2 = e2.value.value;
    return o$2(e2.inputRef) ? typeof a2.displayValue != "undefined" && i2 !== void 0 ? (I = a2.displayValue(i2)) != null ? I : "" : typeof i2 == "string" ? i2 : "" : "";
  });
  onMounted(() => {
    watch([v, e2.comboboxState, c2], ([i2, I], [T2, l2]) => {
      if (f2.value)
        return;
      let g2 = o$2(e2.inputRef);
      g2 && ((l2 === 0 && I === 1 || i2 !== T2) && (g2.value = i2), requestAnimationFrame(() => {
        var s2;
        if (f2.value || !g2 || ((s2 = c2.value) == null ? void 0 : s2.activeElement) !== g2)
          return;
        let { selectionStart: t2, selectionEnd: n2 } = g2;
        Math.abs((n2 != null ? n2 : 0) - (t2 != null ? t2 : 0)) === 0 && t2 === 0 && g2.setSelectionRange(g2.value.length, g2.value.length);
      }));
    }, { immediate: true }), watch([e2.comboboxState], ([i2], [I]) => {
      if (i2 === 0 && I === 1) {
        if (f2.value)
          return;
        let T2 = o$2(e2.inputRef);
        if (!T2)
          return;
        let l2 = T2.value, { selectionStart: g2, selectionEnd: t2, selectionDirection: n2 } = T2;
        T2.value = "", T2.value = l2, n2 !== null ? T2.setSelectionRange(g2, t2, n2) : T2.setSelectionRange(g2, t2);
      }
    });
  });
  let d2 = ref(false);
  function D() {
    d2.value = true;
  }
  function E2() {
    o$1().nextFrame(() => {
      d2.value = false;
    });
  }
  let w2 = t$2();
  function M2(i2) {
    switch (f2.value = true, w2(() => {
      f2.value = false;
    }), i2.key) {
      case o$1$1.Enter:
        if (f2.value = false, e2.comboboxState.value !== 0 || d2.value)
          return;
        if (i2.preventDefault(), i2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$1$1.ArrowDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$3$1(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Next), [1]: () => e2.openCombobox() });
      case o$1$1.ArrowUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), u$3$1(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c$1.Last);
          });
        } });
      case o$1$1.Home:
        if (i2.shiftKey)
          break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$1$1.PageUp:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$1$1.End:
        if (i2.shiftKey)
          break;
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1$1.PageDown:
        return f2.value = false, i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1$1.Escape:
        if (f2.value = false, e2.comboboxState.value !== 0)
          return;
        i2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && i2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && S2(), e2.closeCombobox();
        break;
      case o$1$1.Tab:
        if (f2.value = false, e2.comboboxState.value !== 0)
          return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function $2(i2) {
    h2("change", i2), e2.nullable.value && e2.mode.value === 0 && i2.target.value === "" && S2(), e2.openCombobox();
  }
  function B2(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    if (f2.value = false, !((l2 = o$2(e2.optionsRef)) != null && l2.contains(I)) && !((g2 = o$2(e2.buttonRef)) != null && g2.contains(I)) && e2.comboboxState.value === 0)
      return i2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? S2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function p2(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    (l2 = o$2(e2.buttonRef)) != null && l2.contains(I) || (g2 = o$2(e2.optionsRef)) != null && g2.contains(I) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o$1().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let R2 = computed(() => {
    var i2, I, T2, l2;
    return (l2 = (T2 = (I = a2.defaultValue) != null ? I : e2.defaultValue.value !== void 0 ? (i2 = a2.displayValue) == null ? void 0 : i2.call(a2, e2.defaultValue.value) : null) != null ? T2 : e2.defaultValue.value) != null ? l2 : "";
  });
  return () => {
    var t2, n2, s2, b, O2, C, A2;
    let i2 = { open: e2.comboboxState.value === 0 }, { displayValue: I, onChange: T2, ...l2 } = a2, g2 = { "aria-controls": (t2 = e2.optionsRef.value) == null ? void 0 : t2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (n2 = e2.options.value.find((j) => !e2.virtual.value.disabled(j.dataRef.value) && e2.compare(j.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : n2.id : (s2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : s2.id, "aria-labelledby": (C = (b = o$2(e2.labelRef)) == null ? void 0 : b.id) != null ? C : (O2 = o$2(e2.buttonRef)) == null ? void 0 : O2.id, "aria-autocomplete": "list", id: u2, onCompositionstart: D, onCompositionend: E2, onKeydown: M2, onInput: $2, onFocus: p2, onBlur: B2, role: "combobox", type: (A2 = r.type) != null ? A2 : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: R2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$1$1({ ourProps: g2, theirProps: l2, slot: i2, attrs: r, slots: y2, features: N$3.RenderStrategy | N$3.Static, name: "ComboboxInput" });
  };
} }), ut = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: h$12, slots: r, expose: y2 }) {
  let o2 = K("ComboboxOptions"), u2 = `headlessui-combobox-options-${i$5()}`;
  y2({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a2.hold;
  });
  let e2 = l$2(), c2 = computed(() => e2 !== null ? (e2.value & i$2.Open) === i$2.Open : o2.comboboxState.value === 0);
  i$1$1({ container: computed(() => o$2(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(S2) {
    return S2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : S2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S2) {
    S2.setAttribute("role", "none");
  } });
  function f2(S2) {
    S2.preventDefault();
  }
  return () => {
    var D, E2, w2;
    let S2 = { open: o2.comboboxState.value === 0 }, v = { "aria-labelledby": (w2 = (D = o$2(o2.labelRef)) == null ? void 0 : D.id) != null ? w2 : (E2 = o$2(o2.buttonRef)) == null ? void 0 : E2.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : void 0, onMousedown: f2 }, d2 = T$1(a2, ["hold"]);
    return A$1$1({ ourProps: v, theirProps: d2, slot: S2, attrs: h$12, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r, default: () => [h(Ae$1, {}, r.default)] } : r, features: N$3.RenderStrategy | N$3.Static, visible: c2.value, name: "ComboboxOptions" });
  };
} }), rt = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: h2, attrs: r, expose: y2 }) {
  let o2 = K("ComboboxOption"), u2 = `headlessui-combobox-option-${i$5()}`, e2 = ref(null), c2 = computed(() => a2.disabled);
  y2({ el: e2, $el: e2 });
  let f2 = computed(() => {
    var p2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a2.value) : o2.activeOptionIndex.value === null ? false : ((p2 = o2.options.value[o2.activeOptionIndex.value]) == null ? void 0 : p2.id) === u2;
  }), S2 = computed(() => o2.isSelected(a2.value)), v = inject(ie, null), d2 = computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: e2, order: computed(() => a2.order) }));
  onMounted(() => o2.registerOption(u2, d2)), onUnmounted(() => o2.unregisterOption(u2, f2.value)), watchEffect(() => {
    let p2 = o$2(e2);
    p2 && (v == null || v.value.measureElement(p2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && f2.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, R2;
      return (R2 = (p2 = o$2(e2)) == null ? void 0 : p2.scrollIntoView) == null ? void 0 : R2.call(p2, { block: "nearest" });
    }));
  });
  function D(p2) {
    p2.preventDefault(), p2.button === g$2.Left && (c2.value || (o2.selectOption(u2), n$1() || requestAnimationFrame(() => {
      var R2;
      return (R2 = o$2(o2.inputRef)) == null ? void 0 : R2.focus({ preventScroll: true });
    }), o2.mode.value === 0 && o2.closeCombobox()));
  }
  function E2() {
    var R2;
    if (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value))
      return o2.goToOption(c$1.Nothing);
    let p2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, p2);
  }
  let w2 = u$1$1();
  function M2(p2) {
    w2.update(p2);
  }
  function $2(p2) {
    var V;
    if (!w2.wasMoved(p2) || a2.disabled || (V = o2.virtual.value) != null && V.disabled(a2.value) || f2.value)
      return;
    let R2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, R2, 0);
  }
  function B2(p2) {
    var R2;
    w2.wasMoved(p2) && (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value) || f2.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c$1.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a2, R2 = { active: f2.value, selected: S2.value, disabled: p2 }, V = { id: u2, ref: e2, role: "option", tabIndex: p2 === true ? void 0 : -1, "aria-disabled": p2 === true ? true : void 0, "aria-selected": S2.value, disabled: void 0, onMousedown: D, onFocus: E2, onPointerenter: M2, onMouseenter: M2, onPointermove: $2, onMousemove: $2, onPointerleave: B2, onMouseleave: B2 }, i2 = T$1(a2, ["order", "value"]);
    return A$1$1({ ourProps: V, theirProps: i2, slot: R2, attrs: r, slots: h2, name: "ComboboxOption" });
  };
} });
function E$1(n2, e2, o2, r) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$3 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$1$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$2(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$2({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$2(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$3$1(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$1$1.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$1$1.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$2(o2) instanceof HTMLElement && T2.add(o$2(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s2.value ? P(o$2(o2), u$3$1(f2.value, { [d$3.Forwards]: () => N$1$1.Next, [d$3.Backwards]: () => N$1$1.Previous }) | N$1$1.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable }), A$1$1({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h(f$2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$3(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $$2({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e2, m2) => {
      if (e2.every((a2, s2) => (m2 == null ? void 0 : m2[s2]) === a2) || !l2.value)
        return;
      let f2 = o$2(n2);
      f2 && t$3(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$2(r), s2 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s2) {
            o2.value = s2;
            return;
          }
        } else if (f2.contains(s2)) {
          o2.value = s2;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$1$1.First | N$1$1.NoScroll) === T$1$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value)
      return;
    let m2 = B(r);
    o$2(n2) instanceof HTMLElement && m2.add(o$2(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w$1() {
  return t$1$1() ? { before({ doc: r, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o$1();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r.querySelector(f2);
            i2 && !a2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && a2(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT")
            return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$1(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$2(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$2(t2)) || e2.contains((a2 = (f2 = o$2(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h(f$2, { features: u$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$1$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e2 = ref([]);
  function r(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r, slot: t2, name: o2, props: s2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s2 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$5()}`, r = w();
  return onMounted(() => onUnmounted(r.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$1$1({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s2, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2)
    return l2;
  let r = t2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $$1 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r = ref(null), i2 = computed(() => i$3(r)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v = inject(d$1, null), g2 = false, b = getCurrentInstance();
  return watch(r, () => {
    if (g2 || !v)
      return;
    let a2 = o$2(r);
    a2 && (onUnmounted(v.register(a2), b), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h(Teleport, { to: n2.value }, A$1$1({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r(o2);
  }
  function r(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r), () => {
    let { target: i2, ...o2 } = e2;
    return A$1$1({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$5()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$2.Open) === i$2.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K2, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h$12.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$2.Closing) === i$2.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$2(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$2(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog")
      return u$3$1(e2, { [s.Add]: () => D.value += 1, [s.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h$12 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h$12);
  let ne2 = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h$12.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne2);
  let ie2 = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie2.value && (e2.defaultPrevented || e2.key === o$1$1.Escape && (e2.preventDefault(), e2.stopPropagation(), h$12.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$2(m2);
    if (!a2)
      return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h$12.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h(u$2, { force: true }, () => [h($$1, () => h(z, { target: m2.value }, () => h(u$2, { force: false }, () => h(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$3$1(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(X, {}, () => A$1$1({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$5()}`, s2 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s2.close());
  }
  return () => {
    let { ...r } = t2;
    return A$1$1({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r;
  let s2 = (r = t2.id) != null ? r : `headlessui-dialog-backdrop-${i$5()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s2, ref: u2, "aria-hidden": true };
    return h(u$2, { force: true }, () => h($$1, () => A$1$1({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r;
  let s2 = (r = t2.id) != null ? r : `headlessui-dialog-panel-${i$5()}`, n2 = T("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s2, ref: n2.panelRef, onClick: u2 };
    return A$1$1({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$5()}`, s2 = T("DialogTitle");
  return onMounted(() => {
    s2.setTitleId(p2), onUnmounted(() => s2.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$1$1({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function pe$1(o2, b) {
  return o2 === b;
}
var ce$1 = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ce$1 || {}), ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(ve || {}), be = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(be || {});
function me$1(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, A), r;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe$1 }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b, attrs: r, emit: w2 }) {
  let n2 = ref(1), e2 = ref(null), f2 = ref(null), v = ref(null), s2 = ref([]), m2 = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s2.value[p2.value] : null, l2 = O$1(t2(s2.value.slice()), (O2) => o$2(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y2, L2] = d$4(computed(() => o2.modelValue), (t2) => w2("update:modelValue", t2), computed(() => o2.defaultValue)), M2 = computed(() => y2.value === void 0 ? u$3$1(D.value, { [1]: [], [0]: void 0 }) : y2.value), k2 = { listboxState: n2, value: M2, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e2, buttonRef: f2, optionsRef: v, disabled: computed(() => o2.disabled), options: s2, searchQuery: m2, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1)
      return;
    let d2 = u2(), O2 = f$3(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m2.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s2.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1)
      return;
    let l2 = m2.value !== "" ? 0 : 1;
    m2.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s2.value.slice(p2.value + l2).concat(s2.value.slice(0, p2.value + l2)) : s2.value).find((I) => I.dataRef.textValue.startsWith(m2.value) && !I.dataRef.disabled), h2 = O2 ? s2.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m2.value !== "" && (m2.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s2.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s2.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L2(t2);
  }, select(t2) {
    o2.disabled || L2(u$3$1(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k2.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k2.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w$2([f2, v], (t2, i2) => {
    var l2;
    k2.closeListbox(), w$2$1(i2, h$1.Loose) || (t2.preventDefault(), (l2 = o$2(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k2), t$4(computed(() => u$3$1(n2.value, { [0]: i$2.Open, [1]: i$2.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$2(f2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0)
        return;
      function t2() {
        k2.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h$12 = { open: n2.value === 0, disabled: l2, value: M2.value };
    return h(Fragment, [...t2 != null && M2.value != null ? e$1({ [t2]: M2.value }).map(([I, Q2]) => h(f$2, E$2({ features: u$3.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I, value: Q2 }))) : [], A$1$1({ ourProps: {}, theirProps: { ...r, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h$12, slots: b, attrs: r, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${i$5()}`, n2 = A("ListboxLabel");
  function e2() {
    var v;
    (v = o$2(n2.buttonRef)) == null || v.focus({ preventScroll: true });
  }
  return () => {
    let v = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s2 } = o2, m2 = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$1$1({ ourProps: m2, theirProps: s2, slot: v, attrs: b, slots: r, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${i$5()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$1$1.Space:
      case o$1$1.Enter:
      case o$1$1.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$1$1.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$2(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v(a2) {
    switch (a2.key) {
      case o$1$1.Space:
        a2.preventDefault();
        break;
    }
  }
  function s2(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me$1(() => {
      var u2;
      return (u2 = o$2(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m2 = s$1$1(computed(() => ({ as: o2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$2(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L2 = o$2(e2.labelRef)) == null ? void 0 : L2.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v, onClick: s2 };
    return A$1$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${i$5()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$1$1.Space:
        if (e2.searchQuery.value !== "")
          return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$1$1.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$3$1(e2.orientation.value, { vertical: o$1$1.ArrowDown, horizontal: o$1$1.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Next);
      case u$3$1(e2.orientation.value, { vertical: o$1$1.ArrowUp, horizontal: o$1$1.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$1$1.Home:
      case o$1$1.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.First);
      case o$1$1.End:
      case o$1$1.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$1$1.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$2(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$1$1.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l$2(), m2 = computed(() => s2 !== null ? (s2.value & i$2.Open) === i$2.Open : e2.listboxState.value === 0);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L2 = o$2(e2.buttonRef)) == null ? void 0 : L2.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$1$1({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, features: N$3.RenderStrategy | N$3.Static, visible: m2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b, attrs: r, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${i$5()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s2 = computed(() => u$3$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m2 = computed(() => u$3$1(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
  }, [0]: () => s2.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n2, a2)), onUnmounted(() => e2.unregisterOption(n2)), onMounted(() => {
    watch([e2.listboxState, s2], () => {
      e2.listboxState.value === 0 && s2.value && u$3$1(e2.mode.value, { [1]: () => {
        m2.value && e2.goToOption(c$1.Specific, n2);
      }, [0]: () => {
        e2.goToOption(c$1.Specific, n2);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$2(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled)
      return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$2(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled)
      return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n2);
  }
  let y2 = u$1$1();
  function L2(t2) {
    y2.update(t2);
  }
  function M2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v.value || e2.goToOption(c$1.Specific, n2, 0));
  }
  function k2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L2, onMouseenter: L2, onPointermove: M2, onMousemove: M2, onPointerleave: k2, onMouseleave: k2 };
    return A$1$1({ ourProps: h2, theirProps: O2, slot: i2, attrs: r, slots: b, name: "ListboxOption" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$1();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s2] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s2) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s2 = o$1(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s2.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s2.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s2.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s2.add(() => o2("cancelled")), s2.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s2(n2, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$3$1(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2$1, expose: h$12 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~i$2.Closing, t2("afterLeave");
  }
  if (!me() && s2())
    return () => h(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2$1);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h$12({ el: d2, $el: d2 });
  let { show: v, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v.value ? "visible" : "hidden"), I = { value: true }, c2 = i$5(), b = { value: false }, P2 = Q(() => {
    !b.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$3$1(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$2(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I.value && !A2.value, p2 = o$2(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b.value = true, v.value && r(), v.value || f2(), o2(v.value ? L$1(p2, j, M2, X, _, (V) => {
      b.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _, (V) => {
      b.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v], (o2, E2, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$4(computed(() => u$3$1(i2.value, { ["visible"]: i$2.Open, ["hidden"]: i$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye, leave: be2, leaveFrom: Ee2, leaveTo: Ve2, ...U2 } = e2, ne2 = { ref: d2 }, re = { ...U2, ...A2.value && v.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j, ...M2]) } : {} };
    return A$1$1({ theirProps: re, ourProps: ne2, slot: {}, slots: s2$1, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2 }) {
  let h$12 = l$2(), n2 = computed(() => e2.show === null && h$12 !== null ? (h$12.value & i$2.Open) === i$2.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$1$1({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const _sfc_main$d = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_1$2,
    UAvatar: __nuxt_component_4
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.input.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => appConfig.ui.select.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => appConfig.ui.selectMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.select.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.select.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.select.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.select.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.select.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.select.variant),
          ...Object.values(appConfig.ui.select.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.select
    },
    uiMenu: {
      type: Object,
      default: () => appConfig.ui.selectMenu
    }
  },
  emits: ["update:modelValue", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.select));
    const uiMenu = computed(() => defu({}, props.uiMenu, appConfig2.ui.selectMenu));
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { emitFormBlur } = useFormEvents();
    const query = ref("");
    const searchInput = ref();
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.base,
        ui.value.rounded,
        "text-left cursor-default",
        ui.value.size[props.size],
        ui.value.gap[props.size],
        props.padded ? ui.value.padding[props.size] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        (isLeading.value || slots.leading) && ui.value.leading.padding[props.size],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[props.size],
        "inline-flex items-center"
      );
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[props.size]
      );
    });
    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(props.color) && ui.value.icon.color.replaceAll("{color}", props.color),
        ui.value.icon.size[props.size],
        props.loading && "animate-spin"
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[props.size]
      );
    });
    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(props.color) && ui.value.icon.color.replaceAll("{color}", props.color),
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && "animate-spin"
      );
    });
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          return typeof option === "string" ? option.search(new RegExp(query.value, "i")) !== -1 : option[searchAttribute] && option[searchAttribute].search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const queryOption = computed(() => {
      return query.value === "" ? null : { [props.optionAttribute]: query.value };
    });
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      var _a;
      if (query.value && ((_a = searchInput.value) == null ? void 0 : _a.$el)) {
        query.value = "";
        searchInput.value.$el.value = "";
      }
      emit("update:modelValue", event);
      emit("change", event);
      emitFormBlur();
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      trigger,
      container,
      isLeading,
      isTrailing,
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      queryOption,
      query,
      onUpdate
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$2;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_4;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled || _ctx.loading,
    as: "div",
    class: _ctx.uiMenu.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="absolute inset-0 w-px opacity-0 cursor-default" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: "inline-flex w-full"
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.$attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length) {
                    _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate(_ctx.modelValue.length)} selected</span>`);
                  } else if (!_ctx.multiple && _ctx.modelValue) {
                    _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute])}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass([_ctx.uiMenu.placeholder, "block truncate"])}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled || _ctx.loading,
                    type: "button"
                  }, _ctx.$attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "block truncate"
                      }, toDisplayString(_ctx.modelValue.length) + " selected", 1)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "block truncate"
                      }, toDisplayString(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 1)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: ["block truncate", _ctx.uiMenu.placeholder]
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template>`);
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.divide, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index2) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index2,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(typeof option === "string" ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.queryOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="block truncate"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.queryOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.queryOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index2) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index2,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.queryOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: "absolute inset-0 w-px opacity-0 cursor-default",
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 8, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: "inline-flex w-full"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.$attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block truncate"
                    }, toDisplayString(_ctx.modelValue.length) + " selected", 1)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "block truncate"
                    }, toDisplayString(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 1)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: ["block truncate", _ctx.uiMenu.placeholder]
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["disabled"])
              ])
            ]),
            _: 2
          }, 1536)),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                  static: "",
                  class: [_ctx.uiMenu.base, _ctx.uiMenu.divide, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                }, {
                  default: withCtx(() => [
                    _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                      key: 0,
                      ref: "searchInput",
                      "display-value": () => _ctx.query,
                      name: "q",
                      placeholder: _ctx.searchablePlaceholder,
                      autofocus: "",
                      autocomplete: "off",
                      class: _ctx.uiMenu.input,
                      onChange: ($event) => _ctx.query = $event.target.value
                    }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index2) => {
                      return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: index2,
                        as: "template",
                        value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                        disabled: option.disabled
                      }, {
                        default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]);
                    }), 128)),
                    _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: 1,
                      value: _ctx.queryOption,
                      as: "template"
                    }, {
                      default: withCtx(({ active, selected }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option-create", {
                              option: _ctx.queryOption,
                              active,
                              selected
                            }, () => [
                              createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                            ])
                          ], 2)
                        ], 2)
                      ]),
                      _: 3
                    }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: _ctx.uiMenu.option.empty
                    }, [
                      renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                        createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  _: 3
                }, 8, ["class"]))
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$c = defineComponent({
  props: {
    ui: {
      type: Object,
      default: () => appConfig.ui.skeleton
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.skeleton));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.rounded]
  }, _attrs))}></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/layout/Skeleton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3]]);
const useCurrency = (amount) => {
  const user = useSupabaseUser();
  const currency = computed(() => {
    var _a;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: (_a = user.value.user_metadata.currency) != null ? _a : "EUR"
    }).format(isRef(amount) ? amount.value : amount);
  });
  return {
    currency
  };
};
const _sfc_main$b = {
  __name: "trend",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Trend"
    },
    amount: {
      type: Number,
      default: 0
    },
    lastAmount: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "text-green-500"
    },
    loading: {
      type: Boolean,
      default: false
    },
    showTrend: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const ICON_MAPPING = {
      "Total Income": { name: "i-heroicons-arrow-up", color: "text-green-500" },
      Expenses: { name: "i-heroicons-arrow-down", color: "text-red-500" },
      Investments: { name: "i-heroicons-chart-pie", color: "text-purple-500" },
      Savings: { name: "i-heroicons-banknotes", color: "text-blue-500" }
    };
    const DEFAULT_ICON = {
      name: "i-heroicons-question-mark-circle",
      color: "text-gray-500"
    };
    const props = __props;
    const { amount } = toRefs(props);
    const { currency } = useCurrency(amount);
    const getIconName = computed(
      () => {
        var _a;
        return ((_a = ICON_MAPPING[props.title]) == null ? void 0 : _a.name) || DEFAULT_ICON.name;
      }
    );
    const getIconColor = computed(
      () => {
        var _a;
        return ((_a = ICON_MAPPING[props.title]) == null ? void 0 : _a.color) || DEFAULT_ICON.color;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$2;
      const _component_USkeleton = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a0a17d28><div class="${ssrRenderClass([[__props.color], "font-bold"])}" data-v-a0a17d28>${ssrInterpolate(__props.title)} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(getIconName),
        class: unref(getIconColor)
      }, null, _parent));
      _push(`</div><div class="text-2xl font-extrabold text-black dark:text-white mb-2" data-v-a0a17d28>`);
      if (__props.loading) {
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-8 w-full" }, null, _parent));
      } else {
        _push(`<div data-v-a0a17d28>${ssrInterpolate(unref(currency))}</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/trend.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-a0a17d28"]]);
const _sfc_main$a = {
  __name: "LineChart",
  __ssrInlineRender: true,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Line), {
        data: __props.chartData,
        options: __props.options,
        style: { "width": "80%", "height": "80%" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LineChart.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "DoughnutChart",
  __ssrInlineRender: true,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Doughnut), {
        data: __props.chartData,
        options: __props.options,
        style: { "width": "80%", "height": "80%" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DoughnutChart.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "transactionsCharts",
  __ssrInlineRender: true,
  props: {
    TransactionPerDate: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const transactionChartData = computed(() => {
      const dates = Object.keys(__props.TransactionPerDate);
      const incomeData = [];
      const expenseData = [];
      const listTransactionsData = Object.values(__props.TransactionPerDate);
      listTransactionsData.forEach((transactionData) => {
        const dayIncome = transactionData.reduce((sum, t2) => {
          return t2.type === "Income" ? sum + t2.amount : sum;
        }, 0);
        const dayExpense = transactionData.reduce((sum, t2) => {
          return t2.type === "Expense" ? sum + t2.amount : sum;
        }, 0);
        incomeData.push(dayIncome);
        expenseData.push(dayExpense);
      });
      return {
        labels: dates,
        datasets: [
          {
            label: "Income",
            data: incomeData,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            fill: true
          },
          {
            label: "Expenses",
            data: expenseData,
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            fill: true
          }
        ]
      };
    });
    const categoryChartData = computed(() => {
      const categories = {};
      Object.values(__props.TransactionPerDate).flat().forEach((transaction) => {
        if (!categories[transaction.category]) {
          categories[transaction.category] = 0;
        }
        categories[transaction.category] += transaction.amount;
      });
      return {
        labels: Object.keys(categories),
        datasets: [
          {
            data: Object.values(categories),
            backgroundColor: [
              "#22c55e",
              "#ef4444",
              "#3b82f6",
              "#f59e0b",
              "#8b5cf6",
              "#ec4899"
            ]
          }
        ]
      };
    });
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255, 255, 255, 0.1)"
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.7)"
          }
        },
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.1)"
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.7)"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "rgba(255, 255, 255, 0.7)"
          }
        }
      }
    };
    const doughnutOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: "rgba(255, 255, 255, 0.7)"
          }
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LineChart = _sfc_main$a;
      const _component_DoughnutChart = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, _attrs))}><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"><h3 class="text-lg font-semibold mb-4">Income vs Expenses</h3><div class="h-40">`);
      _push(ssrRenderComponent(_component_LineChart, {
        "chart-data": transactionChartData.value,
        options: chartOptions,
        size: "large"
      }, null, _parent));
      _push(`</div></div><div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"><h3 class="text-lg font-semibold mb-4">Category Distribution</h3><div class="h-40">`);
      _push(ssrRenderComponent(_component_DoughnutChart, {
        "chart-data": categoryChartData.value,
        options: doughnutOptions,
        size: "large"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transactionsCharts.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$2,
    UAvatar: __nuxt_component_4,
    UButton: __nuxt_component_2$1
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => appConfig.ui.alert.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => appConfig.ui.alert.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: () => appConfig.ui.alert.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.alert.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.alert.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.alert.variant),
          ...Object.values(appConfig.ui.alert.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.alert
    }
  },
  emits: ["close"],
  setup(props) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.alert));
    const alertClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      alertClass
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$2;
  const _component_UAvatar = __nuxt_component_4;
  const _component_UButton = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.alertClass }, _attrs))}><div class="${ssrRenderClass([{ "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }, "flex gap-3"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.ui.icon.base
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-0 flex-1"><p class="${ssrRenderClass(_ctx.ui.title)}">`);
  ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
    _push(`${ssrInterpolate(_ctx.title)}`);
  }, _push, _parent);
  _push(`</p>`);
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.description)}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="mt-3 flex items-center gap-2"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index2) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index2,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton, ...action }, {
        onClick: action.click
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex-shrink-0 flex items-center gap-3">`);
  if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="flex items-center gap-2"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index2) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        key: index2,
        ref_for: true
      }, { ..._ctx.ui.default.actionButton, ...action }, {
        onClick: action.click
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.closeButton) {
    _push(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.closeButton, ..._ctx.closeButton }, {
      onClick: ($event) => _ctx.$emit("close")
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/elements/Alert.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {
  __name: "SpentLimitAlert",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: "soft"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = __nuxt_component_0$1;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_UAlert, {
          icon: "i-heroicons-exclamation-circle",
          variant: __props.variant,
          color: "red",
          title: "Spent Limiter Alert!",
          description: __props.message
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SpentLimitAlert.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.modal
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.modal));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      isOpen.value = value;
      emit("close");
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, {
          class: _ctx.ui.wrapper,
          onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.height, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.height, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.height, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, {
            class: _ctx.ui.wrapper,
            onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
          }, {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.height, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 8, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const createLimitAlert = (currentValue, limitValue, period, type) => {
  return {
    isExceeded: currentValue > limitValue,
    message: `Your spending of ${currentValue} for the ${period} period has exceeded your set limit of ${limitValue}. Please review your ${type}.`
  };
};
const useSpentLimiter = (period, expenseValue, userData, categoryChosen = "") => {
  const alertMessages = {
    category: ref(""),
    overall: ref("")
  };
  if (!userData) {
    return {
      categoryAlert: computed(() => false),
      overallAlert: computed(() => false),
      categoryAlertMessage: alertMessages.category,
      overallAlertMessage: alertMessages.overall
    };
  }
  const { limiterValue, limiterTimePeriod, limiterType, limiterCategories } = userData;
  const isPeriodMatching = computed(() => limiterTimePeriod === period.value);
  const overallAlert = computed(() => {
    if (!isPeriodMatching.value || limiterType !== "overall" || !limiterValue) {
      return false;
    }
    const { isExceeded, message } = createLimitAlert(
      expenseValue.value,
      limiterValue,
      period.value,
      "expenses"
    );
    if (isExceeded) {
      alertMessages.overall.value = message;
    }
    return isExceeded;
  });
  const categoryAlert = computed(() => {
    if (!isPeriodMatching.value || limiterType !== "category" || !categoryChosen || !(limiterCategories == null ? void 0 : limiterCategories.length)) {
      return false;
    }
    const categoryLimit = limiterCategories.find(
      (cat) => cat.category === categoryChosen
    );
    if (!categoryLimit) {
      return false;
    }
    const { isExceeded, message } = createLimitAlert(
      expenseValue.value,
      categoryLimit.amount,
      period.value,
      "category expenses"
    );
    if (isExceeded) {
      alertMessages.category.value = message;
    }
    return isExceeded;
  });
  return {
    categoryAlert,
    overallAlert,
    categoryAlertMessage: alertMessages.category,
    overallAlertMessage: alertMessages.overall
  };
};
const _sfc_main$4 = {
  __name: "transaction-modal",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean,
    transaction: {
      type: Object,
      required: false
    },
    viewSelection: {
      type: String,
      default: "Daily"
    }
  },
  emits: ["update:modelValue", "saved"],
  setup(__props, { emit: __emit }) {
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const props = __props;
    const { categoryList } = useCategoryList();
    const isEditing = computed(() => !!props.transaction);
    const emit = __emit;
    const defaultSchema = z$2.object({
      created_at: z$2.string().optional(),
      description: z$2.string().optional(),
      amount: z$2.number().positive("Amount needs to be more than 0")
    });
    const incomeSchema = z$2.object({
      type: z$2.literal("Income")
    });
    const expenseSchema = z$2.object({
      type: z$2.literal("Expense"),
      category: z$2.enum(categoryList.value)
    });
    const investmentSchema = z$2.object({
      type: z$2.literal("Investment")
    });
    const saveSchema = z$2.object({
      type: z$2.literal("Saving")
    });
    const schema = z$2.intersection(
      z$2.discriminatedUnion("type", [
        incomeSchema,
        expenseSchema,
        saveSchema,
        investmentSchema
      ]),
      defaultSchema
    );
    const isOpen = computed({
      get: () => props.modelValue,
      set: (value) => {
        if (!value)
          resetForm();
        emit("update:modelValue", value);
      }
    });
    const initialState = isEditing.value ? {
      type: props.transaction.type,
      amount: props.transaction.amount,
      created_at: props.transaction.created_at.split("T")[0],
      description: props.transaction.description,
      category: props.transaction.category
    } : {
      type: void 0,
      amount: 0,
      created_at: (/* @__PURE__ */ new Date()).toISOString().substr(0, 10),
      description: void 0,
      category: "other"
    };
    const state = ref({ ...initialState });
    const resetForm = () => {
      Object.assign(state.value, initialState);
    };
    const form = ref();
    const isLoading = ref(false);
    const { toastSuccess, toastError } = useAppToast();
    const save = async () => {
      var _a;
      const isValid = await form.value.validate();
      if (!isValid) {
        toastSuccess({
          title: "Validation Error",
          description: "Please fix the errors in the form."
        });
        return;
      }
      isLoading.value = true;
      try {
        const { data: result, error } = await supabase.from("transactions").upsert({ ...state.value, id: (_a = props.transaction) == null ? void 0 : _a.id });
        if (error) {
          toastError({
            title: "Transaction not saved",
            description: `Error while saving transaction `
          });
          console.error("error while saving transaction: ", error);
        }
        console.log("result after save in supabase: ", result);
        isOpen.value = false;
        emit("saved");
        toastSuccess({
          title: "Transaction saved",
          description: "Transaction saved successfully"
        });
      } catch (error) {
        toastError({
          title: "Transaction not saved",
          description: `Error while saving transaction`
        });
        console.error("error while saving transaction: ", error);
      } finally {
        isLoading.value = false;
      }
    };
    const viewSelection = computed(() => props.viewSelection);
    const amountSelected = computed(() => state.value.amount);
    const categoryAlert = ref(false);
    const categoryAlertMessage = ref("");
    watch(
      [() => state.value.category, () => state.value.amount],
      ([newCategory, newAmount]) => {
        var _a, _b;
        if (!((_b = (_a = user.value) == null ? void 0 : _a.user_metadata) == null ? void 0 : _b.spent_limiter))
          return;
        const { categoryAlert: alert, categoryAlertMessage: message } = useSpentLimiter(
          viewSelection,
          amountSelected,
          user.value.user_metadata.spent_limiter,
          newCategory
        );
        categoryAlert.value = alert.value;
        categoryAlertMessage.value = message.value;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UCard = __nuxt_component_0$3;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UForm = __nuxt_component_0$4;
      const _component_UFormGroup = __nuxt_component_1$3;
      const _component_USelectMenu = __nuxt_component_0$2;
      const _component_UInput = __nuxt_component_1$1$1;
      const _component_SpentLimitAlert = _sfc_main$6;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="modal-header" data-v-f4c17a0e${_scopeId2}><span data-v-f4c17a0e${_scopeId2}>${ssrInterpolate(isEditing.value ? "Edit Transaction" : "Add Transaction")}</span>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "i-heroicons-x-mark-20-solid",
                    onClick: ($event) => isOpen.value = false,
                    class: "close-button",
                    color: "gray",
                    variant: "ghost",
                    ui: {
                      padding: "p-1",
                      rounded: "rounded-full",
                      color: {
                        gray: {
                          ghost: "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                        }
                      }
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "modal-header" }, [
                      createVNode("span", null, toDisplayString(isEditing.value ? "Edit Transaction" : "Add Transaction"), 1),
                      createVNode(_component_UButton, {
                        icon: "i-heroicons-x-mark-20-solid",
                        onClick: ($event) => isOpen.value = false,
                        class: "close-button",
                        color: "gray",
                        variant: "ghost",
                        ui: {
                          padding: "p-1",
                          rounded: "rounded-full",
                          color: {
                            gray: {
                              ghost: "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                            }
                          }
                        }
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    state: unref(state),
                    ref_key: "form",
                    ref: form,
                    onSubmit: save,
                    schema: unref(schema)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Transaction type",
                          required: true,
                          name: "type",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_USelectMenu, {
                                modelValue: unref(state).type,
                                "onUpdate:modelValue": ($event) => unref(state).type = $event,
                                options: unref(types),
                                placeholder: "Select the transaction type",
                                disabled: isEditing.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_USelectMenu, {
                                  modelValue: unref(state).type,
                                  "onUpdate:modelValue": ($event) => unref(state).type = $event,
                                  options: unref(types),
                                  placeholder: "Select the transaction type",
                                  disabled: isEditing.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Amount",
                          required: true,
                          name: "amount",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "number",
                                placeholder: "Amount",
                                modelValue: unref(state).amount,
                                "onUpdate:modelValue": ($event) => unref(state).amount = $event,
                                modelModifiers: { number: true }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "number",
                                  placeholder: "Amount",
                                  modelValue: unref(state).amount,
                                  "onUpdate:modelValue": ($event) => unref(state).amount = $event,
                                  modelModifiers: { number: true }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Transaction date",
                          name: "created_at",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                type: "date",
                                icon: "i-heroicons-calendar-days-20-solid",
                                modelValue: unref(state).created_at,
                                "onUpdate:modelValue": ($event) => unref(state).created_at = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  type: "date",
                                  icon: "i-heroicons-calendar-days-20-solid",
                                  modelValue: unref(state).created_at,
                                  "onUpdate:modelValue": ($event) => unref(state).created_at = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Description",
                          hint: "Optional",
                          name: "desc",
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                placeholder: "Description",
                                modelValue: unref(state).description,
                                "onUpdate:modelValue": ($event) => unref(state).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  placeholder: "Description",
                                  modelValue: unref(state).description,
                                  "onUpdate:modelValue": ($event) => unref(state).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(state).type === "Expense") {
                          _push4(ssrRenderComponent(_component_UFormGroup, {
                            label: "Category",
                            required: true,
                            name: "category",
                            class: "mb-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_USelectMenu, {
                                  options: unref(categoryList),
                                  placeholder: "Select a category",
                                  modelValue: unref(state).category,
                                  "onUpdate:modelValue": ($event) => unref(state).category = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_USelectMenu, {
                                    options: unref(categoryList),
                                    placeholder: "Select a category",
                                    modelValue: unref(state).category,
                                    "onUpdate:modelValue": ($event) => unref(state).category = $event
                                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_SpentLimitAlert, {
                          show: unref(categoryAlert),
                          message: unref(categoryAlertMessage),
                          variant: "soft"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "black",
                          label: "Save",
                          variant: "solid",
                          loading: unref(isLoading)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            label: "Transaction type",
                            required: true,
                            name: "type",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelectMenu, {
                                modelValue: unref(state).type,
                                "onUpdate:modelValue": ($event) => unref(state).type = $event,
                                options: unref(types),
                                placeholder: "Select the transaction type",
                                disabled: isEditing.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Amount",
                            required: true,
                            name: "amount",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "number",
                                placeholder: "Amount",
                                modelValue: unref(state).amount,
                                "onUpdate:modelValue": ($event) => unref(state).amount = $event,
                                modelModifiers: { number: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Transaction date",
                            name: "created_at",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                type: "date",
                                icon: "i-heroicons-calendar-days-20-solid",
                                modelValue: unref(state).created_at,
                                "onUpdate:modelValue": ($event) => unref(state).created_at = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Description",
                            hint: "Optional",
                            name: "desc",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                placeholder: "Description",
                                modelValue: unref(state).description,
                                "onUpdate:modelValue": ($event) => unref(state).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          unref(state).type === "Expense" ? (openBlock(), createBlock(_component_UFormGroup, {
                            key: 0,
                            label: "Category",
                            required: true,
                            name: "category",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelectMenu, {
                                options: unref(categoryList),
                                placeholder: "Select a category",
                                modelValue: unref(state).category,
                                "onUpdate:modelValue": ($event) => unref(state).category = $event
                              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_SpentLimitAlert, {
                            show: unref(categoryAlert),
                            message: unref(categoryAlertMessage),
                            variant: "soft"
                          }, null, 8, ["show", "message"]),
                          createVNode(_component_UButton, {
                            type: "submit",
                            color: "black",
                            label: "Save",
                            variant: "solid",
                            loading: unref(isLoading)
                          }, null, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      state: unref(state),
                      ref_key: "form",
                      ref: form,
                      onSubmit: withModifiers(save, ["prevent"]),
                      schema: unref(schema)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          label: "Transaction type",
                          required: true,
                          name: "type",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelectMenu, {
                              modelValue: unref(state).type,
                              "onUpdate:modelValue": ($event) => unref(state).type = $event,
                              options: unref(types),
                              placeholder: "Select the transaction type",
                              disabled: isEditing.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Amount",
                          required: true,
                          name: "amount",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "number",
                              placeholder: "Amount",
                              modelValue: unref(state).amount,
                              "onUpdate:modelValue": ($event) => unref(state).amount = $event,
                              modelModifiers: { number: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Transaction date",
                          name: "created_at",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              type: "date",
                              icon: "i-heroicons-calendar-days-20-solid",
                              modelValue: unref(state).created_at,
                              "onUpdate:modelValue": ($event) => unref(state).created_at = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Description",
                          hint: "Optional",
                          name: "desc",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              placeholder: "Description",
                              modelValue: unref(state).description,
                              "onUpdate:modelValue": ($event) => unref(state).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        unref(state).type === "Expense" ? (openBlock(), createBlock(_component_UFormGroup, {
                          key: 0,
                          label: "Category",
                          required: true,
                          name: "category",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelectMenu, {
                              options: unref(categoryList),
                              placeholder: "Select a category",
                              modelValue: unref(state).category,
                              "onUpdate:modelValue": ($event) => unref(state).category = $event
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_SpentLimitAlert, {
                          show: unref(categoryAlert),
                          message: unref(categoryAlertMessage),
                          variant: "soft"
                        }, null, 8, ["show", "message"]),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "black",
                          label: "Save",
                          variant: "solid",
                          loading: unref(isLoading)
                        }, null, 8, ["loading"])
                      ]),
                      _: 1
                    }, 8, ["state", "schema"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "modal-header" }, [
                    createVNode("span", null, toDisplayString(isEditing.value ? "Edit Transaction" : "Add Transaction"), 1),
                    createVNode(_component_UButton, {
                      icon: "i-heroicons-x-mark-20-solid",
                      onClick: ($event) => isOpen.value = false,
                      class: "close-button",
                      color: "gray",
                      variant: "ghost",
                      ui: {
                        padding: "p-1",
                        rounded: "rounded-full",
                        color: {
                          gray: {
                            ghost: "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                          }
                        }
                      }
                    }, null, 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    state: unref(state),
                    ref_key: "form",
                    ref: form,
                    onSubmit: withModifiers(save, ["prevent"]),
                    schema: unref(schema)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        label: "Transaction type",
                        required: true,
                        name: "type",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(state).type,
                            "onUpdate:modelValue": ($event) => unref(state).type = $event,
                            options: unref(types),
                            placeholder: "Select the transaction type",
                            disabled: isEditing.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Amount",
                        required: true,
                        name: "amount",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "number",
                            placeholder: "Amount",
                            modelValue: unref(state).amount,
                            "onUpdate:modelValue": ($event) => unref(state).amount = $event,
                            modelModifiers: { number: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Transaction date",
                        name: "created_at",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "date",
                            icon: "i-heroicons-calendar-days-20-solid",
                            modelValue: unref(state).created_at,
                            "onUpdate:modelValue": ($event) => unref(state).created_at = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Description",
                        hint: "Optional",
                        name: "desc",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            placeholder: "Description",
                            modelValue: unref(state).description,
                            "onUpdate:modelValue": ($event) => unref(state).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      unref(state).type === "Expense" ? (openBlock(), createBlock(_component_UFormGroup, {
                        key: 0,
                        label: "Category",
                        required: true,
                        name: "category",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            options: unref(categoryList),
                            placeholder: "Select a category",
                            modelValue: unref(state).category,
                            "onUpdate:modelValue": ($event) => unref(state).category = $event
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_SpentLimitAlert, {
                        show: unref(categoryAlert),
                        message: unref(categoryAlertMessage),
                        variant: "soft"
                      }, null, 8, ["show", "message"]),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "black",
                        label: "Save",
                        variant: "solid",
                        loading: unref(isLoading)
                      }, null, 8, ["loading"])
                    ]),
                    _: 1
                  }, 8, ["state", "schema"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transaction-modal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f4c17a0e"]]);
const _sfc_main$3 = {
  __name: "daily-transaction-summary",
  __ssrInlineRender: true,
  props: {
    date: {
      type: String
    },
    transactions: {
      type: Array,
      default: []
    },
    viewSelection: {
      type: String,
      default: "Daily"
    }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const sum = computed(() => {
      let sum2 = 0;
      for (const transaction of props.transactions) {
        if (transaction.type === "Income") {
          sum2 += transaction.amount;
        } else {
          sum2 -= transaction.amount;
        }
      }
      return sum2;
    });
    const { currency } = useCurrency(sum);
    const income = computed(() => {
      let income2 = 0;
      for (const transaction of props.transactions) {
        if (transaction.type === "Income") {
          income2 += transaction.amount;
        }
      }
      return income2;
    });
    const { currency: incomeCurrency } = useCurrency(income);
    const expense = computed(() => {
      let expense2 = 0;
      for (const transaction of props.transactions) {
        if (transaction.type === "Expense") {
          expense2 += transaction.amount;
        }
      }
      return expense2;
    });
    const { currency: expenseCurrency } = useCurrency(expense);
    const formattedDate = computed(() => {
      const date = new Date(props.date);
      if (props.viewSelection === "Yearly") {
        return date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric"
        });
      }
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    });
    const isCollapsed = ref(true);
    watch(isCollapsed, (value) => {
      emit("toggle");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer" }, _attrs))} data-v-2ae55559><div class="flex space-x-2 items-center" data-v-2ae55559>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(isCollapsed) ? "i-heroicons-chevron-down" : "i-heroicons-chevron-right",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`<div data-v-2ae55559><span class="font-medium text-gray-900 dark:text-gray-100" data-v-2ae55559>${ssrInterpolate(unref(formattedDate))}</span><span class="text-sm ml-2" data-v-2ae55559>(${ssrInterpolate(__props.transactions.length)} transactions)</span></div></div><div class="flex items-center justify-end mr-10 space-x-4" data-v-2ae55559><div class="flex flex-col items-end" data-v-2ae55559><span class="${ssrRenderClass([unref(sum) > 0 ? "text-green-600" : "text-red-600", "font-medium"])}" data-v-2ae55559>${ssrInterpolate(unref(currency))}</span><div class="text-xs" data-v-2ae55559><span class="text-green-600" data-v-2ae55559>+${ssrInterpolate(unref(incomeCurrency))}</span> / <span class="text-red-600" data-v-2ae55559>-${ssrInterpolate(unref(expenseCurrency))}</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/daily-transaction-summary.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2ae55559"]]);
const _sfc_main$2 = defineComponent({
  props: {
    size: {
      type: String,
      default: () => appConfig.ui.badge.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.badge.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.badge.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.badge.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.badge.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.badge.variant),
          ...Object.values(appConfig.ui.badge.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => appConfig.ui.badge
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defu({}, props.ui, appConfig2.ui.badge));
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return classNames(
        ui.value.base,
        ui.value.font,
        ui.value.rounded,
        ui.value.size[props.size],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      );
    });
    return {
      badgeClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.label)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "transaction",
  __ssrInlineRender: true,
  props: {
    transaction: {
      type: Object,
      default: {}
    },
    viewSelection: {
      type: String,
      default: "Daily"
    },
    expenseTotal: {
      type: Number,
      default: 0
    }
  },
  emits: ["deleteTransaction", "editTransaction"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const dayDate = computed(() => {
      return new Date(props.transaction.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric"
      });
    });
    const emit = __emit;
    const { currency } = useCurrency(props.transaction.amount);
    let isLoading = ref(false);
    const { toastSuccess, toastError } = useAppToast();
    const supabase = useSupabaseClient();
    const isOpen = ref(false);
    const deleteTransaction = async () => {
      isLoading.value = true;
      try {
        await supabase.from("transactions").delete().eq("id", props.transaction.id);
        isLoading.value = false;
        toastSuccess({
          title: "Transaction deleted",
          description: "Your transaction has been deleted"
        });
        emit("deleteTransaction", props.transaction.id);
      } catch (error) {
        toastError({
          title: "Transaction deleted",
          description: "error when trying to delete transaction  "
        });
        console.log("error deleting transactions: ", error);
      } finally {
        isLoading.value = false;
      }
    };
    const items = [
      [
        {
          label: "Edit",
          icon: "i-heroicons-pencil-square",
          color: "white",
          variant: "ghost",
          click: () => isOpen.value = true
        },
        {
          label: "Delete",
          icon: "i-heroicons-trash",
          color: "white",
          variant: "ghost",
          click: deleteTransaction
        }
      ]
    ];
    const isIncome = computed(() => {
      return props.transaction.type === "Income";
    });
    computed(() => {
      return isIncome.value ? "i-heroicons-arrow-up-right" : "i-heroicons-arrow-down-left";
    });
    computed(() => {
      return isIncome.value ? "text-green-600" : "text-red-600";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$2;
      const _component_UBadge = __nuxt_component_1;
      const _component_UDropdown = __nuxt_component_3;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100" }, _attrs))}><div class="flex space-x-2 items-center justify-between space-x-4 col-span-2"><div class="flex items-center space-x-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.transaction.type === "Income" ? "i-heroicons-arrow-up" : __props.transaction.type === "Expense" ? "i-heroicons-arrow-down" : __props.transaction.type === "Saving" ? "i-heroicons-banknotes" : __props.transaction.type === "Investment" ? "i-heroicons-chart-pie" : "i-heroicons-question-mark-circle",
        class: [
          __props.transaction.type === "Income" ? "text-green-500" : __props.transaction.type === "Expense" ? "text-red-500" : __props.transaction.type === "Saving" ? "text-blue-500" : __props.transaction.type === "Investment" ? "text-purple-500" : "text-gray-500"
        ],
        title: __props.transaction.type
      }, null, _parent));
      _push(`<div>${ssrInterpolate(__props.transaction.description)}</div></div>`);
      if (__props.viewSelection === "Yearly") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UBadge, { color: "white" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(dayDate))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(dayDate)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.transaction.category) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UBadge, { color: "white" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.transaction.category)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.transaction.category), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center justify-end space-x-2"><div>${ssrInterpolate(unref(currency))}</div><div>`);
      _push(ssrRenderComponent(_component_UDropdown, {
        items,
        popper: { placement: "bottom-start" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "ghost",
              icon: "i-heroicons-ellipsis-horizontal",
              loading: unref(isLoading)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(__nuxt_component_6, {
              modelValue: unref(isOpen),
              "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
              transaction: __props.transaction,
              viewSelection: __props.viewSelection,
              onSave: ($event) => emit("editTransaction", __props.transaction),
              onDelete: deleteTransaction
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "ghost",
                icon: "i-heroicons-ellipsis-horizontal",
                loading: unref(isLoading)
              }, null, 8, ["loading"]),
              createVNode(__nuxt_component_6, {
                modelValue: unref(isOpen),
                "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
                transaction: __props.transaction,
                viewSelection: __props.viewSelection,
                onSave: ($event) => emit("editTransaction", __props.transaction),
                onDelete: deleteTransaction
              }, null, 8, ["modelValue", "onUpdate:modelValue", "transaction", "viewSelection", "onSave"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transaction.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useSelectedTimePeriod = (period) => {
  const current = computed(() => {
    switch (period.value) {
      case "Yearly":
        return {
          from: startOfYear(/* @__PURE__ */ new Date()),
          to: endOfYear(/* @__PURE__ */ new Date())
        };
      case "Monthly":
        return {
          from: startOfMonth(/* @__PURE__ */ new Date()),
          to: endOfMonth(/* @__PURE__ */ new Date())
        };
      case "Weekly":
        return {
          from: startOfWeek(/* @__PURE__ */ new Date()),
          to: endOfWeek(/* @__PURE__ */ new Date())
        };
      case "Daily":
        return {
          from: startOfDay(/* @__PURE__ */ new Date()),
          to: endOfDay(/* @__PURE__ */ new Date())
        };
    }
  });
  const previous = computed(() => {
    switch (period.value) {
      case "Yearly":
        const lastYear = sub(/* @__PURE__ */ new Date(), { years: 1 });
        return {
          from: startOfYear(lastYear),
          to: endOfYear(lastYear)
        };
      case "Monthly":
        const lastMonth = sub(/* @__PURE__ */ new Date(), { months: 1 });
        return {
          from: startOfMonth(lastMonth),
          to: endOfMonth(lastMonth)
        };
      case "Weekly":
        const lastWeek = sub(/* @__PURE__ */ new Date(), { weeks: 1 });
        return {
          from: startOfWeek(lastWeek),
          to: endOfWeek(lastWeek)
        };
      case "Daily":
        const yesterday = sub(/* @__PURE__ */ new Date(), { days: 1 });
        return {
          from: startOfDay(yesterday),
          to: endOfDay(yesterday)
        };
    }
  });
  return {
    current,
    previous
  };
};
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useFetchTransactions = (period, currentUserID) => {
  const supabase = useSupabaseClient();
  const transactions = ref([]);
  const pending = ref(false);
  const income = computed(() => {
    return transactions.value.filter(
      (transaction) => transaction.type === "Income"
    );
  });
  const expense = computed(() => {
    return transactions.value.filter(
      (transaction) => transaction.type === "Expense"
    );
  });
  const incomeCount = computed(() => {
    return income.value.length;
  });
  const expenseCount = computed(() => {
    return expense.value.length;
  });
  const incomeTotal = computed(() => {
    return income.value.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  });
  const expenseTotal = computed(() => {
    return expense.value.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  });
  const fetchTransactions = async () => {
    pending.value = true;
    try {
      const { data } = await useAsyncData(
        `transactions-${period.value.from.toDateString()}-${period.value.to.toDateString()}`,
        async () => {
          const { data: data2, error } = await supabase.from("transactions").select().gte("created_at", period.value.from.toISOString()).lte("created_at", period.value.to.toISOString()).eq("user_id", currentUserID).order("created_at", { ascending: false });
          if (error)
            return [];
          return data2;
        }
      );
      return data.value;
    } catch (error) {
      console.log("error while fetching transactions: ", error);
    } finally {
      pending.value = false;
    }
  };
  const refresh = async () => transactions.value = await fetchTransactions();
  watch(period, async () => await refresh());
  const transactGroupedByDate = computed(() => {
    let grouped = {};
    for (let transaction of transactions.value) {
      const date = transaction.created_at.split("T")[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
    }
    return grouped;
  });
  const savingsTotal = computed(() => {
    return incomeTotal.value - expenseTotal.value;
  });
  const investmentsTotal = computed(() => {
    return transactions.value.filter((transaction) => transaction.type === "Investment").reduce((sum, transaction) => sum + transaction.amount, 0);
  });
  return {
    transactions: {
      all: transactions,
      grouped: {
        byDate: transactGroupedByDate
      },
      income,
      expense,
      incomeTotal,
      expenseTotal,
      incomeCount,
      expenseCount
    },
    savingsTotal,
    investmentsTotal,
    pending,
    refresh
  };
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a2;
    var _a, _b;
    let __temp, __restore;
    const isOpen = ref(false);
    const isSearchOpen = ref(false);
    const searchQuery = ref("");
    const collapsedGroups = ref({});
    const user = useSupabaseUser();
    const viewSelection = ref(
      (_a2 = (_a = user.value.user_metadata) == null ? void 0 : _a.transaction_view) != null ? _a2 : transactionViewOptions[1]
    );
    const { current, previous } = useSelectedTimePeriod(viewSelection);
    const {
      pending,
      refresh,
      transactions: {
        incomeTotal,
        expenseTotal,
        incomeCount,
        expenseCount,
        grouped: { byDate }
      },
      savingsTotal,
      investmentsTotal
    } = useFetchTransactions(current, user.value.id);
    const {
      refresh: refreshPrevious,
      transactions: {
        incomeTotal: prevIncomeTotal,
        expenseTotal: prevExpenseTotal
      }
    } = useFetchTransactions(previous, user.value.id);
    [__temp, __restore] = withAsyncContext(() => Promise.all([refresh(), refreshPrevious()])), await __temp, __restore();
    const toggleSearch = () => {
      isSearchOpen.value = !isSearchOpen.value;
      if (!isSearchOpen.value) {
        clearSearch();
      }
    };
    const closeSearch = () => {
      isSearchOpen.value = false;
      clearSearch();
    };
    const clearSearch = () => {
      searchQuery.value = "";
    };
    const filteredTransactions = computed(() => {
      const transactions = viewSelection.value === "Yearly" ? byMonth.value : byDate.value;
      if (!searchQuery.value || !transactions)
        return transactions;
      const query = searchQuery.value.toLowerCase().trim();
      const filtered = {};
      Object.entries(transactions).forEach(([date, transactionList]) => {
        const matchingTransactions = transactionList.filter(
          (transaction) => {
            var _a22, _b2, _c;
            return ((_a22 = transaction.description) == null ? void 0 : _a22.toLowerCase().includes(query)) || ((_b2 = transaction.category) == null ? void 0 : _b2.toLowerCase().includes(query)) || ((_c = transaction.amount) == null ? void 0 : _c.toString().includes(query));
          }
        );
        if (matchingTransactions.length > 0) {
          filtered[date] = matchingTransactions;
        }
      });
      return filtered;
    });
    const filteredStats = computed(() => {
      let incomeCount2 = 0;
      let expenseCount2 = 0;
      if (!filteredTransactions.value)
        return { incomeCount: incomeCount2, expenseCount: expenseCount2 };
      Object.values(filteredTransactions.value).forEach((transactions) => {
        transactions.forEach((transaction) => {
          if (transaction.type === "Income")
            incomeCount2++;
          if (transaction.type === "Expense")
            expenseCount2++;
        });
      });
      return { incomeCount: incomeCount2, expenseCount: expenseCount2 };
    });
    const toggleTransactions = (date) => {
      collapsedGroups.value[date] = !collapsedGroups.value[date];
    };
    const byMonth = computed(() => {
      if (!byDate.value)
        return {};
      return Object.entries(byDate.value).reduce((acc, [date, transactions]) => {
        const monthKey = date.substring(0, 7);
        if (!acc[monthKey]) {
          acc[monthKey] = [];
        }
        acc[monthKey].push(...transactions);
        return acc;
      }, {});
    });
    watch(viewSelection, () => {
      clearSearch();
    });
    const { overallAlert, overallAlertMessage } = useSpentLimiter(
      viewSelection,
      expenseTotal,
      (_b = user.value.user_metadata) == null ? void 0 : _b.spent_limiter
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelectMenu = __nuxt_component_0$2;
      const _component_Trend = __nuxt_component_1$1;
      const _component_TransactionsCharts = _sfc_main$8;
      const _component_SpentLimitAlert = _sfc_main$6;
      const _component_UInput = __nuxt_component_1$1$1;
      const _component_UButton = __nuxt_component_2$1;
      const _component_TransactionModal = __nuxt_component_6;
      const _component_DailyTransactionSummary = __nuxt_component_7;
      const _component_Transaction = _sfc_main$1;
      const _component_USkeleton = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen" }, _attrs))} data-v-91b42788><section class="flex items-center justify-between mb-10" data-v-91b42788><h1 class="text-xl font-extrabold" data-v-91b42788>Summary</h1><div data-v-91b42788>`);
      _push(ssrRenderComponent(_component_USelectMenu, {
        options: unref(transactionViewOptions),
        modelValue: unref(viewSelection),
        "onUpdate:modelValue": ($event) => isRef(viewSelection) ? viewSelection.value = $event : null
      }, null, _parent));
      _push(`</div></section><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10" data-v-91b42788>`);
      _push(ssrRenderComponent(_component_Trend, {
        color: "green",
        title: "Total Income",
        amount: unref(incomeTotal),
        lastAmount: unref(prevIncomeTotal),
        loading: unref(pending)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Trend, {
        color: "red",
        title: "Expenses",
        amount: unref(expenseTotal),
        lastAmount: unref(prevExpenseTotal),
        loading: unref(pending)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Trend, {
        color: "green",
        title: "Investments",
        amount: unref(investmentsTotal),
        lastAmount: 0,
        loading: unref(pending)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Trend, {
        color: "green",
        title: "Savings",
        amount: unref(savingsTotal),
        lastAmount: 0,
        loading: unref(pending)
      }, null, _parent));
      _push(`</section>`);
      if (!unref(pending)) {
        _push(`<section class="mb-10" data-v-91b42788>`);
        _push(ssrRenderComponent(_component_TransactionsCharts, {
          TransactionPerDate: unref(viewSelection) === "Yearly" ? unref(byMonth) : unref(byDate)
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SpentLimitAlert, {
        show: unref(overallAlert),
        message: unref(overallAlertMessage),
        variant: "outline"
      }, null, _parent));
      _push(`<section class="flex justify-between mb-10" data-v-91b42788><div data-v-91b42788><h2 class="text-2xl font-extrabold" data-v-91b42788>Transaction</h2><div class="text-gray-500 dark:text-gray-400" data-v-91b42788> You have ${ssrInterpolate(unref(filteredStats).incomeCount)} incomes and ${ssrInterpolate(unref(filteredStats).expenseCount)} expenses this period. </div></div><div class="flex items-center gap-4" data-v-91b42788><div style="${ssrRenderStyle(unref(isSearchOpen) ? null : { display: "none" })}" class="w-60" data-v-91b42788>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        type: "text",
        placeholder: "Search transactions...",
        icon: "i-heroicons-magnifying-glass",
        clearable: "",
        onKeyup: closeSearch,
        onClear: clearSearch
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: unref(isSearchOpen) ? "i-heroicons-x-mark" : "i-heroicons-magnifying-glass",
        color: "white",
        variant: "solid",
        label: unref(isSearchOpen) ? "" : "Search",
        onClick: toggleSearch
      }, null, _parent));
      _push(ssrRenderComponent(_component_TransactionModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        onSaved: ($event) => unref(refresh)()
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-plus-circle",
        color: "white",
        variant: "solid",
        label: "Add",
        onClick: ($event) => isOpen.value = true
      }, null, _parent));
      _push(`</div></section><div class="flex-1 overflow-y-auto" data-v-91b42788>`);
      if (!unref(pending)) {
        _push(`<section data-v-91b42788><!--[-->`);
        ssrRenderList(unref(filteredTransactions), (transactionsOnDay, period) => {
          _push(`<div class="mb-6" data-v-91b42788>`);
          if (unref(viewSelection) !== "Daily") {
            _push(ssrRenderComponent(_component_DailyTransactionSummary, {
              date: period,
              transactions: transactionsOnDay,
              onToggle: ($event) => toggleTransactions(period),
              viewSelection: unref(viewSelection)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div style="${ssrRenderStyle(!unref(collapsedGroups)[period] ? null : { display: "none" })}" class="pl-6 border-l-2 border-gray-100 dark:border-gray-800 ml-2" data-v-91b42788><!--[-->`);
          ssrRenderList(transactionsOnDay, (transaction) => {
            _push(ssrRenderComponent(_component_Transaction, {
              key: transaction.id,
              transaction,
              onDeleteTransaction: ($event) => unref(refresh)(),
              onEditTransaction: ($event) => unref(refresh)(),
              viewSelection: unref(viewSelection),
              expenseTotal: unref(expenseTotal)
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<section data-v-91b42788><!--[-->`);
        ssrRenderList(4, (i2) => {
          _push(ssrRenderComponent(_component_USkeleton, {
            class: "h-10 w-full mb-2",
            key: i2
          }, null, _parent));
        });
        _push(`<!--]--></section>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91b42788"]]);

export { index as default };
//# sourceMappingURL=index-Dek9egH8.mjs.map
