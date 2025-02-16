<template>
  <div v-if="show" class="pb-5">
    <UAlert
      icon="i-heroicons-exclamation-circle"
      :variant="variant"
      color="red"
      title="Spent Limiter Alert!"
      :description="message"
    />
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "soft",
  },
});
</script>
