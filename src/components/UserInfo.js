import { getRandomColor, getRandomName } from "../random";
export default function UserInfo() {
  return (
    <p>
      Your random name is {getRandomName()} and your color is {getRandomColor()}
    </p>
  );
}
