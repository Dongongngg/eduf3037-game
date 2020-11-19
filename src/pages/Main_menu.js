import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../styles/main-menu.scss';

export default function Main_menu() {
  setTimeout(() => {
    document.getElementById('menu-btn').style.display = 'block';
  }, 4000);

  return (
    <main className="main-menu">
      <h1 className="anim-typewriter anim-line menu-title">Are you a creative teacher?</h1>

      <div className="menu-btn" id="menu-btn">
        <button>
          <Link to="/test">Test</Link>
        </button>
      </div>
      {/* <footer className="menu-footer">
        <p>
          &#169; Made by <a href="https://jingfudong.com">Jingfu</a>
        </p>
      </footer> */}
    </main>
  );
}
