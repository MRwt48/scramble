// Normal moves
import moveU from "./moves/moveU";
import moveUInverse from "./moves/moveUInverse";
import moveF from "./moves/moveF";
import moveFInverse from "./moves/moveFInverse";
import moveR from "./moves/moveR";
import moveRInverse from "./moves/moveRInverse";
import moveL from "./moves/moveL";
import moveLInverse from "./moves/moveLInverse";
import moveB from "./moves/moveB";
import moveBInverse from "./moves/moveBInverse";
import moveD from "./moves/moveD";
import moveDInverse from "./moves/moveDInverse";

// Wide moves
import moveBw from "./moves/moveBw";
import moveBwInverse from "./moves/moveBwInverse";
import moveDw from "./moves/moveDw";
import moveDwInverse from "./moves/moveDwInverse";
import moveFw from "./moves/moveFw";
import moveFwInverse from "./moves/moveFwInverse";
import moveLw from "./moves/moveLw";
import moveLwInverse from "./moves/moveLwInverse";
import moveRw from "./moves/moveRw";
import moveRwInverse from "./moves/moveRwInverse";
import moveUw from "./moves/moveUw";
import moveUwInverse from "./moves/moveUwInverse";
import moveRIverse from "./moves/moveRInverse";

const getFaces = (cubeSize: number) => {
  let faceUp = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("white"));
  let faceDown = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("yellow"));
  let faceFront = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("green"));
  let faceBack = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("blue"));
  let faceLeft = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("orange"));
  let faceRight = Array(cubeSize)
    .fill([])
    .map((_) => Array(cubeSize).fill("red"));

  const possibleMoves = [
    "F",
    "F2",
    "F'",
    "U",
    "U2",
    "U'",
    "R",
    "R2",
    "R'",
    "L",
    "L2",
    "L'",
    "B",
    "B2",
    "B'",
    "D",
    "D2",
    "D'",
  ];

  const possibleMovesLarge = [
    ...possibleMoves,
    "Fw",
    "Fw2",
    "Fw'",
    "Uw",
    "Uw2",
    "Uw'",
    "Rw",
    "Rw2",
    "Rw'",
    "Lw",
    "Lw2",
    "Lw'",
    "Bw",
    "Bw2",
    "Bw'",
    "Dw",
    "Dw2",
    "Dw'",
  ];

  const possibleMovesExtraLarge = [
    ...possibleMovesLarge,
    "3Fw",
    "3Fw2",
    "3Fw'",
    "3Uw",
    "3Uw2",
    "3Uw'",
    "3Rw",
    "3Rw2",
    "3Rw'",
    "3Lw",
    "3Lw2",
    "3Lw'",
    "3Bw",
    "3Bw2",
    "3Bw'",
    "3Dw",
    "3Dw2",
    "3Dw'",
  ];
  let scrambleMoves: any[] = [];
  let randomIndex = 0;
  let move;

  if (cubeSize === 2) {
    scrambleMoves = Array(10)
      .fill("")
      .map((_) => possibleMoves[Math.floor((Math.random() * 100) % 18)]);
  } else if (cubeSize === 3) {
    scrambleMoves = Array(20)
      .fill("")
      .map((_) => possibleMoves[Math.floor((Math.random() * 100) % 18)]);
  } else if (cubeSize === 4) {
    scrambleMoves = Array(40)
      .fill("")
      .map((_) => possibleMovesLarge[Math.floor((Math.random() * 100) % 36)]);
  } else if (cubeSize === 5) {
    scrambleMoves = Array(60)
      .fill("")
      .map((_) => possibleMovesLarge[Math.floor((Math.random() * 100) % 36)]);
  } else if (cubeSize === 6) {
    scrambleMoves = Array(90)
      .fill("")
      .map(
        (_) => possibleMovesExtraLarge[Math.floor((Math.random() * 100) % 54)]
      );
  } else if (cubeSize === 7) {
    scrambleMoves = Array(110)
      .fill("")
      .map(
        (_) => possibleMovesExtraLarge[Math.floor((Math.random() * 100) % 54)]
      );
  }

  scrambleMoves.forEach((move) => {
    // faceFront moves
    if (move === "F") {
      // console.log(move, "f");
      moveF(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "F2") {
      // console.log(move, "f2");
      for (let i = 0; i < 2; i++) {
        moveF(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "F'") {
      // console.log(move, "f'");
      moveFInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }

    // faceUp moves
    else if (move === "U") {
      // console.log(move, "u");
      moveU(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "U2") {
      // console.log(move, "u2");
      for (let i = 0; i < 2; i++) {
        moveU(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "U'") {
      // console.log(move, "u'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveUInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }

    // faceDown moves
    else if (move === "D") {
      // console.log(move, "d");
      moveD(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "D2") {
      // console.log(move, "d2");
      for (let i = 0; i < 2; i++) {
        moveD(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "D'") {
      // console.log(move, "d'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveDInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }

    // faceLeft moves
    else if (move === "L") {
      // console.log(move, "l");
      moveL(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "L2") {
      // console.log(move, "l2");
      for (let i = 0; i < 2; i++) {
        moveL(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "L'") {
      // console.log(move, "l'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveLInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }

    // faceRight Moves
    else if (move === "R") {
      // console.log(move, "r");
      moveR(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "R2") {
      // console.log(move, "r2");
      for (let i = 0; i < 2; i++) {
        moveR(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "R'") {
      // console.log(move, "r'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveRInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }
    // faceBack moves
    else if (move === "B") {
      // console.log(move, "b");
      moveB(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    } else if (move === "B2") {
      // console.log(move, "b2");
      for (let i = 0; i < 2; i++) {
        moveB(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize
        );
      }
    } else if (move === "B'") {
      // console.log(move, "b'");
      moveBInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize
      );
    }

    //
    //
    //
    //
    //
    // Wide moves
    // faceFront moves
    if (move === "Fw") {
      // console.log(move, "f");
      moveFw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Fw2") {
      // console.log(move, "f2");
      for (let i = 0; i < 2; i++) {
        moveFw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Fw'") {
      // console.log(move, "f'");
      moveFwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }

    // faceUp moves
    else if (move === "Uw") {
      // console.log(move, "u");
      moveUw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Uw2") {
      // console.log(move, "u2");
      for (let i = 0; i < 2; i++) {
        moveUw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Uw'") {
      // console.log(move, "u'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveUwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }

    // faceDown moves
    else if (move === "Dw") {
      // console.log(move, "d");
      moveDw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Dw2") {
      // console.log(move, "d2");
      for (let i = 0; i < 2; i++) {
        moveDw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Dw'") {
      // console.log(move, "d'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveDwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }

    // faceLeft moves
    else if (move === "Lw") {
      // console.log(move, "l");
      moveLw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Lw2") {
      // console.log(move, "l2");
      for (let i = 0; i < 2; i++) {
        moveLw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Lw'") {
      // console.log(move, "l'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveLwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }

    // faceRight Moves
    else if (move === "Rw") {
      // console.log(move, "r");
      moveRw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Rw2") {
      // console.log(move, "r2");
      for (let i = 0; i < 2; i++) {
        moveRw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Rw'") {
      // console.log(move, "r'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveRwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }
    // faceBack moves
    else if (move === "Bw") {
      // console.log(move, "b");
      moveBw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    } else if (move === "Bw2") {
      // console.log(move, "b2");
      for (let i = 0; i < 2; i++) {
        moveBw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          2
        );
      }
    } else if (move === "Bw'") {
      // console.log(move, "b'");
      moveBwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        2
      );
    }

    //
    //
    //
    //
    //

    // 3w moves
    //
    //
    //
    //
    //
    // Wide moves
    // faceFront moves
    if (move === "3Fw") {
      // console.log(move, "f");
      moveFw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Fw2") {
      // console.log(move, "f2");
      for (let i = 0; i < 2; i++) {
        moveFw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Fw'") {
      // console.log(move, "f'");
      moveFwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }

    // faceUp moves
    else if (move === "3Uw") {
      // console.log(move, "u");
      moveUw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Uw2") {
      // console.log(move, "u2");
      for (let i = 0; i < 2; i++) {
        moveUw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Uw'") {
      // console.log(move, "u'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveUwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }

    // faceDown moves
    else if (move === "3Dw") {
      // console.log(move, "d");
      moveDw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Dw2") {
      // console.log(move, "d2");
      for (let i = 0; i < 2; i++) {
        moveDw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Dw'") {
      // console.log(move, "d'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveDwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }

    // faceLeft moves
    else if (move === "3Lw") {
      // console.log(move, "l");
      moveLw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Lw2") {
      // console.log(move, "l2");
      for (let i = 0; i < 2; i++) {
        moveLw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Lw'") {
      // console.log(move, "l'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveLwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }

    // faceRight Moves
    else if (move === "3Rw") {
      // console.log(move, "r");
      moveRw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Rw2") {
      // console.log(move, "r2");
      for (let i = 0; i < 2; i++) {
        moveRw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Rw'") {
      // console.log(move, "r'");
      [
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
      ] = moveRwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }
    // faceBack moves
    else if (move === "3Bw") {
      // console.log(move, "b");
      moveBw(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    } else if (move === "3Bw2") {
      // console.log(move, "b2");
      for (let i = 0; i < 2; i++) {
        moveBw(
          faceUp,
          faceDown,
          faceFront,
          faceBack,
          faceLeft,
          faceRight,
          cubeSize,
          3
        );
      }
    } else if (move === "3Bw'") {
      // console.log(move, "b'");
      moveBwInverse(
        faceUp,
        faceDown,
        faceFront,
        faceBack,
        faceLeft,
        faceRight,
        cubeSize,
        3
      );
    }
  });
  // console.log("done");

  return [
    faceUp,
    faceDown,
    faceFront,
    faceBack,
    faceLeft,
    faceRight,
    scrambleMoves,
  ];
};

export default getFaces;
