const moveFwInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ######  MOVE: F`  ######
  //   Rotate faceUp by -90 deg
  let tempArr = [];
  let k = 0;
  let temp;

  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceFront[i][j];
      faceFront[i][j] = faceFront[j][i];
      faceFront[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceFront[j][i];
      faceFront[j][i] = faceFront[k][i];
      faceFront[k][i] = temp;
      k--;
    }
  }

  //   Adjusting other faces
  for (let m = 0; m < wide; m++) {
    tempArr = [];
    for (let x = 0; x < cubeSize; x++) {
      tempArr.push(faceUp[cubeSize - 1 - m][x]);
      faceUp[cubeSize - 1 - m][x] = faceRight[x][m];
      faceRight[x][m] = faceDown[m][cubeSize - 1 - x];
      faceDown[m][cubeSize - 1 - x] =
        faceLeft[cubeSize - 1 - x][cubeSize - 1 - m];
      faceLeft[cubeSize - 1 - x][cubeSize - 1 - m] = tempArr[x];
    }
  }

  //   ###### END OF MOVE: F' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveFwInverse;
