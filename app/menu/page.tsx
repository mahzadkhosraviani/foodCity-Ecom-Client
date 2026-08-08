import { Suspense } from "react";

import { GetFetch } from "../utils/fetch";
import Search from "@/components/menu/Search";
import CategoriesList from "@/components/menu/CategoriesList";
import Sort from "@/components/menu/Sort";
import ProductsList from "@/components/menu/ProductsList";
import Loading from "@/components/menu/Loading";
type Props = {
  searchParams: Promise<Record<string, string>>;
};

export default async function MenuPage({ searchParams }: Props) {
  const params = await searchParams;
  const searchparams = new URLSearchParams(params);

  const categories = await GetFetch("/categories");
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <Search />
            <hr />
            <CategoriesList categories={categories} />
            <hr />
            <Sort />
          </div>
          <div className="col-sm-12 col-lg-9">
            <Suspense key={searchparams.toString()} fallback={<Loading />}>
              <ProductsList params={searchparams.toString()} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
