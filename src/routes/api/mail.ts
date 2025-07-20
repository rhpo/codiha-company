import type { Mail } from "$lib/types";
import { error } from "@sveltejs/kit";

// Replace with your actual Web3Forms access key
const WEB3FORMS_ACCESS_KEY = "20d50002-3eec-46ff-bb9a-3c7bbb3a8ff9";

function formFromOrder(order: Mail) {
  let formData = new FormData();

  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  formData.append("email", order.email);
  formData.append("name", order.name);
  formData.append("phone", order.phone);
  formData.append("message", order.message);

  return formData;
}

export async function sendMail(order: Mail) {
  const formData = formFromOrder(order);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw error(500, "Failed to send email");
  }
}
