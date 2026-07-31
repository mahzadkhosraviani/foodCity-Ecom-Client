"use server";
import { PostFetch } from "@/app/utils/fetch";
import { handleError } from "@/app/utils/helper";

import { cookies } from "next/headers";

async function checkCoupon(state, formData) {
  const code = formData.get("code");

  if (code === "") {
    return {
      status: "error",
      message: "کد کوپن الزامی است.",
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

export { checkCoupon };
