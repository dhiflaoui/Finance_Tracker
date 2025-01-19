import { defineComponent } from 'vue';
import { A } from './keyboard-DHi4gVZX.mjs';

function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
    throw o;
  }));
}
var u = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(u || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n, attrs: i }) {
  return () => {
    var r;
    let { features: e, ...d } = t2, o = { "aria-hidden": (e & 2) === 2 ? true : (r = d["aria-hidden"]) != null ? r : void 0, hidden: (e & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o, theirProps: d, slot: {}, attrs: i, slots: n, name: "Hidden" });
  };
} });

export { f, t, u };
//# sourceMappingURL=hidden-LGrrAexB.mjs.map
