import type { Contents } from "../components/Card";

// Generic Contents shape for catalog entries; headerBlock can hold meta like spell components.

export const defaultBackstories: Contents[] = [
  {
    title: "Noble",
    description: "You come from a wealthy family with a noble title.",
  },
  {
    title: "Soldier",
    description: "You have served in a military organization.",
  },
];

export const defaultClasses: Contents[] = [
  {
    title: "Barbarian",
    description: "The man, the myth, the rage.",
  },
  {
    title: "Bard",
    description: "The musical spellcaster.",
  },
];

export const defaultItems: Contents[] = [
  {
    title: "Chain Mail",
    headerBlock:
      "Heavy armor\n" +
      "Cost: 75 gp\n" +
      "Armor Class: 16\n" +
      "Strength Requirement: 13\n" +
      "Stealth: Disadvantage\n" +
      "Weight: 55 lb.",
    description:
      "Chain mail is a suit of interlocking metal rings that provides stout protection.  It grants a fixed AC of 16 but requires a Strength score of 13 to wear effectively and imposes disadvantage on Stealth checks.  The armor weighs 55 pounds and costs 75 gp.",
    icon: "armor",
  },
  {
    title: "Dagger",
    headerBlock:
      "Simple melee weapon\n" +
      "Cost: 2 gp\n" +
      "Damage: 1d4 piercing\n" +
      "Weight: 1 lb.\n" +
      "Properties: Finesse, light, thrown (range 20/60)",
    description:
      "Daggers are small, easily concealed blades that adventurers use for stabbing or throwing.  They deal 1d4 piercing damage and benefit from the finesse property, allowing the wielder to use Dexterity instead of Strength.  " +
      "A dagger weighs only 1 pound, costs 2 gp and is light and throwable, with a normal range of 20 feet and a long range of 60 feet.",
    icon: "weapon",
  },
  {
    title: "Explorer’s Pack",
    headerBlock: "Equipment pack\n" + "Cost: 10 gp\n" + "Weight: 59 lb.",
    description:
      "The explorer’s pack bundles together essentials for long expeditions.  It includes a backpack, a bedroll, a mess kit, a tinderbox, ten torches, ten days of rations, a waterskin and a 50‑foot coil of hempen rope strapped to the side.  The entire pack weighs 59 pounds and costs 10 gp.",
    icon: "pack",
  },
  {
    title: "Greatsword",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 50 gp\n" +
      "Damage: 2d6 slashing\n" +
      "Weight: 6 lb.\n" +
      "Properties: Heavy, two‑handed",
    description:
      "Greatswords are massive blades that require both hands to swing.  They inflict 2d6 slashing damage and count as heavy weapons, which means Small creatures have disadvantage on attack rolls with them.  The sword costs 50 gp, weighs 6 pounds and must be wielded with two hands.",
    icon: "weapon",
  },
  {
    title: "Hooded Lantern",
    headerBlock: "Adventuring gear\n" + "Cost: 5 gp\n" + "Weight: 2 lb.",
    description:
      "This lantern has a shuttered hood that lets you control the amount of light it sheds.  When uncovered, it casts bright light in a 30‑foot radius and dim light for an additional 30 feet.  A hooded lantern burns for 6 hours on a single pint of oil, and you can lower the hood to reduce its light to dim light in a 5‑foot radius.  The lantern costs 5 gp and weighs 2 pounds.",
    icon: "gear",
  },
  {
    title: "Leather Armor",
    headerBlock:
      "Light armor\n" +
      "Cost: 10 gp\n" +
      "Armor Class: 11 + Dexterity modifier\n" +
      "Weight: 10 lb.",
    description:
      "Leather armor consists of cured hide and offers modest protection without sacrificing agility.  As light armor it sets a base AC of 11 plus the wearer’s Dexterity modifier and weighs 10 pounds.  It costs 10 gp and doesn’t impose disadvantage on Dexterity (Stealth) checks.",
    icon: "armor",
  },
  {
    title: "Light Crossbow",
    headerBlock:
      "Simple ranged weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d8 piercing\n" +
      "Weight: 5 lb.\n" +
      "Properties: Ammunition (range 80/320), loading, two‑handed",
    description:
      "The light crossbow is a mechanical bow that fires bolts with deadly accuracy.  It deals 1d8 piercing damage and has the loading property, meaning you can fire only one bolt per action regardless of extra attacks.  It requires two hands to load and shoot and uses ammunition with a normal range of 80 feet and a long range of 320 feet.  A light crossbow costs 25 gp and weighs 5 pounds.",
    icon: "weapon",
  },
  {
    title: "Longsword",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 15 gp\n" +
      "Damage: 1d8 slashing (versatile 1d10)\n" +
      "Weight: 3 lb.\n" +
      "Properties: Versatile",
    description:
      "A longsword is the quintessential knight's weapon—a sturdy, double‑edged blade that can be wielded in one hand or two.  " +
      "It deals 1d8 slashing damage when used one‑handed and 1d10 when used with both hands.  " +
      "The weapon costs 15 gp, weighs 3 pounds and is versatile, allowing warriors to switch between a sword‑and‑shield style and a heavier grip.",
    icon: "weapon",
  },
  {
    title: "Plate Armor",
    headerBlock:
      "Heavy armor\n" +
      "Cost: 1,500 gp\n" +
      "Armor Class: 18\n" +
      "Strength Requirement: 15\n" +
      "Stealth: Disadvantage\n" +
      "Weight: 65 lb.",
    description:
      "Plate armor consists of interlocking metal plates that cover the entire body.  It provides an AC of 18, requires a Strength score of 15 to don properly, and imposes disadvantage on Stealth checks.  Plate weighs 65 pounds and is the most expensive mundane armor, costing 1,500 gp.",
    icon: "armor",
  },
  {
    title: "Potion of Healing",
    headerBlock:
      "Potion (common)\n" +
      "Cost: 50 gp\n" +
      "Weight: 0.5 lb.\n" +
      "Effect: Restores 2d4 + 2 hit points",
    description:
      "This vial of glimmering red liquid restores vitality when consumed.  Drinking a common potion of healing causes the imbiber to regain 2d4 + 2 hit points.  The item weighs half a pound, costs 50 gp and is commonly kept in a healer’s kit or adventurer’s pack.  More potent variants grant greater healing as noted in the Potions of Healing table.",
    icon: "potion",
  },
  {
    title: "Rapier",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d8 piercing\n" +
      "Weight: 2 lb.\n" +
      "Properties: Finesse",
    description:
      "The rapier is a slender thrusting sword prized by duelists and rogues for its precision.  It deals 1d8 piercing damage and has the finesse property, letting wielders use Dexterity for attack and damage rolls.  " +
      "Rapiers cost 25 gp and weigh 2 pounds, making them a stylish yet deadly choice for lightly armored combatants.",
    icon: "weapon",
  },
  {
    title: "Rope (50 ft., hempen)",
    headerBlock:
      "Adventuring gear\n" +
      "Cost: 1 gp\n" +
      "Length: 50 ft.\n" +
      "Weight: 10 lb.",
    description:
      "A 50‑foot coil of hempen rope is a staple of any adventuring kit.  Rope made of hemp has 2 hit points and can be burst with a DC 17 Strength check.  This length weighs 10 pounds and costs 1 gp, and is invaluable for climbing, tying or securing equipment.",
    icon: "gear",
  },
  {
    title: "Shield",
    headerBlock:
      "Armor\n" + "Cost: 10 gp\n" + "AC Bonus: +2\n" + "Weight: 6 lb.",
    description:
      "A shield is a broad piece of metal or wood strapped to the arm.  Wielding a shield increases your Armor Class by 2 but usually occupies one hand.  A standard shield weighs 6 pounds and costs 10 gp.",
    icon: "armor",
  },
  {
    title: "Shortbow",
    headerBlock:
      "Simple ranged weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d6 piercing\n" +
      "Weight: 2 lb.\n" +
      "Properties: Ammunition (range 80/320), two‑handed",
    description:
      "A shortbow is a compact bow used to fire arrows at distant targets.  It deals 1d6 piercing damage and requires two hands to draw and shoot.  The shortbow uses ammunition and has a normal range of 80 feet and a maximum range of 320 feet.  It costs 25 gp and weighs 2 pounds.",
    icon: "weapon",
  },
  {
    title: "Spellbook",
    headerBlock: "Adventuring gear\n" + "Cost: 50 gp\n" + "Weight: 3 lb.",
    description:
      "A spellbook is a leather‑bound tome containing 100 blank vellum pages for the recording of spells.  It is essential for wizards, who inscribe the rituals and formulae of their spells in its pages.  A blank spellbook weighs 3 pounds and costs 50 gp.",
    icon: "arcana",
  },
  {
    title: "Thieves’ Tools",
    headerBlock: "Tools\n" + "Cost: 25 gp\n" + "Weight: 1 lb.",
    description:
      "Thieves’ tools are a collection of delicate instruments used to pick locks and disable traps.  The kit contains a small file, various lock picks, a mirror mounted on a handle, narrow‑bladed scissors and a pair of pliers.  Proficiency with these tools lets a character add their proficiency bonus to checks made to open locks or disarm traps.  Thieves’ tools weigh 1 pound and cost 25 gp.",
    icon: "gear",
  },
];

