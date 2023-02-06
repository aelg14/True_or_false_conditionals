let points = 0;

const tomato = prompt("Tomatoes are fruits, not vegetables: true or false");
if (tomato === "true") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect!");
  points -= 5;
}

const water = prompt("You should drink 8 glasses of water: true or false");
if (water === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect!");
  points -= 5;
}

const memory = prompt("Fishes have only three seconds of memory: true or false");
if (memory === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect!");
  points -= 5;
}

const wall = prompt("The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false");
if (wall === "false") {
  console.log("Correct!");
  points += 10;
} else {
  console.log("Incorrect!");
  points -= 5;
}

const elephant = prompt("Elephants are the largest land animals in the world: true or false");
if (elephant === "true") {
console.log("Correct!");
points += 10;
} else {
console.log("Incorrect!");
points -= 5;
}

const mars = prompt("Mars is known as the Red Planet: true or false");
if (mars === "true") {
console.log("Correct!");
points += 10;
} else {
console.log("Incorrect!");
points -= 5;
}

console.log(`There you go... You got ${points} points!!`);
