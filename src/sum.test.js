const sum = require("./sum");

// ACTUAL TEST FOR SUM

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// DOCUMENTATION EXAMPLES

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).not.toBe(5);
});

// exact
test("60 + 9 is 69", () => {
  expect(60 + 9).toBe(69);
});

// exact value of an object
test("Object assignment", () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// truthiness
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("undefined", () => {
  const z = undefined;
  expect(z).not.toBeNull();
  expect(z).not.toBeDefined();
  expect(z).toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// numbers
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBe(4);
  expect(value).not.toBe(5);
  expect(value).toBeGreaterThan(2);
  expect(value).toBeLessThan(7);
  expect(value).toBeLessThanOrEqual(4.5);
});

// decimals / floats
test("adding floats", () => {
  const value = 0.4 + 0.2;
  // won't work due to rounding error:
  // expect(value).toBe(0.6);
  // will work, doe:
  expect(value).toBeCloseTo(0.6);
});

// strings can be tested against regex
test("Derek Oshita", () => {
  expect("Oshita").toMatch(/shit/);
});

// arrays and iterables
const todos = [
  "get a job",
  "walk mila",
  "go to the gym",
  "code",
  "ds / algorithms",
];

test("test items in todos", () => {
  expect(todos).toContain("get a job");
  expect(new Set(todos)).toContain("code");
});

// exceptions
const exceptionMethod = () => {
  throw new Error("hull breach imminent");
};

test("test exceptionMethod", () => {
  expect(() => exceptionMethod()).toThrow();
  expect(() => exceptionMethod()).toThrow(Error);
  expect(() => exceptionMethod()).toThrow("hull breach imminent");
  expect(() => exceptionMethod()).toThrow(/breach/);
});

// https://jestjs.io/docs/asynchronous
