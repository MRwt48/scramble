import React from "react";
import styles from "./Face.module.css";

const Face = ({ faceToShow }: { faceToShow: any }) => {
  let height = "40px";
  let len = faceToShow.length;

  if (len === 2) height = "152px";
  if (len === 3) height = "100px";
  if (len === 4) height = "73px";
  if (len === 5) height = "58px";
  if (len === 6) height = "47px";

  return (
    <div className={styles.faceWrapper}>
      {faceToShow.map((row: any[], inde: number) => {
        return (
          <div key={`${inde}`} className={styles.faceRow}>
            {row.map((block: string, ind) => {
              return (
                <span
                  key={ind}
                  className={styles.faceBlock}
                  style={{ background: `${block}`, height: `${height}` }}
                ></span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Face;
