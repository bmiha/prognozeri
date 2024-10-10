"use client";

import { Form } from "@/components/ui/form";
import { useAppForm } from "@/hooks/useAppForm";
import { z } from "zod";

// email & password
const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormType = z.infer<typeof FormSchema>;

export const LoginForm = () => {
  const form = useAppForm<FormType>({
    schema: FormSchema,
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const { handleSubmit } = form;

  const onSubmit = (data: FormType) => {
    console.log('data', data);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* OUR FORM */}
      </form>
    </Form>
  )
};
