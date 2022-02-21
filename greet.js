export function greet(name) {
  if (name === "Lara" || name === "CJ" || name === "Jan") {
    return `Hello, Coach!`;
  } else if (name === undefined) {
    return "Hello, stranger!";
  } else {
    return `Hello, ${name}!`;
  }
}

export function slugify(text) {
  let string = text.toLowerCase();
  string.replaceAll(" ", "-");
  return string;
}
