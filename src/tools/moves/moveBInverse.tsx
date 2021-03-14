const moveBInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
) => {
  //   ####### MOVE: B' ##############
  // Rotating faceBack 90deg
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
      temp = faceBack[j][i];
      faceBack[j][i] = faceBack[cubeSize - 1 - i][j];
      faceBack[cubeSize - 1 - i][j] = temp;

      temp = faceBack[i][cubeSize - 1 - j];
      faceBack[i][cubeSize - 1 - j] = faceBack[cubeSize - 1 - i][j];
      faceBack[cubeSize - 1 - i][j] = temp;

      temp = faceBack[cubeSize - 1 - i][j];
      faceBack[cubeSize - 1 - i][j] =
        faceBack[cubeSize - 1 - j][cubeSize - 1 - i];
      faceBack[cubeSize - 1 - j][cubeSize - 1 - i] = temp;

      i++;
      k++;
    }
    j++;
    maxFori -= 2;
  }

  //   Adjusting other faces
  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceLeft[x][0]);
    faceLeft[x][0] = faceUp[0][cubeSize - 1 - x];
    faceUp[0][cubeSize - 1 - x] = faceRight[cubeSize - 1 - x][cubeSize - 1];
    faceRight[cubeSize - 1 - x][cubeSize - 1] = faceDown[cubeSize - 1][x];
    faceDown[cubeSize - 1][x] = tempArr[x];
  }

  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveBInverse;
