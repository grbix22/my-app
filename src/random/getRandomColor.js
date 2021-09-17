const colors = ["red", "green", "blue", "orange", "yellow"];

export default function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
