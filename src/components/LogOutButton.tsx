"use client";

import { logOut } from "@/app/(protected)/_actions/logOut";
import { Button } from "./ui/button";
import { LiaPowerOffSolid } from "react-icons/lia";

export const LogOutButton = () => {
  return (
    <Button
      className="bg-slate-300 p-0 w-[40px] h-[40px] rounded-full shadow-none"
      type="button"
      onClick={() => logOut()}
    >
      <LiaPowerOffSolid size="20" fill="text-slate-800" />
    </Button>
  );
};
