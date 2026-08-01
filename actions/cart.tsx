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
      percent: data.data.percentage,
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
async function payment(state, formData) {
  const cart = formData.get("cart");
  const coupon = formData.get("coupon");
  const address_id = formData.get("address_id");

  if (address_id === "") {
    return {
      status: "error",
      message: "انتخاب آدرس الزامی است.",
    };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const data = await PostFetch(
    "/payment/send",
    {
      cart: JSON.parse(cart),
      coupon: coupon,
      address_id,
    },
    { Authorization: `Bearer ${token?.value}` },
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "در حال انتقال به درگاه پرداخت..",
      url: data.data.url,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { checkCoupon, getAddresses, payment };
