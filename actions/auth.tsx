"use server";

import { PostFetch } from "@/app/utils/fetch";
import { handleError } from "@/app/utils/helper";
import { error } from "console";
import { cookies } from "next/headers";

async function login(stateLogin, formData) {
  const cellphone = formData.get("cellphone");

  if (cellphone === "") {
    return {
      status: "error",
      message: "شماره موبایل الزامی است.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست.",
    };
  }
  const data = await PostFetch("/auth/login", { cellphone });

  if (data.status === "success") {
    const cookieStore = await cookies();
    cookieStore.set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //1week
    });
    return {
      status: data.status,
      message: "کد ورود با موفقیت برای شما ارسال شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function CheckOtp(stateOtp, formData) {
  const otp = formData.get("otp");

  if (otp === "") {
    return {
      status: "error",
      message: "کد ورود الزامی است.",
    };
  }
  const pattern = /^[0-9]{6}$/;
  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد ورود معتبر نیست.",
    };
  }
  const cookieStore = await cookies();
  const loginToken = cookieStore.get("login_token");
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست،لطفا یکبار دیگر تلاش کنید.",
    };
  }
  const data = await PostFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookieStore.delete("login_token");
    cookieStore.set({
      name: "access_token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //1week
    });
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function me(stateOtp, formData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  if (!token) {
    return {
      error: "not Authorized",
    };
  }

  const data = await PostFetch(
    "/auth/me",
    {},
    { Authorization: `Bearer ${token.value}` },
  );

  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "user forbbiden",
    };
  }
}
async function resendOtp(stateResendOtp, formData) {
  const cookieStore = await cookies();
  const loginToken = cookieStore.get("login_token");
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست،لطفا یکبار دیگر تلاش کنید.",
    };
  }
  const data = await PostFetch("/auth/resend-otp", {
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookieStore.set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, //1week
    });
    return {
      status: data.status,
      message: "کد ورود دوباره با موفقیت برای شما ارسال شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { login, CheckOtp, me, resendOtp };
