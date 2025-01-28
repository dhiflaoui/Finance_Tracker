import { r as defineNuxtRouteMiddleware, u as useSupabaseUser, n as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'lodash-es';

const auth = defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  if (to.path === "/login" && (user == null ? void 0 : user.value)) {
    return navigateTo("/");
  }
  return void 0;
});

export { auth as default };
//# sourceMappingURL=auth-sVSvA_SB.mjs.map
