import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...data } = body;

    if (!type || !data.email) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Lead] tipo=${type}`, JSON.stringify(data, null, 2));
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const LEAD_EMAIL = process.env.LEAD_EMAIL ?? "contato@autigames.com.br";

    if (RESEND_API_KEY) {
      const subjectMap: Record<string, string> = {
        profissional: "Novo lead — Profissional/Clínica",
        empresa: "Novo lead — Empresa/Patrocinador",
        contato: "Nova mensagem de contato",
      };

      const subject = subjectMap[type] ?? "Novo lead — Autigames";

      const emailBody = Object.entries(data)
        .filter(([key]) => key !== "lgpd")
        .map(([key, value]) => `<strong>${key}:</strong> ${Array.isArray(value) ? value.join(", ") : value}`)
        .join("<br/>");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Autigames <noreply@autigames.com.br>",
          to: [LEAD_EMAIL],
          subject,
          html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0099CC">${subject}</h2>
            <p>${emailBody}</p>
          </div>`,
        }),
      });
    }

    // Webhook to CRM (optional)
    const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL;
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...data, timestamp: new Date().toISOString() }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Leads API] Erro:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
