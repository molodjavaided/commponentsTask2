import styles from "./content.module.css";

export default function Content({ activeIndex, steps }) {
  return (
    <div className={styles["steps-content"]}>{steps[activeIndex].content}</div>
  );
}
