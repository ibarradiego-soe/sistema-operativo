export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, reportUrl } = req.body;
  if (!email || !reportUrl) {
    return res.status(400).json({ error: 'Missing email or reportUrl' });
  }

  const firstName = name ? name.split(' ')[0] : 'Emprendedor';

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Sistema Operativo</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:rgba(96,165,250,0.8);">
                SISTEMA OPERATIVO DEL EMPRENDEDOR
              </p>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td style="background:#13131f;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:40px;">

              <!-- Greeting -->
              <p style="margin:0 0 8px 0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.03em;">
                Hola, ${firstName}.
              </p>
              <p style="margin:0 0 28px 0;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;">
                Tu análisis psicológico está listo. 22 dimensiones cruzadas, 9 bloques de análisis profundo — todo personalizado para ti.
              </p>

              <!-- Divider -->
              <div style="height:1px;background:rgba(255,255,255,0.07);margin:0 0 28px 0;"></div>

              <!-- What's inside -->
              <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);">
                Tu reporte incluye
              </p>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:20px;vertical-align:top;padding-top:2px;color:#60a5fa;font-size:14px;">✦</td>
                        <td style="font-size:13px;color:rgba(255,255,255,0.65);padding-left:8px;line-height:1.5;">Arquitectura mental y motor interno</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:20px;vertical-align:top;padding-top:2px;color:#60a5fa;font-size:14px;">✦</td>
                        <td style="font-size:13px;color:rgba(255,255,255,0.65);padding-left:8px;line-height:1.5;">Frenos ocultos y patrones de autosabotaje</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:20px;vertical-align:top;padding-top:2px;color:#60a5fa;font-size:14px;">✦</td>
                        <td style="font-size:13px;color:rgba(255,255,255,0.65);padding-left:8px;line-height:1.5;">Estilo de decisión y zona de genio</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 10px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:20px;vertical-align:top;padding-top:2px;color:#60a5fa;font-size:14px;">✦</td>
                        <td style="font-size:13px;color:rgba(255,255,255,0.65);padding-left:8px;line-height:1.5;">Liderazgo, valores y roles complementarios</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:20px;vertical-align:top;padding-top:2px;color:#60a5fa;font-size:14px;">✦</td>
                        <td style="font-size:13px;color:rgba(255,255,255,0.65);padding-left:8px;line-height:1.5;">Tu sistema operativo completo como emprendedor</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:rgba(255,255,255,0.07);margin:28px 0;"></div>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${reportUrl}"
                       style="display:inline-block;background:#ffffff;color:#000000;font-size:15px;font-weight:700;padding:14px 36px;border-radius:10px;text-decoration:none;letter-spacing:-0.02em;">
                      Ver mi reporte completo →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0 0;font-size:12px;color:rgba(255,255,255,0.25);text-align:center;line-height:1.6;">
                Este link es tuyo. Guárdalo para acceder a tu reporte cuando quieras.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 0 0;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2);letter-spacing:.05em;">
                Sistema Operativo del Emprendedor · sistemaoperativo.io
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Sistema Operativo <onboarding@resend.dev>',
        to: [email],
        subject: `${firstName}, tu Sistema Operativo está aquí`,
        html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(response.status).json({ error: data.message || 'Email error' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Send email error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
