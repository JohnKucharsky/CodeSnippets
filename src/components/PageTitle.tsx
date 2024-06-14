import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { paths, titles } from "src/utils/common.ts";

export default function PageTitle({
  title,
  children,
}: PropsWithChildren<{ title: paths }>) {
  return (
    <>
      <Helmet>
        <title>{titles[title]}</title>
      </Helmet>
      {children}
    </>
  );
}
