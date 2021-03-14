const moveUInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
) => {
  //   ######  MOVE: U`  ######
  //   Rotate faceUp by 90 deg
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
      temp = faceUp[j][i];
      faceUp[j][i] = faceUp[cubeSize - 1 - i][j];
      faceUp[cubeSize - 1 - i][j] = temp;

      temp = faceUp[i][cubeSize - 1 - j];
      faceUp[i][cubeSize - 1 - j] = faceUp[cubeSize - 1 - i][j];
      faceUp[cubeSize - 1 - i][j] = temp;

      temp = faceUp[cubeSize - 1 - i][j];
      faceUp[cubeSize - 1 - i][j] = faceUp[cubeSize - 1 - j][cubeSize - 1 - i];
      faceUp[cubeSize - 1 - j][cubeSize - 1 - i] = temp;
      i++;
      k++;
    }
    j++;
    maxFori -= 2;
  }

  //   Adjusting other faces

  tempArr = faceFront[0].map((block: string) => block);
  faceFront[0] = faceRight[0].map((block: string) => block);
  faceRight[0] = faceBack[0].map((block: string) => block);
  faceBack[0] = faceLeft[0].map((block: string) => block);
  faceLeft[0] = tempArr.map((block: string) => block);

  //   ###### END OF MOVE: U' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveUInverse;
