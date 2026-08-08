import Loading from "@/components/profile/orders/loading";
import Table from "@/components/profile/orders/Table";
import { Suspense } from "react";

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const urlParams = new URLSearchParams(params);

  return (
    <>
      <Suspense key={urlParams.toString()} fallback={<Loading />}>
        <Table params={urlParams.toString()} />;
      </Suspense>
    </>
  );
}
