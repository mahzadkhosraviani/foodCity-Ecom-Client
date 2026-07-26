import Table from "@/components/profile/orders/Table";

export default async function OrdersPage({searchParams}) {
   const params = await searchParams;
  const urlParams = new URLSearchParams(params);

  return <Table params={urlParams.toString()} />;
}
