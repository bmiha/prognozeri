import { PropsWithChildren } from "react";

type Props = PropsWithChildren<unknown>;

export default function Layout(props: Props) {
  return <div>Layout {props.children}</div>;
}
