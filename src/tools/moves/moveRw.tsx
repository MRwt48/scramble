const moveRw = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ####### MOVE: R ##########
  // Rotating faceRight by 90deg
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
      temp = faceRight[j][i];
      faceRight[j][i] = faceRight[cubeSize - 1 - i][j];
      faceRight[cubeSize - 1 - i][j] = temp;

      temp = faceRight[i][cubeSize - 1 - j];
      faceRight[i][cubeSize - 1 - j] = faceRight[cubeSize - 1 - i][j];
      faceRight[cubeSize - 1 - i][j] = temp;

      temp = faceRight[cubeSize - 1 - i][j];
      faceRight[cubeSize - 1 - i][j] =
        faceRight[cubeSize - 1 - j][cubeSize - 1 - i];
      faceRight[cubeSize - 1 - j][cubeSize - 1 - i] = temp;

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
      tempArr.push(faceUp[x][cubeSize - 1 - m]);
      faceUp[x][cubeSize - 1 - m] = faceFront[x][cubeSize - 1 - m];
      faceFront[x][cubeSize - 1 - m] = faceDown[x][cubeSize - 1 - m];
      faceDown[x][cubeSize - 1 - m] = faceBack[cubeSize - 1 - x][m];
      faceBack[cubeSize - 1 - x][m] = tempArr[x];
    }
  }

  //   ######## END OF MOVE: R ###############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveRw;
