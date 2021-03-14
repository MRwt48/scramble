const moveRIverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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
  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceFront[x][cubeSize - 1]);
    faceFront[x][cubeSize - 1] = faceUp[x][cubeSize - 1];
    faceUp[x][cubeSize - 1] = faceBack[cubeSize - 1 - x][0];
    faceBack[cubeSize - 1 - x][0] = faceDown[x][cubeSize - 1];
    faceDown[x][cubeSize - 1] = tempArr[x];
  }

  //   ######### END OF MOVE: R' ###########
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveRIverse;
