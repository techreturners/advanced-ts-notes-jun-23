//
export const TEXT_COLOURS = [
  "text-normal",
  "text-white",
  "text-dark",
  "text-danger",
  "text-success",
  "text-warning",
  "text-extreme",
] as const;

// TEXT_COLOURS.push('sidohfiowrhgioa'); NO LONGER ALLOWED THANKS TO as const
type TextColour = (typeof TEXT_COLOURS)[number];

function print(text: string, colour: TextColour) {
  console.log(colour);
  switch (colour) {
    case "text-dark":
      console.log(colour);
      break;
  }
}

const someObject = { thing: "1", otherThing: "2" };
type A = (typeof someObject)[string];
