import styles from "./button.module.css";

export default function Button(props) {

  return (
    <button style={{ backgroundColor: props.color }} className={styles.btn}>
      {props.text}
    </button>
  );
}

// named exports
export function ButtonChild(props) {
  function handleClick() {
    console.log("...");
    props.onClick();
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: props.color }}
      className={styles.btn}
    >
      {props.children}
    </button>
  );
}

