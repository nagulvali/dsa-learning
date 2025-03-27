// Sets

const a = new Set([1, 2, 3, 4, 5]);
console.log(a);
a.add(7);
a.add(8);
a.add(9);
a.add(10);
console.log(a);
a.delete(10);
a.delete(9);
a.delete(8);
a.delete(7);
console.log(a);

console.log(a.entries());
