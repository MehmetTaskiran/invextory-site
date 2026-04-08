import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company } = await req.json();

  try {
    await resend.emails.send({
      from: "Invextory <onboarding@resend.dev>",
      to: ["mehmet.taskiranoglu@mapindata.com"],
      subject: "Yeni Demo Talebi",
      html: `
        <h2>Yeni Lead</h2>
        <p><b>Ad:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Şirket:</b> ${company}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }
}