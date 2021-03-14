const moveLwInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ####### MOVE: L' ##############
  // Rotating faceLeft 90deg
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
      temp = faceLeft[j][i];
      faceLeft[j][i] = faceLeft[cubeSize - 1 - i][j];
      faceLeft[cubeSize - 1 - i][j] = temp;

      temp = faceLeft[i][cubeSize - 1 - j];
      faceLeft[i][cubeSize - 1 - j] = faceLeft[cubeSize - 1 - i][j];
      faceLeft[cubeSize - 1 - i][j] = temp;

      temp = faceLeft[cubeSize - 1 - i][j];
      faceLeft[cubeSize - 1 - i][j] =
        faceLeft[cubeSize - 1 - j][cubeSize - 1 - i];
      faceLeft[cubeSize - 1 - j][cubeSize - 1 - i] = temp;

      i++;
      k++;
    }
    j++;
    maxFori -= 2;
  }

  //   Adjusting other faces
  for (let m = 0; m < wide; m++) {
    tempArr = [];
    for (let x = 0; x < cubeSize; x++) {
      tempArr.push(faceFront[x][m]);
      faceFront[x][m] = faceUp[x][m];
      faceUp[x][m] = faceBack[cubeSize - 1 - x][cubeSize - 1 - m];
      faceBack[cubeSize - 1 - x][cubeSize - 1 - m] = faceDown[x][m];
      faceDown[x][m] = tempArr[x];
    }
  }

  //   ######## END OF MOVE: L' ###############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveLwInverse;
