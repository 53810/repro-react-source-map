import "./App.scss";
import React from "react";
import type { ReactElement } from "react";
import logo from "./logo.svg";

/**
 * Creates App component.
 *
 * @returns App component.
 */
export function App(): ReactElement {
  return (
    <div className={name}>
      <header className={`${name}-header`}>
        <img src={logo} className={`${name}-logo`} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={`${name}-link`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const name = "App";
