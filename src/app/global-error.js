"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a"
        }}>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", marginBottom: "1rem" }}>
              Something went wrong!
            </h2>
            <button
              onClick={() => reset()}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "600",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer"
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
