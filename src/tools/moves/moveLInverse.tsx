const moveLInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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
  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceFront[x][0]);
    faceFront[x][0] = faceUp[x][0];
    faceUp[x][0] = faceBack[cubeSize - 1 - x][cubeSize - 1];
    faceBack[cubeSize - 1 - x][cubeSize - 1] = faceDown[x][0];
    faceDown[x][0] = tempArr[x];
  }

  //   ######## END OF MOVE: L' ###############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveLInverse;
