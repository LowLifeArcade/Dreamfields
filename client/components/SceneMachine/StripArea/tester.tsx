import React, { useState } from "react";


interface Props {
  someThing: number;
}

const Tester = (someThing:Props):number => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
    </div>
  );

}

interface Person {
  name: string;
  age: number;
}

const myPerson: Person = {
  name: "John",
  age: 30,
}