export const defaultMonsters: Contents[] = [
  {
    title: "Goblin",
    description: "A small, green humanoid creature known for its cunning.",
  },
  {
    title: "Dragon",
    description: "A massive, fire-breathing reptile with wings.",
  },
];

export const defaultRaces: Contents[] = [
  {
    title: "Elf",
    description: "Graceful beings with a deep connection to nature.",
  },
  {
    title: "Dwarf",
    description: "Stout and sturdy, known for their craftsmanship.",
  },
];

export const defaultSpells: Contents[] = [
  {
    title: "Fireball",
    headerBlock:
      "3rd level evocation\nCasting time: 1 action\nRange: 150 feet\nComponents: V, S, M (a tiny ball of bat guano and sulfur)\nDuration: Instantaneous\nClasses: Sorcerer, Wizard",
    description: "A ball of fire that explodes upon impact, dealing damage.",
  },
  {
    title: "Healing Word",
    description: "A spell that heals a creature within range.",
  },
];

export const defaultToc: Contents[] = [
  {
    title: "Introduction",
    description: "Overview of the D&D Catalog.",
  },
  {
    title: "Getting Started",
    description: "How to use the catalog effectively.",
  },
  {
    title: "Introduction",
    description: "Overview of the D&D Catalog.",
  },
];

const assignIcon = (entries: Contents[], icon: Contents["icon"]) => {
  entries.forEach((entry) => {
    if (!entry.icon) entry.icon = icon;
  });
};

assignIcon(defaultRaces, "race");
assignIcon(defaultClasses, "class");
assignIcon(defaultBackstories, "story");
assignIcon(defaultSpells, "spell");
assignIcon(defaultMonsters, "monster");
assignIcon(defaultToc, "toc");
