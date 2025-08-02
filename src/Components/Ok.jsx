import React, { useState } from 'react';

const buttons = [
  "C", " ", " ", "%",
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

const Ok = () => {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState("");
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState("");

  const isOperator = (val) => ["+", "-", "*", "/", "%"].includes(val);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setNum1("");
      setNum2("");
      setOperator("");
    } else if (value === "=") {
      if (num1 && operator && num2) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result = "";

        switch (operator) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = b === 0 ? "Error" : a / b;
            break;
          case "%":
            result = a % b;
            break;
          default:
            result = "Error";
        }

        setInput(result.toString());
        setNum1(result.toString());
        setNum2("");
        setOperator("");
      }
    } else if (isOperator(value)) {
      if (num1 && !operator) {
        setOperator(value);
        setInput(prev => prev + value);
      }
    } else if (!isNaN(value) || value === ".") {
      if (!operator) {
        if (value === "." && num1.includes(".")) return;
        setNum1(prev => prev + value);
      } else {
        if (value === "." && num2.includes(".")) return;
        setNum2(prev => prev + value);
      }
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4  bg-black">
      <div className="w-[90%] max-w-[300px] bg-gray-600 rounded-xl shadow-lg">
        <div className="w-full h-12 sm:h-16 text-2xl sm:text-2xl text-right px-2 sm:px-3 py-2 bg-white text-black rounded-xl border-2  border-black mb-3 sm:mb-4 overflow-x-auto">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-1 sm:gap-2 p-2">
          {buttons.map((value, index) => {
            const baseClass = "w-full py-3 sm:py-4 text-lg sm:text-xl rounded cursor-pointer transition duration-200 border-2 border-black";

            const buttonClass = (() => {
              if (value === "C") {
                return `${baseClass} bg-red-500 text-black hover:bg-red-700`;
              }
              if (value === "=") {
                return `${baseClass} bg-green-700 text-black hover:bg-green-600`;
              }
              if (isOperator(value)) {
                return `${baseClass} bg-yellow-500 text-black hover:bg-yellow-600`;
              }
              return `${baseClass} bg-white text-black hover:bg-gray-500`;
            })();

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => handleClick(value)}
                disabled={value === " "}>
                {value}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="text-center">
        <p className="text-white text-sm font-medium">
          Designed & Developed by Praveen
        </p>
        <p className="text-white text-xs">
          © 2025 All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Ok;