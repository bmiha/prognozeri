import { PropsWithChildren } from "react";
import { getUser } from "./_actions/getUser";
import { LogOutButton } from "@/components/LogOutButton";

type Props = PropsWithChildren<unknown>;

export default async function Layout(props: Props) {
  await getUser();
  return (
    <div>
      Layout {props.children}
      <LogOutButton />
    </div>
  );
}
