const names = [
  "Domagoj",
  "Božica",
  "Igor",
  "Ivan",
  "Marija",
  "Mario",
  "Toma",
  "Zoran",
];

export default function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}
