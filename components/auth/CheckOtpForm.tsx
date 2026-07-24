"use client";

import { CheckOtp } from "@/actions/auth";

import { useActionState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";
import Authcontext from "@/context/AuthContext";
import ResendButton from "./ResendOtpButton";
import { useRouter } from "next/navigation";

export default function CheckOtpForm() {
  const { loginContext } = useContext(Authcontext);
  const router = useRouter();

  const [stateOtp, formActionOtp] = useActionState(CheckOtp, {
    status: null,
    message: null,
  });
  useEffect(() => {
    toast(stateOtp.message, { type: `${stateOtp.status}` });
    if (stateOtp.status === "success") {
      loginContext(stateOtp.user);
      router.push("/");
    }
  }, [stateOtp]);
  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionOtp}>
          <div className="mb-3">
            <label className="form-label">کد ورود</label>
            <input name="otp" type="text" className="form-control" />
          </div>
          <SubmitButton title=" تایید" style="btn btn-primary btn-auth" />
        </form>
        <ResendButton />
      </div>
    </div>
  );
}
