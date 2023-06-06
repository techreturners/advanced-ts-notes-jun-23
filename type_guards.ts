// type guard
//
type Instruction = "L" | "R" | "M";

function performInstruction(userInput: string) {
  // narrow our string that's come from outside the program to the useful string
  // instruction type

  // userInput : LLLRMRMRM
  [...userInput].every((a) => isInstruction(a));

  if (isInstruction(userInput)) {
    userInput;
    // we can now use userInput, secure in the knowledge that it's an Instruction
  } else {
    // UI.ShowUser("Your instruction is not valid!");
    // return someSensibleDefaultObject;
    // throw new Error("Type the right thing please!");
  }
}

function isInstruction(char: string | undefined): char is Instruction {
  return char !== undefined && (char === "L" || char === "M" || char === "R");
}

function isAllInstruction(sequence: string): sequence is Instruction[] {
  // check every character instead of just one
}

// get used to hovering types and seeing what is inferred
// typeof - useful for primitives
// "in" - helps us see if a particular property exists on an object
// type guards - custom functions that narrow types for us

try {
  performInstruction(userInput);
  //
  //
  //
} catch (e) {
  console.error(e);
}
