"use client";
import { deleteAddress } from "@/actions/profile";
import SubmitButton from "@/components/SubmitButton";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function DeleteForm({ addressId }) {
  const [stateDelete, formActionDelete] = useActionState(deleteAddress, {
    status: null,
    message: null,
  });

  useEffect(() => {
    if (!stateDelete.message) return;
    toast(stateDelete.message, { type: `${stateDelete.status}` });
  }, [stateDelete]);
  return (
    <div className="form-delete-address">
      <form action={formActionDelete}>
        <input type="hidden" name="address_id" value={addressId} />
        <SubmitButton title="حذف" style="btn btn-dark" />
      </form>
    </div>
  );
}
