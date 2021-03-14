import React, { useEffect, useState, useContext } from "react";
import styles from "./Scramble.module.css";
import Face from "../Face/Face";
import { MoveContext } from "../../context/moveContext";

// eslint-disable-next-line
import getFaces from "../../tools/getFaces";

const Scramble = () => {
  const [faces, setFaces]: [faces: any[], setFaces: any] = useState([]);
  const [
    [moveNext, setMoveNext],
    [cube, setCube],
    [scrambleMoves, setScrambleMoves],
  ] = useContext(MoveContext);

  useEffect(() => {
    const arr = [...getFaces(cube)];
    setScrambleMoves([...arr[6]]);
    setFaces(arr);
  }, [moveNext, cube]);

  return (
    <div>
      {faces.length > 0 && (
        <div className={styles.scrambleImageWrapper}>
          <div className={styles.faceUp}>
            <Face faceToShow={faces[0]} />
          </div>
          <div className={styles.faceFront}>
            <Face faceToShow={faces[2]} />
          </div>
          <div className={styles.faceLeft}>
            <Face faceToShow={faces[4]} />
          </div>
          <div className={styles.faceRight}>
            <Face faceToShow={faces[5]} />
          </div>
          <div className={styles.faceDown}>
            <Face faceToShow={faces[1]} />
          </div>
          <div className={styles.faceBack}>
            <Face faceToShow={faces[3]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Scramble;
