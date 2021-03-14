const moveD = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
) => {
  //   ####### MOVE: D ##############
  // Rotating faceDown 90deg
  let i = 0;
  let j = 0;
  let k = 0;
  let temp;
  let tempArr = [];
  let maxFori = cubeSize - 2;
  while (j <= cubeSize / 2) {
    i = j;
    k = 0;
    while (k <= maxFori) {
      temp = faceDown[j][i];
      faceDown[j][i] = faceDown[cubeSize - 1 - i][j];
      faceDown[cubeSize - 1 - i][j] = temp;

      temp = faceDown[i][cubeSize - 1 - j];
      faceDown[i][cubeSize - 1 - j] = faceDown[cubeSize - 1 - i][j];
      faceDown[cubeSize - 1 - i][j] = temp;

      temp = faceDown[cubeSize - 1 - i][j];
      faceDown[cubeSize - 1 - i][j] =
        faceDown[cubeSize - 1 - j][cubeSize - 1 - i];
      faceDown[cubeSize - 1 - j][cubeSize - 1 - i] = temp;

      i++;
      k++;
    }
    j++;
    maxFori -= 2;
  }

  //   Adjusting other faces
  tempArr = faceFront[cubeSize - 1].map((block: string) => block);
  faceFront[cubeSize - 1] = faceLeft[cubeSize - 1].map(
    (block: string) => block
  );
  faceLeft[cubeSize - 1] = faceBack[cubeSize - 1].map((block: string) => block);
  faceBack[cubeSize - 1] = faceRight[cubeSize - 1].map(
    (block: string) => block
  );
  faceRight[cubeSize - 1] = tempArr.map((block: string) => block);

  //   ######## END OF MOVE: D ###############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveD;
