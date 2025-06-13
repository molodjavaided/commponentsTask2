import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";
import ButtonList from "./commponents/button/buttonList/buttonList";

export const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  // И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

  // function handleClick(index) {
  //   setActiveIndex(index);
  // }

  // И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {/* Для получения активного контента использйте steps и activeIndex */}
            {steps[activeIndex].content}
          </div>
          <ButtonList
            steps={steps}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          {/* <ul className={styles["steps-list"]}>
            {steps.map((item, index) => (
              <li
                className={`${styles["steps-item"]} ${
                  index === activeIndex ? styles.active : ""
                }`}
                key={item.id}
              >
                <button
                  className={styles["steps-item-button"]}
                  onClick={() => handleClick(index)}
                >
                  {index + 1}
                </button>
                {item.title}
              </li>
            ))}
          </ul> */}
          <div className={styles["buttons-container"]}>
            <button className={styles.button}>Назад</button>
            <button className={styles.button}>
              Далее
              {/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
              {/* Или заменять всю кнопку в зависимости от условия */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
