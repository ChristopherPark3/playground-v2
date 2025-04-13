import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET works" }, { status: 200 });
}

export async function POST(req: Request) {
  console.log("POST request received...");
  const wh_secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!wh_secret) {
    throw new Error(
      "No webhook secret found in .env. Make sure to get one from your Clerk dashboard after creating a webhook. If you already have one, make sure the .env file is updated accordingly"
    );
  }
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json("No svix headers found.", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(wh_secret);

  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error: unknown) {
    console.error("Error veryifying webhook: ", error);
    return NextResponse.json("An error occurred...", { status: 400 });
  }

  const { id } = event.data;

  console.log("ID: ", id);

  if (!id) return NextResponse.json("No ID found in webhook.", { status: 400 });

  const eventType = event.type;
  console.log("EVENT TYPE: ", eventType);
  if (eventType === "user.created") {
    console.log("user create webhook received");
    try {
      const { email_addresses, id, first_name, last_name, username } =
        JSON.parse(body).data;

      const email = email_addresses[0].email_address;

      console.log("CLERK WEBHOOK ", email, id, first_name, last_name, username);

      // Check if user already exists
      return NextResponse.json("New user created", { status: 200 });
    } catch (error: unknown) {
      console.error("Error creating user: ", error);
      return NextResponse.json("An error occurred...", { status: 400 });
    }
  }

  return NextResponse.json("Webhook received.", { status: 200 });
}
