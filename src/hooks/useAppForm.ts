import { FieldValues, UseFormProps, useForm } from "react-hook-form";
import { zodResolver, Resolver } from "@hookform/resolvers/zod";

type AppFormParams<TFieldValues extends FieldValues> = {
  schema: Parameters<Resolver>[0];
} & Omit<UseFormProps<TFieldValues>, "resolver">;

export function useAppForm<TFieldValues extends FieldValues = FieldValues>({
  schema,
  ...formProps
}: AppFormParams<TFieldValues>) {
  return useForm<TFieldValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    criteriaMode: "all",
    ...formProps,
  });
}
