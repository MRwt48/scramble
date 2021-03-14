import React, { useState, createContext } from "react";

export const MoveContext = createContext<
  [
    [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    [number, React.Dispatch<React.SetStateAction<number>>],
    [string[], React.Dispatch<React.SetStateAction<any>>]
  ]
>([
  [false, () => null],
  [2, () => null],
  [[], () => null],
]);

export const MoveProvider = ({ children }: { children: any }) => {
  const [moveNext, setMoveNext] = useState(false);
  const [cube, setCube] = useState(2);
  const [scrambleMoves, setScrambleMoves] = useState([]);

  return (
    <MoveContext.Provider
      value={[
        [moveNext, setMoveNext],
        [cube, setCube],
        [scrambleMoves, setScrambleMoves],
      ]}
    >
      {children}
    </MoveContext.Provider>
  );
};
