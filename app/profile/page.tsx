import { cookies } from "next/headers";
import { GetFetch } from "../utils/fetch";
import EditForm from "@/components/profile/info/EditForm";

export default async function profilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const user = await GetFetch("/profile/info", {
    Authorization: `Bearer ${token?.value}`,
  });

  return (
    <div className="vh-70">
      <EditForm user={user} />
    </div>
  );
}
