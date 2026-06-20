import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Akshay V T - Freelance Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#06070A",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(111,168,255,0.15), transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#6FA8FF",
                boxShadow: "0 0 12px #6FA8FF",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "16px",
                fontFamily: "system-ui",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Freelance Web Developer
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 400,
              color: "white",
              margin: "0 0 16px 0",
              fontFamily: "Georgia, serif",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Akshay V T
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              fontFamily: "system-ui",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            React & Next.js Expert | 6+ Years | Dubai, Kerala, Canada & Worldwide
          </p>

          {/* Services */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            {["Web Development", "E-Commerce", "SEO", "Consulting"].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "100px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    fontFamily: "system-ui",
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>

          {/* URL */}
          <p
            style={{
              fontSize: "18px",
              color: "#6FA8FF",
              marginTop: "48px",
              fontFamily: "system-ui",
            }}
          >
            www.akshayvt.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
