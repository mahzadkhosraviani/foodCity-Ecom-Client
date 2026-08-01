"use client";
import { useActionState, useEffect } from "react";
import SubmitButton from "../SubmitButton";
import { toast } from "react-toastify";
import { payment } from "@/actions/cart";
import { useRouter } from "next/navigation";

export default function Payment({ cart, coupon, addressId }) {
  const [statePayment, formActionPayment] = useActionState(payment, {
    status: null,
    message: null,
  });
  const router = useRouter();
  useEffect(() => {
    if (!statePayment.message) return;
    toast(statePayment.message, { type: `${statePayment.status}` });
    if (statePayment.status == "success") {
      router.push(statePayment.url);
    }
  }, [statePayment]);

  return (
    <form action={formActionPayment}>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <input type="hidden" name="coupon" value={coupon.code} />
      <input type="hidden" name="address_id" value={addressId} />
      <SubmitButton title="پرداخت" style="user_option btn-auth mt-4" />
    </form>
  );
}
