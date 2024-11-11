<template>
  <div>
    <div class="flex gap-2 items-start">
      <UFormGroup label="Expense categories" name="newCategory" class="flex-1">
        <UInput
          type="text"
          placeholder="Add new category..."
          @keyup.enter="addItem"
          v-model="newCategory"
          clearable
        />
      </UFormGroup>
      <UButton
        class="mt-7"
        @click="addItem"
        color="primary"
        size="md"
        label="Add"
        :disabled="!newCategory"
      />
    </div>
    <div class="mt-4 space-y-2">
      <div
        v-for="catg in categories"
        :key="catg"
        class="flex items-center justify-between p-1 rounded border"
      >
        <span>{{ catg }}</span>
        <UButton
          size="sm"
          color="red"
          variant="soft"
          icon="i-heroicons-trash"
          @click="removeItem(catg)"
          title="Delete category"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  initialCategories: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["update:categories"]);
const newCategory = ref("");
const addItem = () => {
  if (!newCategory.value) return;
  const updatedCategories = [...props.categories, newCategory.value];
  emit("update:categories", updatedCategories);
  newCategory.value = "";
};
const removeItem = (category) => {
  const updatedCategories = props.categories.filter((c) => c !== category);
  emit("update:categories", updatedCategories);
};
</script>
