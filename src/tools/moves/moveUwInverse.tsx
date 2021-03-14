const moveUwInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
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

  for (let m = 0; m < wide; m++) {
    tempArr = [];
    tempArr = faceFront[m].map((block: string) => block);
    faceFront[m] = faceRight[m].map((block: string) => block);
    faceRight[m] = faceBack[m].map((block: string) => block);
    faceBack[m] = faceLeft[m].map((block: string) => block);
    faceLeft[m] = tempArr.map((block: string) => block);
  }

  //   ###### END OF MOVE: U' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveUwInverse;
