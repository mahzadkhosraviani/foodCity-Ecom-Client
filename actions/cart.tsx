"use server";
import { GetFetch, PostFetch } from "@/app/utils/fetch";
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
    "/check-coupon",
    {
      code,
    },
    { Authorization: `Bearer ${token?.value}` },
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "کد تخفیف شما اعمال شد.",
      percentage: data.data.percentage,
      code,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function getAddresses() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const data = await GetFetch("/user/addresses", {
    Authorization: `Bearer ${token?.value}`,
  });
  return data;
}
export { checkCoupon,getAddresses };
