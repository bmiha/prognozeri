"use client";

import { logOut } from "@/app/(protected)/_actions/logOut";
import { Button } from "./ui/button";

export const LogOutButton = () => {
  return (
    <Button type="button" onClick={() => logOut()}>
      Log Out
    </Button>
  );
};
