import { PropsWithChildren } from "react";
import { getUser } from "./_actions/getUser";
import { LogOutButton } from "@/components/LogOutButton";

type Props = PropsWithChildren<unknown>;

export default async function Layout(props: Props) {
  await getUser();
  return (
    <div>
      <div className="flex justify-between items-center mb-8 mt-4">
        <h2 className="text-3xl font-black uppercase">Prognozeri</h2>
        <LogOutButton />
      </div>
      {props.children}
      <div className="text-center mt-4">
        <p className="text-xs text-slate-400">Prognozeri 2024</p>
      </div>
    </div>
  );
}
