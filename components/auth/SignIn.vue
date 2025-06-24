<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent"
    ></div>
    <UCard
      class="w-full max-w-md relative z-10 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl"
    >
      <template #header>
        <div class="space-y-4 text-center">
          <div class="flex justify-center">
            <div
              class="p-3 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full"
            >
              <UIcon
                name="i-heroicons-arrow-trending-up"
                class="h-8 w-8 text-white"
              />
            </div>
          </div>
          <h1 class="text-2xl font-bold text-white">Welcome Back</h1>
          <p class="text-slate-400">Sign in to your finance dashboard</p>
        </div>
      </template>
      <div class="space-y-6" v-if="!success">
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
            variant="outline"
            color="teal"
            block
            :class="[
              'w-full bg-gradient-to-r  text-white font-medium py-2.5 transition-all duration-200 rounded-xl shadow-md hover:shadow-xl',
              {
                'transition-transform hover:scale-[1.02] active:scale-[0.98]':
                  !pending && !errors,
              },
            ]"
            :loading="pending"
            :disabled="pending || !!errors"
          >
            <template v-if="pending">
              <div class="flex items-center space-x-2">
                <span>Signing in...</span>
              </div>
            </template>
            <template v-else> Sign In </template>
          </UButton>
        </form>
      </div>
      <UCard
        v-else
        :ui="{
          divide: 'divide-y-0',
          header: { padding: 'px-4 py-5 sm:px-6' },
          body: { padding: 'px-4 py-5 sm:p-6' },
        }"
      >
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
    </UCard>
  </div>
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
console.log('"""""""""""redirectUrl""""""""""""""": ', redirectUrl);

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
    email.value = "";
    errors.value = "";
    success.value = false;
  } finally {
    pending.value = false;
  }
};
</script>
