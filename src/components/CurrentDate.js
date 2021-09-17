import { getCurrentDate } from "../helpers";
export default function CurrentDate() {
  return (
    <p>
      <p>Today is {getCurrentDate()}</p>
    </p>
  );
}
