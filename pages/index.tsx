import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";

import { ScreenVariantProvider } from "../components/plasmic/next_js_supabase_plasmic_chat/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/next_js_supabase_plasmic_chat/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  return (
    <PageParamsProvider__
      route={useRouter()?.pathname}
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </PageParamsProvider__>
  );
}

export default Homepage;
