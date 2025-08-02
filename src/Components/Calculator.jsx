import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const buttons = [
  "C", " ", " ", "%",
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = evaluate(input).toString();
        setInput(result);
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const isOperator = (val) => ["+", "-", "*", "/", "%"].includes(val);

  return (
    <div className="w-[300px] mx-auto mt-12 p-5 bg-gray-900 rounded-lg shadow-lg text-center">
      <div className="w-full h-16 text-2xl text-right px-3 py-2 bg-gray-800 text-white rounded mb-4 overflow-x-auto">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((value, index) => {
          const baseClass = "w-full py-5 text-xl rounded cursor-pointer transition duration-200";
          const className = (() => {
            if (value === "C") return `${baseClass} bg-red-600 text-white hover:bg-red-700`;
            if (value === "=") return `${baseClass} bg-green-500 text-white hover:bg-green-600`;
            if (isOperator(value)) return `${baseClass} bg-yellow-500 text-white hover:bg-yellow-600`;
            return `${baseClass} bg-gray-700 text-white hover:bg-gray-600`;
          })();

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleClick(value)}
              disabled={value === " "}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
