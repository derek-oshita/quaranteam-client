import stateCodeToName from "../stateCodeToName";

const CA = "CA",
  NV = "NV",
  California = "California",
  Nevada = "Nevada";

describe("stateCodeToName test", () => {
  it("should return a string representing the full state", () => {
    expect(stateCodeToName(CA)).toMatch(California);
    expect(stateCodeToName(CA)).not.toMatch(Nevada);
    expect(stateCodeToName(NV)).toMatch(Nevada);
    expect(stateCodeToName(NV)).not.toMatch(CA);
  });
});
