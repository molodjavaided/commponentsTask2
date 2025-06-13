import styles from "./stepsList.module.css";

export default function StepList({ steps, activeIndex, onClick }) {
  return (
    <>
      <ul className={styles["steps-list"]}>
        {steps.map((item, index) => (
          <li
            className={`${styles["steps-item"]} ${
              index === activeIndex ? styles.active : ""
            } ${index < activeIndex ? styles.done : ""}`}
            key={item.id}
          >
            <button
              className={styles["steps-item-button"]}
              onClick={() => onClick(index)}
            >
              {index + 1}
            </button>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
