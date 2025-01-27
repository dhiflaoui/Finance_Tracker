<template>
  <div v-if="!success" class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
    <form @submit.prevent="handleLogin">
      <UFormGroup
        label="Email Address"
        name="email"
        class="mb-2 text-sm"
        :required="true"
        help="You will receive an email with the confirmation link"
      >
        <UInput
          type="email"
          required
          v-model="email"
          @blur="validateField"
          placeholder="Enter your email"
        >
          <template #leading>
            <UIcon name="i-heroicons-envelope" />
          </template>
        </UInput>
      </UFormGroup>
      <p :class="{ 'text-red-600': errors }" class="h-5 text-sm mb-2">
        {{ errors }}
      </p>
      <UButton
        type="submit"
        variant="solid"
        color="teal"
        size="lg"
        :class="[
          'rounded-xl shadow-md',
          {
            'transition-transform hover:scale-[1.02] active:scale-[0.98]':
              !pending && !errors,
          },
        ]"
        :loading="pending"
        :disabled="pending || !!errors"
        >Sign-in</UButton
      >
    </form>
  </div>
  <UCard v-else>
    <template #header>
      <span class="font-bold text-xl">Email has been sent</span>
    </template>
    <div class="text-center">
      <p>
        We have sent an email to <strong>{{ email }}</strong> with a link to
        sign in
      </p>
      <p class="font-bold">Important: the link will expire in 5 minutes.</p>
    </div>
  </UCard>
</template>

<script setup>
import { ref } from "vue";
import { z } from "zod";

const success = ref(false);
const email = ref("");
const pending = ref(false);
const supabase = useSupabaseClient();
const { toastError } = useAppToast();
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

const handleLogin = async () => {
  validateField();
  if (errors.value) {
    return;
  }

  pending.value = true;
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${redirectUrl}/confirm`,
      },
    });
    if (error) {
      toastError({
        title: "Error authenticating",
        description: error.message,
      });
    } else {
      success.value = true;
    }
  } catch (error) {
    console.error("Error authenticating:", error);
  } finally {
    pending.value = false;
  }
};
</script>
