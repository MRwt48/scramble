const moveF = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
) => {
  //   ####### MOVE: F #############
  //   Rotate faceFront by 90 deg

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
      temp = faceFront[j][i];
      faceFront[j][i] = faceFront[cubeSize - 1 - i][j];
      faceFront[cubeSize - 1 - i][j] = temp;

      temp = faceFront[i][cubeSize - 1 - j];
      faceFront[i][cubeSize - 1 - j] = faceFront[cubeSize - 1 - i][j];
      faceFront[cubeSize - 1 - i][j] = temp;

      temp = faceFront[cubeSize - 1 - i][j];
      faceFront[cubeSize - 1 - i][j] =
        faceFront[cubeSize - 1 - j][cubeSize - 1 - i];
      faceFront[cubeSize - 1 - j][cubeSize - 1 - i] = temp;

      i++;
      k++;
    }
    j++;
    maxFori -= 2;
  }

  //   Adjusting other faces
  tempArr = faceDown[0].map((block: string) => block);
  for (let x = 0; x < cubeSize; x++) {
    faceDown[0][x] = faceRight[cubeSize - 1 - x][0];
    faceRight[cubeSize - 1 - x][0] = faceUp[cubeSize - 1][cubeSize - 1 - x];
    faceUp[cubeSize - 1][cubeSize - 1 - x] = faceLeft[x][cubeSize - 1];
    faceLeft[x][cubeSize - 1] = tempArr[x];
  }

  // ####### END OF MOVE: F ###########
};

export default moveF;
