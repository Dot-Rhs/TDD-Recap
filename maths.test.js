const { sub, sum } = require("./maths");

test(" Sum function test", () => {
  const actual = sum(10, 4);
  const expected = 14;
  expect(actual).toBe(expected);
});

test(" Subtraction function test", () => {
  const actual = sub(10, 4);
  const expected = 6;
  expect(actual).toBe(expected);
});

test(" Should not be a string", () => {
  const actual = "";
  const expected = 6;
  expect(actual).toBe(expected);
});

try {
  subTest();
} catch (err) {
  console.error(err);
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw Error(`${actual} was not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw Error(`${actual} was not greater than ${expected}`);
      }
    }
  };
}

function test(title, cb) {
  try {
    cb();
    console.log(`${title} ✅`);
  } catch (err) {
    console.log(`${title} 🛑`);
    console.error(err);
  }
}
