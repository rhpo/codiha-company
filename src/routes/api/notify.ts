import { BRAND_NAME } from "$lib/data/brand";
import type { Mail } from "$lib/types";
import { error } from "@sveltejs/kit";

const users = [
  // "jshwjpaecc1sd8a", // Moh
  "2vrxe04p8d9fsob", // Ramy
]; // Alertzy api

interface NotificationData {
  title: string;
  message: string;
}

export function buildNotificationData(mail: Mail) {
  let title = `${BRAND_NAME} | ${mail.name}`;
  let message = `Email: ${mail.email}\nTéléphone: ${mail.phone}\nMessage: ${mail.message}`;

  return { title, message };
}
export async function notify(
  { title, message }: NotificationData,
  accountKey: string
) {
  // Send notification via Alertzy API
  const response = await fetch("https://alertzy.app/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accountKey,
      title,
      message,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Failed to send notification:", errorData);
    throw error(500, "Failed to send notification");
  }
}

export async function broadcastNotification({
  title,
  message,
}: NotificationData) {
  users.forEach(async (userKey) => {
    // Send notification to each user
    await notify({ title, message }, userKey);
  });
}
