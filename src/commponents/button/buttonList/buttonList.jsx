import styles from "../buttonList/buttonList.module.css";

export default function ButtonList({ steps, activeIndex, setActiveIndex }) {
  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <>
      <ul className={styles["steps-list"]}>
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
      </ul>
    </>
  );
}
