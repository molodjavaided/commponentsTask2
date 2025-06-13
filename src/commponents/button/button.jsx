import styles from "./button.module.css";

import { Children } from "react";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
