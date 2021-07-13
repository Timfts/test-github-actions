import SecondModule from "./index";

describe("some test", () => {
  test("test work", () => {
    expect(SecondModule()).toBeTruthy();
  });
});
