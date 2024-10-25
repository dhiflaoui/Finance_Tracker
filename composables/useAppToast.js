export const useAppToast = () => {
  const { toastSuccess, toastError } = useAppToast();

  return {
    toastSuccess: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-check-circle",
        color: "green",
        type: "success",
      });
    },

    toastError: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
        type: "error",
      });
    },
  };
};
