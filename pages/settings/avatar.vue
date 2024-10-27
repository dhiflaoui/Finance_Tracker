<template>
  <div>
    <div class="mb-4">
      <UFormGroup
        label="Current avatar"
        class="w-full"
        help="This would be blank by default"
      >
        <UAvatar
          :src="url ?? 'https://avatars.githubusercontent.com/u/739984?v=4'"
          size="3xl"
        />
      </UFormGroup>
    </div>

    <div class="mb-4">
      <UFormGroup
        label="New avatar"
        class="w-full"
        name="avatar"
        help="After choosing an image click Save to actually upload the new avatar"
      >
        <UInput type="file" ref="fileInput" />
      </UFormGroup>
    </div>

    <UButton
      type="submit"
      color="black"
      variant="solid"
      label="Save"
      :loading="uploading"
      :disabled="uploading"
      @click="saveAvatar"
    />
  </div>
</template>

<script setup>
/* TODO: Add logic to upload avatar with specific size to avoid the large size images*/
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();
const uploading = ref(false);
const fileInput = ref(null);
const { avatarUrl: url } = useAvatarUrl();
const saveAvatar = async () => {
  const file = fileInput.value.input.files[0];
  if (!file) {
    toastError({
      title: "No file selected",
      description: "Please select a file to upload First",
    });
    return;
  }
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  try {
    uploading.value = true;
    const currentAvatar = user.value.user_metadata?.avatar_url;

    const { error } = await supabase.storage
      .from("avatars")
      .upload(`${user.value.id}/${fileName}`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) throw error;
    toastSuccess({
      title: "Avatar uploaded successfully",
      description: "Your avatar has been uploaded successfully",
    });
    await supabase.auth.updateUser({
      data: {
        avatar_url: `${user.value.id}/${fileName}`,
      },
    });
    if (currentAvatar) {
      const { error } = await supabase.storage
        .from("avatars")
        .remove([`${user.value.id}/${currentAvatar.split("/").pop()}`]);
      if (error) throw error;
    }
    fileInput.value.input.value = null;
  } catch (error) {
    toastError({
      title: "Error uploading avatar",
      description: error.message,
    });
  } finally {
    uploading.value = false;
  }
};
</script>
