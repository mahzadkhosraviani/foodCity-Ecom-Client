"use server";

import { PostFetch } from "@/app/utils/fetch";
import { handleError } from "@/app/utils/helper";

async function create(state, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");
  //   if (name === "" || email === "" || subject === "" || text === "") {
  //     return {
  //       status: "error",
  //       message: "its necessery to fill all the inputs",
  //     };
  //   }

  const data = await PostFetch("/contact-us", { name, email, subject, text });
  if (data.status === "success") {
    return {
      status: data.status,
      message: "successfully submited",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
export { create };
