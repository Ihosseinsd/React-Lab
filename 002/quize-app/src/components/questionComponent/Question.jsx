import { useState } from "react";
import QUESTIONS from "../../questions";
import "./index.css";
import ShowPoint from "../pointComponenet/point";

const Question = () => {
  const [step, setStep] = useState(0);
  const [point, setPoint] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [next, setNext] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (option, index) => {
    if (index === QUESTIONS[step].correctOption) {
      setPoint((point) => (point += QUESTIONS[step].points));
      setNext(!next);
      setActiveButton(index);
      setIsClicked(true);
    } else {
      setNext(!next);
      setActiveButton(index);
      setIsClicked(true);
    }
  };
  const handleNext = (step) => {
    setStep(step + 1);
    setNext(!next);
    setActiveButton(null);
    setIsClicked(false);
  };
  if (step < QUESTIONS.length) {
    return (
      <>
        <h1 className="qa">{QUESTIONS[step].title}</h1>
        {QUESTIONS[step].options.map((option, index) => {
          return (
            <button
              className="btnn"
              style={{
                padding: "10px 20px",
                border:
                  activeButton === index
                    ? "2px solid blue"
                    : "2px solid transparent",
                outline: "none",
                cursor: isClicked ? "not-allowed" : "pointer",
                transition: "border 0.3s ease",
                marginBottom: "10px",
                display: "block",
              }}
              onClick={() => handleClick(option, index)}
              key={index}
            >
              {option}
            </button>
          );
        })}
        {next === true && (
          <button
            style={{
              cursor: "pointer",
            }}
            className="btn"
            onClick={() => handleNext(step)}
          >
            Next Question
          </button>
        )}
      </>
    );
  } else {
    return <ShowPoint thePoint={point} />;
  }
};

export default Question;
