import { VFC } from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton: VFC = ({
  text,
  onClickHandler
}: {
  text: string;
  onClickHandler: () => void;
}) => {
  return (
    <div className={styles.primaryButton}>
      <button onClick={onClickHandler}>{text}</button>
    </div>
  );
};

export default PrimaryButton;
