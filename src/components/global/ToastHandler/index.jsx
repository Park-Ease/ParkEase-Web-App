"use client";

import { toast } from "sonner";

const ToastHandler = ({ message, isError }) => {

  if (message) {
    isError ? toast.error(message) : toast.success(message);
  }
  return null;
};

export default ToastHandler;

// This ToastHandler is useful to create toasts on pages that are server-rendered.
// On client-rendered pages or components, we can directly use "toast" from sonner.