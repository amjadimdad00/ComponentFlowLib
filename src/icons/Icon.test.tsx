import * as Icons from "./index";
import { render } from "@testing-library/react";

describe("Icons", () => {
  it("renders without crashing", () => {
    Object.values(Icons).forEach((Icon) => {
      render(<Icon />);
    });
  });
});
