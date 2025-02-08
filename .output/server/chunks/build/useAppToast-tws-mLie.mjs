import { p as useToast } from './server.mjs';

const useAppToast = () => {
  const toast = useToast();
  return {
    toastSuccess: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-check-circle",
        color: "green",
        type: "success"
      });
    },
    toastError: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-exclamation-circle",
        color: "red",
        type: "error"
      });
    }
  };
};

export { useAppToast as u };
//# sourceMappingURL=useAppToast-tws-mLie.mjs.map
