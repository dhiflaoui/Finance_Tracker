<template>
  <header class="flex justify-between items-center mt-10">
    <div class="flex items-center gap-2">
      <NuxtLink to="/" class="text-2xl font-bold">My Finance Tracker</NuxtLink>

      <UIcon name="i-heroicons-banknotes" class="w-5 h-5" />
    </div>
    <div>
      <div class="flex items-center">
        <UButton
          :icon="btnIcon"
          :color="btnColor"
          size="sm"
          square
          @click="toggleMode"
          class="dark:text-white ms-2 mr-2"
        />
        <UDropdown
          :items="items"
          :ui="{ item: { disabled: 'cursor-text select-text' }, width: 'w-64' }"
          v-if="user"
        >
          <UAvatar
            :src="url ?? 'https://avatars.githubusercontent.com/u/739984?v=4'"
            alt="Avatar"
          />
          <template #account="{ item }">
            <div class="text-left">
              <p>Signed in as</p>
              <p class="font-medium text-gray-900 dark:text-white">
                {{ user.user_metadata.full_name ?? user.email }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon
              :name="item.icon"
              class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
            />
          </template>
        </UDropdown>
      </div>
    </div>
  </header>
</template>
<script setup>
const { avatarUrl: url } = useAvatarUrl();
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const items = [
  [
    {
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
      click: () => navigateTo("/settings/profile"),
    },
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: async () => {
        await supabase.auth.signOut();
        return navigateTo("/login");
      },
    },
  ],
];
const colorMode = useColorMode();
const btnColor = computed(() =>
  colorMode.preference === "light" ? "black" : "white"
);
const btnIcon = computed(() =>
  colorMode.preference === "light" ? "i-heroicons-moon" : "i-heroicons-sun"
);
function toggleMode() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>
