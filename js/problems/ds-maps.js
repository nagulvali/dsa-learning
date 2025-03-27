// Maps

const a = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(a);

a.set("d", 4);

console.log(a);

a.delete("c");

const isCExist = a.has("c");
console.log(`is C exist: ${isCExist}`);

console.log(a);

a.clear();

console.log(a);

for (const [key, value] of a) {
  console.log(`${key}: ${value}`);
}
