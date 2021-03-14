import React, { useContext } from "react";
import { MoveContext } from "../../context/moveContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const [
    [moveNext, setMoveNext],
    [cube, setCube],
    [scrambleMoves, setScrambleMoves],
  ] = useContext(MoveContext);

  return (
    <div>
      <div className={styles.navControls}>
        <select
          onChangeCapture={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setCube(parseInt(event.target.value))
          }
        >
          <option value={2}>2x2x2</option>
          <option value={3}>3x3x3</option>
          <option value={4}>4x4x4</option>
          <option value={5}>5x5x5</option>
          <option value={6}>6x6x6</option>
          <option value={7}>7x7x7</option>
        </select>
        <button onClick={() => setMoveNext((prev) => !prev)}>next</button>
      </div>
      <div className={styles.scrambleMoves}>
        {scrambleMoves.map((move, ind) => (
          <span key={ind}>{move}</span>
        ))}
      </div>
    </div>
  );
};

export default Nav;
