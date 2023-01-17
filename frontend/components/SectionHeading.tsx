import { PropsWithChildren } from "react";

export default function SectionHeading({ children }: PropsWithChildren<{}>) {
  return <h3 className="self-center my-2 text-2xl font-bold text-orange-800">{children}</h3>
}
