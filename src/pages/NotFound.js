import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>404 Page Not Found...</h1>
      <Link to="/">
        <h2
          style={{
            textDecoration: "underline",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          Main menu?
        </h2>
      </Link>
    </div>
  );
}
