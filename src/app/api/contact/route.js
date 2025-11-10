import { NextResponse } from "next/server";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request) {
	try {
		const data = await request.json();
		const { firstName, lastName, email, phone, asin, budget, message } = data;

		if (!firstName || !lastName || !email || !phone) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		if (!CONTACT_TO_EMAIL || !RESEND_API_KEY) {
			console.error("Missing CONTACT_TO_EMAIL or RESEND_API_KEY env vars");
			return NextResponse.json({ error: "Service not configured" }, { status: 500 });
		}

		const payload = {
			from: "Amazon Skipper <hello@amazonskipper.com>",
			to: CONTACT_TO_EMAIL,
			reply_to: email,
			subject: `New contact request from ${firstName} ${lastName}`,
			html: `
        <h2>New inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>ASIN/URL:</strong> ${asin || "—"}</p>
        <p><strong>Budget:</strong> ${budget || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "—").replace(/\n/g, "<br/>")}</p>
      `,
		};

		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${RESEND_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			const error = await response.text();
			console.error("Resend error:", error);
			return NextResponse.json({ error: "Email send failed" }, { status: 502 });
		}

		return NextResponse.json({ ok: true }, { status: 200 });
	} catch (error) {
		console.error("Contact API error:", error);
		return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
	}
}

