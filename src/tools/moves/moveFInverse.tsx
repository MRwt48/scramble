const moveFInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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

  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceUp[cubeSize - 1][x]);
    faceUp[cubeSize - 1][x] = faceRight[x][0];
    faceRight[x][0] = faceDown[0][cubeSize - 1 - x];
    faceDown[0][cubeSize - 1 - x] = faceLeft[cubeSize - 1 - x][cubeSize - 1];
    faceLeft[cubeSize - 1 - x][cubeSize - 1] = tempArr[x];
  }

  //   ###### END OF MOVE: F' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveFInverse;
