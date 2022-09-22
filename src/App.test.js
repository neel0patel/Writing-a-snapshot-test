import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text Avatar", () => {
  render(<App />);
  const nameElement = screen.getByText(/avatar/i);
  expect(nameElement).toBeInTheDocument();
});
