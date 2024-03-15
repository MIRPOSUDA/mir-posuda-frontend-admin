import { TextInput } from "flowbite-react";
import { useState } from "react";

export default function MPNumberInput() {
  const [number, setNumber] = useState("(90) 861-80-18");

  function maskPhone(number) {
    return number
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d+?)$/, "$1");
  }

  return (
    <TextInput
      id="phoneNumber"
      type="text"
      name="phoneNumber"
      value={number}
      placeholder="(00) 123-45-67"
      autoComplete="off"
      onChange={(e) => setNumber(maskPhone(e.target.value))}
      addon="+998"
      required
    />
  );
}
