"use server";
import { PostFetch } from "@/app/utils/fetch";
import { handleError } from "@/app/utils/helper";
import { cookies } from "next/headers";

async function editInfo(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام و نام‌ خانوادگی الزامی است.",
    };
  }
  if (email === "") {
    return {
      status: "error",
      message: "فیلد ایمیل الزامی است.",
    };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const data = await PostFetch(
    "/profile/info/edit",
    {
      name,
      email,
    },
    { Authorization: `Bearer ${token?.value}` },
  );
  console.log(data);
  if (data.status === "success") {
    return {
      status: data.status,
      message: "ویرایش اطلاعات با موفقیت انجام شد.",
       user: data.data,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { editInfo };
