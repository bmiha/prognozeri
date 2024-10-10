"use server";

import { supabaseErrorFormatter } from "@/utils/supabase/errors/supabaseErrorFormatter";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function login(email: string, password: string) {
  const client = createClient();
  const { error } = await client.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw new Error(supabaseErrorFormatter(error));
  }
  redirect("/home");
}
