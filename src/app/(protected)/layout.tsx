import { PropsWithChildren } from "react";
import { getUser } from "./_actions/getUser";
import { LogOutButton } from "@/components/LogOutButton";

type Props = PropsWithChildren<unknown>;

export default async function Layout(props: Props) {
  await getUser();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2>Prognozeri</h2>
        <LogOutButton />
      </div>
      {props.children}
    </div>
  );
}
