<template>
  <header class="flex justify-between items-center mt-10">
    <div class="flex items-center gap-2">
      <NuxtLink to="/" class="text-2xl font-bold">My Finance Tracker</NuxtLink>
      <UIcon name="i-heroicons-banknotes" class="w-5 h-5" />
    </div>
    <div>
      <div class="flex items-center gap-2">
        <!-- Notification Dropdown -->
        <!-- <UDropdown
          :items="notificationItems"
          :ui="{
            item: { disabled: 'cursor-pointer select-text' },
            width: 'w-80',
            container: 'max-h-[400px] overflow-y-auto',
          }"
        >
          <UButton
            icon="i-heroicons-bell"
            :color="hasUnreadNotifications ? 'red' : 'gray'"
            variant="ghost"
          >
            <UBadge
              v-if="unreadNotificationsCount"
              :value="unreadNotificationsCount"
              position="top-right"
              color="red"
            />
          </UButton>

          <template #header>
            <div class="flex justify-between items-center p-2">
              <h3 class="font-semibold">Notifications</h3>
              <UButton
                v-if="notifications.length"
                size="xs"
                variant="ghost"
                @click="clearNotifications"
                label="Clear all"
              />
            </div>
          </template>
        </UDropdown> -->

        <!-- Theme Toggle -->
        <UButton
          :icon="btnIcon"
          :color="btnColor"
          size="sm"
          square
          @click="toggleMode"
          class="dark:text-white"
        />

        <!-- User Profile Dropdown -->
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

// Notifications setup
const notifications = ref([
  {
    id: 1,
    message: "You're approaching your monthly spending limit",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    message: "New feature: CSV import is now available!",
    time: "1d ago",
    read: true,
  },
]);

const unreadNotificationsCount = computed(
  () => notifications.value.filter((n) => !n.read).length
);

const hasUnreadNotifications = computed(
  () => unreadNotificationsCount.value > 0
);

const notificationItems = computed(() => [
  ...notifications.value.map((notification) => ({
    label: notification.message,
    icon: notification.read ? "i-heroicons-check" : "i-heroicons-bell",
    click: () => markNotificationAsRead(notification.id),
  })),
]);

function markNotificationAsRead(id) {
  const notification = notifications.value.find((n) => n.id === id);
  if (notification) notification.read = true;
}

function clearNotifications() {
  notifications.value = [];
}

// Existing profile dropdown items
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

// Theme toggle
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
