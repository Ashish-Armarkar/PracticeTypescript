import React from "react";
interface VALUE_TYPE {
  Value: {
    name: string;
    age: number;
    alive: boolean;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: number;
      alive: boolean;
    }>
  >;
}
const StateHandling: React.FC<VALUE_TYPE> = ({ Value, setValue }) => {
  return (
    <>
      <h1>Name: {Value.name}</h1>
      <h2>Age: {Value.age}</h2>
      <h3>Alive: {Value.alive ? "yes" : "not"}</h3>

      <button
        onClick={() => {
          setValue({
            name: "Ashish",
            age: 25,
            alive: true,
          });
        }}
      >
        Change
      </button>
    </>
  );
};

export default StateHandling;
