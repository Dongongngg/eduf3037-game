import React from "react";
import { Link } from "react-router-dom";
//styles
import "../styles/main-menu.css";

export default function Main_menu() {
  setTimeout(() => {
    document.getElementById("menu-btn").style.display = "block";
  }, 6000);

  return (
    <div className="main-menu">
      <header className="menu-title">
        <h1 className="anim-typewriter anim-line">
          Are you a creative teacher?
        </h1>
      </header>
      <main className="menu-btn" id="menu-btn">
        <button>
          <Link to="/test">Test</Link>
        </button>
      </main>
      <footer className="menu-footer">
        <p>
          &#169; Made by <a href="https://jingfudong.com">Jingfu</a>
        </p>
      </footer>
    </div>
  );
}
