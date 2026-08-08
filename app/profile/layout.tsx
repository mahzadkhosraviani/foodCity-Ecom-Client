"use client";

import { logout } from "@/actions/auth";
import Authcontext from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";

export default function Layout({ children }: { children: ReactNode }) {
  const auth = useContext(Authcontext);
  const dispatch = useDispatch();
  const router = useRouter();

  if (!auth) return null;

  const { logoutContext } = auth;

  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/profile">اطلاعات کاربر</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/addresses">آدرس ها</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/orders">سفارشات</Link>
              </li>
              <li className="list-group-item">
                <Link href="/profile/transactions">تراکنش ها</Link>
              </li>
              <li className="list-group-item">
                <button
                  onClick={async () => {
                    await logout();
                    dispatch(clearCart());
                    localStorage.clear();
                    logoutContext();
                    router.push("/");
                  }}
                >
                  خروج
                </button>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
