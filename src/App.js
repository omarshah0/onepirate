import React from "react";
import withRoot from "./Custom/modules/withRoot";
import AppAppBar from "./Custom/modules/views/AppAppBar";
import ProductHero from "./Custom/modules/views/ProductHero";
import ProductValues from "./Custom/modules/views/ProductValues";
import ProductCategories from "./Custom/modules/views/ProductCategories";
import ProductHowItWorks from "./Custom/modules/views/ProductHowItWorks";
import ProductCTA from "./Custom/modules/views/ProductCTA";
import ProductSmokingHero from "./Custom/modules/views/ProductSmokingHero";
import AppFooter from "./Custom/modules/views/AppFooter";

function App() {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(App);
