"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logOut() {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (user) {
    await client.auth.signOut();
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
