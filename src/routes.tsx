import { createBrowserRouter } from "react-router-dom";
import { paths } from "src/utils/common.ts";
import PageTitle from "src/components/PageTitle.tsx";
import Layout from "src/features/Layout.tsx";
import Javascript from "src/features/Javascript/Javascript.tsx";
import TypeScript from "src/features/Typescript/TypeScript.tsx";
import ReactFeature from "src/features/ReactFeature/ReactFeature.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PageTitle title={paths.javascript}>
            <Javascript />
          </PageTitle>
        ),
      },
      {
        path: paths.typescript,
        element: (
          <PageTitle title={paths.typescript}>
            <TypeScript />
          </PageTitle>
        ),
      },
      {
        path: paths.react,
        element: (
          <PageTitle title={paths.react}>
            <ReactFeature />
          </PageTitle>
        ),
      },
    ],
  },
]);
