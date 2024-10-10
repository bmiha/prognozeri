"use client";

import { SubmitButton } from "@/components/SubmitButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppForm } from "@/hooks/useAppForm";
import { z } from "zod";
import { login } from "./_actions/login";

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
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: FormType) => {
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton>Login</SubmitButton>
      </form>
    </Form>
  );
};
