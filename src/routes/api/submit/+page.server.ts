// POST (get formData from body), and fetch the Web3Forms API to submit the form data

import type { Actions } from "@sveltejs/kit";

import { sendMail } from "../mail";
import { buildNotificationData, broadcastNotification } from "../notify";
import type { Mail } from "$lib/types";

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const mail: Mail = {
      email: form.get("email") as string,
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      message: form.get("message") as string,
    };

    await broadcastNotification(buildNotificationData(mail));

    await sendMail(mail);

    // Return success response
    return {
      success: true,
    };
  },
} satisfies Actions;
