//
interface Dragon {
  breatheFire(): void;
  hunt(): void;
  fly(): void;
}

interface Shark {
  swim(): void;
  hunt(): void;
}

declare function getCreature(): Dragon | Shark | null | undefined;

const creature = getCreature();

if (!creature) throw new Error("No creature!");

creature.hunt();

// type narrowing with typeof won't help us here
// the 'in' operator

if ("swim" in creature) {
  creature.swim();
} else {
  creature.breatheFire();
  creature.fly();
}
