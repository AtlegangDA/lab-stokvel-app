import { PropsWithChildren } from "react";

export default function PageHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="self-center pb-8 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600">{children}</h1>
}
