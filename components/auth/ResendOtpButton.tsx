"use client";
import { resendOtp } from "@/actions/auth";

import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";

export default function ResendButton() {
  const [stateResendOtp, formActionResendOtp] = useActionState(resendOtp, {
    status: null,
    message: null,
  });
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(15);
  useEffect(() => {
    toast(stateResendOtp.message, { type: `${stateResendOtp.status}` });
    if (stateResendOtp.status === "success") {
      setMinute(0);
      setSecond(15);
    }
  }, [stateResendOtp]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      if (second === 0) {
        if (minute === 0) {
          clearInterval(interval);
        } else {
          setSecond(59);
          setMinute(minute - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [second]);
  return (
    <div className="resend-otp">
      {second > 0 || minute > 0 ? (
        <div className="">
          {minute < 10 ? `0${minute}` : minute}:
          {second < 10 ? `0${second}` : second}
        </div>
      ) : (
        <form action={formActionResendOtp}>
      
          <SubmitButton title="ارسال دوباره" style="btn btn-dark" />
        </form>
      )}
    </div>
  );
}
