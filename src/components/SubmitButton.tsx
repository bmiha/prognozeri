"use client";

import { PropsWithChildren } from "react";
import { useFormState } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import clsx from "clsx";

type Props = {
  form?: string;
  disabled?: boolean;
  className?: string;
};

export const SubmitButton: React.FC<PropsWithChildren<Props>> = ({
  form,
  className,
  disabled = false,
  children,
}) => {
  const { isSubmitting } = useFormState();

  return (
    <Button
      className={clsx("w-full", className)}
      form={form}
      disabled={disabled || isSubmitting}
    >
      <div className="relative">
        {isSubmitting && (
          <div className="absolute -left-6 inset-y-0 flex items-center">
            <Loader2 className="size-4 animate-spin" />
          </div>
        )}
        {children}
      </div>
    </Button>
  );
};
