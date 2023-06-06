//
let someString = "Original";
someString = "Reassigned";

const anotherString = "Banana";

function print(text: string, alignment: "left" | "right" | "centre") {
  console.log(alignment);
}

// .sort() -1 0 1
[].sort(compare);
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
