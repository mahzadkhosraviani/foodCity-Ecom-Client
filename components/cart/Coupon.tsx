"use client";
import { checkCoupon } from "@/actions/cart";
import { editInfo } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
export default function Coupon() {
  const [state, formAction] = useActionState(checkCoupon, {
    status: null,
    message: null,
  });

  useEffect(() => {
    if (!state.message) return;
    toast(state.message, { type: `${state.status}` });
  }, [state]);
  return (
    <form action={formAction} className="col-12 col-md-6">
      <div className="input-group mb-3">
        <input
          name="code"
          type="text"
          className="form-control"
          placeholder="کد تخفیف"
        />
        <SubmitButton title="اعمال کد تخفیف" style="input-group-text" />
      </div>
    </form>
  );
}
