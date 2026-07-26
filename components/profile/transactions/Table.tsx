import { GetFetch } from "@/app/utils/fetch";
import { numberFormat } from "@/app/utils/helper";
import { cookies } from "next/headers";

import Paginate from "./Paginate";

export default async function Table({ params }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const data = await GetFetch(`/profile/transactions?${params}`, {
    Authorization: `Bearer ${token?.value}`,
  });
  console.log(data);
  return (
    <>
      {" "}
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>شماره پیگیری</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>{transaction.order_id}</th>
                <td>{numberFormat(transaction.amount)}تومان</td>
                <td>
                  <span
                    className={
                      transaction.status == "موفق"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {transaction.status}{" "}
                  </span>
                </td>
                <td>{transaction.trans_id}</td>
                <td> {transaction.created_at} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginate links={data.meta.links} />
    </>
  );
}
