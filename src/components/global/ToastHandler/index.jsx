"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

// In the redirectUrls if provided, first one is failure and second one is success.
const ToastHandler = ({ message, isError, redirectUrls = [] }) => {
  const router = useRouter();

  if (message) {
    isError ? toast.error(message) : toast.success(message);

    if (redirectUrls.length > 0) {
      isError
        ? router.push(redirectUrls[0])
        : router.push(redirectUrls[1]);
    }
  }
  return null;
};

export default ToastHandler;
