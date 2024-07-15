import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import NavigationButton from "./NavigationButton";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((currStep) => currStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((currStep) => currStep + 1);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <NavigationButton
              bgColor="#7950F2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span>
              Previous
            </NavigationButton>
            <NavigationButton
              bgColor="#7950F2"
              textColor="#fff"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </NavigationButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
