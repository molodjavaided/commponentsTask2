import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";
import StepList from "./commponents/stepsList/stepsList";
import Button from "./commponents/button/button";
import Content from "./commponents/content/content";

export const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const clickList = (index) => {
    setActiveIndex(index);
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setActiveIndex((index) => {
        index - 1;
      });
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const isLastStep = activeIndex === steps.length - 1;
  const isFirstStep = activeIndex === 0;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <Content activeIndex={activeIndex} steps={steps} />
          <StepList
            steps={steps}
            activeIndex={activeIndex}
            onClick={clickList}
          />
          <div className={styles["buttons-container"]}>
            <Button onClick={handleBack} disabled={isFirstStep}>
              Назад
            </Button>
            <Button onClick={handleNext}>
              {isLastStep ? "Начать сначала" : "Далее"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
