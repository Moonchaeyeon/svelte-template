/* eslint-disable */
import { cleanup, fireEvent, render, screen } from "@testing-library/svelte";
import Counter from "../routes/Counter.svelte";

describe("Counter.svelte", () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup());

  it("mounts", () => {
    const { container } = render(Counter);
    expect(container).toBeTruthy();
  });

  it("increase count", async () => {
    render(Counter);
    const [decreaseBtn, increaseBtn] = screen.getAllByRole("button");
    const div = screen.queryByTestId("count");
    await fireEvent.click(increaseBtn);

    setTimeout(() => {
      expect(div?.textContent).toBe("1");
    }, 1000);
  });

  it("decrease count", async () => {
    render(Counter);
    const [decreaseBtn, increaseBtn] = screen.getAllByRole("button");
    const div = screen.queryByTestId("count");
    await fireEvent.click(decreaseBtn);

    setTimeout(() => {
      expect(div?.textContent).toBe("-1");
    }, 1000);
  });
});
