import ProductsTabs from "@/components/products/ProductsTabs";


import { GetFetch } from "./utils/fetch";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/contact/Contact";

export default async function Home() {
  const productTabs = await GetFetch("/products/products-tabs");

  return (
    <>
      <Features />
      <ProductsTabs
        tabList={productTabs.tabList}
        tabPanel={productTabs.tabPanel}
      />
      <About />
      <Contact />
    </>
  );
}
