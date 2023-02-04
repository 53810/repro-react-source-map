import { render, screen as scr } from "@testing-library/react";
import { App } from "./App";
import React from "react";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = scr.getByText(/learn react/iu);

  expect(linkElement).toBeInTheDocument();
});
