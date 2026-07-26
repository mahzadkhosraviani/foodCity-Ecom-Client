import { GetFetch } from "@/app/utils/fetch";
import CreateForm from "@/components/profile/info/addresses/CreateForm";
import EditForm from "@/components/profile/info/addresses/EditForm";
import { cookies } from "next/headers";

export default async function AddressesPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const data = await GetFetch("/profile/addresses", {
    Authorization: `Bearer ${token?.value}`,
  });
  return (
    <>
      <CreateForm data={data} />
      <hr />
      {data.addresses.map((address) => (
        <EditForm key={address.id} address={address} data={data} />
      ))}
    </>
  );
}
