import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { PreLoader } from "shared/ui";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<PreLoader />}>
      {component()}
    </Suspense>
  </BrowserRouter>
);