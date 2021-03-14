const moveRwIverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ########### MOVE: R' ##############
  // Rotating faceRight by -90deg
  let tempArr = [];
  let k = 0;
  let temp;
  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceRight[i][j];
      faceRight[i][j] = faceRight[j][i];
      faceRight[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceRight[j][i];
      faceRight[j][i] = faceRight[k][i];
      faceRight[k][i] = temp;
      k--;
    }
  }

  //   Adjusitng other faces

  for (let m = 0; m < wide; m++) {
    tempArr = [];
    for (let x = 0; x < cubeSize; x++) {
      tempArr.push(faceFront[x][cubeSize - 1 - m]);
      faceFront[x][cubeSize - 1 - m] = faceUp[x][cubeSize - 1 - m];
      faceUp[x][cubeSize - 1 - m] = faceBack[cubeSize - 1 - x][m];
      faceBack[cubeSize - 1 - x][m] = faceDown[x][cubeSize - 1 - m];
      faceDown[x][cubeSize - 1 - m] = tempArr[x];
    }
  }

  //   ######### END OF MOVE: R' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveRwIverse;
