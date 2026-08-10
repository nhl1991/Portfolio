import { ImageResponse } from "next/og";

export const alt = "盧亨来(노형래) | フロントエンドエンジニア Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e1b4b",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            backgroundImage:
              "linear-gradient(90deg, rgba(129,140,248,1) 0%, rgba(196,141,230,1) 45%, rgba(74,222,128,1) 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          盧亨来 / 노형래
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            color: "#e0e7ff",
            marginTop: 24,
          }}
        >
          フロントエンドエンジニア Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a5b4fc",
            marginTop: 48,
            letterSpacing: 2,
          }}
        >
          Next.js · React · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
