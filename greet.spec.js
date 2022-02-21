import { greet } from "./greet.js";
import { slugify } from "./greet.js";

describe("greet", () => {
  it("returns 'Hello, Coach!'", () => {
    expect(greet("Lara")).toBe("Hello, Coach!");
  });
  it("returns 'Hello, Coach!'", () => {
    expect(greet("CJ")).toBe("Hello, Coach!");
  });
  it("returns 'Hello, Coach!'", () => {
    expect(greet("Jan")).toBe("Hello, Coach!");
  });
  it("returns 'Hello, Aramo!'", () => {
    expect(greet("Aramo")).toBe("Hello, Aramo!");
  });
  it("returns 'Hello, stranger!'", () => {
    expect(greet()).toBe("Hello, stranger!");
  });
});

describe("slugify", () => {
  it("returns 'hello world'", () => {
    expect(slugify("HELLO WorlD")).toBe("hello world");
  });
  it("returns 'hello-world'", () => {
    expect(slugify("HELLO WorlD")).toBe("hello-world");
  });
});

// If the name argument equals one of your coaches, return "Hello Coach!".
// If there is a name argument, return "Hello <name>!".
// If there is no argument given, return "Hello stranger!"

// Add a tests and implementation for a new function slugify, that lowercases strings, replaces spaces with "-" and removes umlauts:

// 'I love JavaScript' becomes 'i-love-javascript'
// 'Ich übe barfuß das Programmieren' becomes 'ich-uebe-barfuss-das-programmieren'
