<template>
  <UCard class="bg-gray-50 dark:bg-gray-800" @submit.prevent="onSubmitAccount">
    <form @submit.prevent="onSubmitAccount">
      <UFormGroup
        label="Full Name"
        name="fullName"
        :error="errors.fullName"
        required
      >
        <UInput
          v-model="accountForm.fullName"
          @blur="validateField('fullName')"
          required
          placeholder="Enter your Full Name"
        >
          <template #leading>
            <UIcon name="i-heroicons-user" />
          </template>
        </UInput>
      </UFormGroup>
      <UFormGroup
        label="Email"
        name="email"
        :error="errors.email"
        required
        class="mt-2"
      >
        <UInput
          placeholder="Enter your email"
          v-model="accountForm.email"
          @blur="validateField('email')"
          required
        >
          <template #leading>
            <UIcon name="i-heroicons-envelope" />
          </template>
        </UInput>
      </UFormGroup>
      <UFormGroup
        label="Password"
        name="password"
        :error="errors.password"
        required
        class="mb-4 mt-2"
      >
        <div class="relative">
          <UInput
            :type="showPassword ? 'text' : 'password'"
            v-model="accountForm.password"
            @blur="validateField('password')"
            placeholder="Enter your password"
          >
            <template #leading>
              <UIcon name="i-heroicons-lock-closed" />
            </template>
          </UInput>
          <button
            type="button"
            class="absolute right-2 top-1/2 -translate-y-1/2"
            @click="showPassword = !showPassword"
          >
            <UIcon
              :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
              class="h-5 w-5 text-gray-500"
            />
          </button>
        </div>
      </UFormGroup>
      <UButton
        type="submit"
        variant="solid"
        color="teal"
        :loading="pending"
        :disabled="pending || !isFormValid"
        size="lg"
        :class="[
          'rounded-xl shadow-md',
          {
            'transition-transform hover:scale-[1.02] active:scale-[0.98]':
              !pending && !errors,
          },
        ]"
      >
        Sign-Up
      </UButton>
    </form>
  </UCard>
</template>

<script setup>
import { ref, computed } from "vue";
import { z } from "zod";
let showPassword = ref(false);
import { categories } from "~/constants";
const { toastSuccess, toastError } = useAppToast();
const supabase = useSupabaseClient();

const accountSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .max(100, "Full name must be less than 100 characters"),
});

const accountForm = ref({
  email: "",
  password: "",
  fullName: "",
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
          categories: [...categories],
        },
      },
    });
    navigateTo(`/`);
    toastSuccess({
      title: "user saved",
      description: "User added successfully",
    });

    accountForm.value = {
      email: "",
      password: "",
      fullName: "",
    };

    if (error) {
      toastError({
        title: "Error while adding your account",
        description: error.message,
      });
    }
    errors.value = {};
  } catch (error) {
    console.error("An error occurred while adding user account: ", error);
  } finally {
    pending.value = false;
  }
}
</script>
