import { isAuthError, isAuthApiError } from "@supabase/supabase-js";

import { authErrorMessages_HR } from "./authErrors";
import { genericerrorMessages_HR } from "./genericErrors";

export function supabaseErrorFormatter(error: any): string {
  let message = "Dogodila se greška";
  if (isAuthError(error) || isAuthApiError(error)) {
    message =
      authErrorMessages_HR[error.code as keyof typeof authErrorMessages_HR];
  } else if (isSupabaseError(error)) {
    const genericError =
      genericerrorMessages_HR[
        error.code as keyof typeof genericerrorMessages_HR
      ];
    if (genericError) {
      message = genericError.description;
    }
  }

  return message;
}

export function isSupabaseError(error: any): error is SupabaseError {
  return (
    typeof error === "object" &&
    error !== null &&
    error.code !== undefined &&
    error.message !== undefined
  );
}

export type SupabaseError = {
  code: string;
  message: string;
};
