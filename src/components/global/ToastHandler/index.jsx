"use client";

import { toast } from "sonner";

const ToastHandler = ({ message, isError }) => {
  if (message) {
    isError ? toast.error(message) : toast.success(message);
  }
  return null;
};

export default ToastHandler;
