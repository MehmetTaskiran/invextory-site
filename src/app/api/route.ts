import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Gelen veriyi güvenli bir şekilde al
    const body = await req.json();
    const { name, email, phone, company, sector, assetCount, message } = body;

    // Mail gönderim işlemi
    const { data, error } = await resend.emails.send({
      from: "Invextory <onboarding@resend.dev>",
      to: ["mehmet.taskiranoglu@gmail.com"],
      subject: `🚀 Yeni Demo Talebi: ${company}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.5; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #06b6d4;">Yeni Lead Bildirimi</h2>
          <hr />
          <p><b>Ad Soyad:</b> ${name}</p>
          <p><b>E-posta:</b> ${email}</p>
          <p><b>Telefon:</b> ${phone}</p>
          <p><b>Şirket:</b> ${company}</p>
          <p><b>Sektör:</b> ${sector}</p>
          <p><b>Demirbaş Adedi:</b> ${assetCount}</p>
          <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-left:4px solid #06b6d4;">
            <b>Müşteri Mesajı:</b><br/>
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error Detail:", error);
      return NextResponse.json({ error: error.message, ok: false }, { status: 400 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Critical API Error:", err);
    return NextResponse.json({ error: "Sunucu tarafında bir hata oluştu.", ok: false }, { status: 500 });
  }
}