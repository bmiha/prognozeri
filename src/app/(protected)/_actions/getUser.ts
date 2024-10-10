"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUser() {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}
