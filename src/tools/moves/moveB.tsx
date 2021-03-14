const moveB = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
) => {
  //   ############# MOVE: B ###################
  // Rotating faceBack -90deg
  let tempArr = [];
  let k = 0;
  let temp;
  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceBack[i][j];
      faceBack[i][j] = faceBack[j][i];
      faceBack[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceBack[j][i];
      faceBack[j][i] = faceBack[k][i];
      faceBack[k][i] = temp;
      k--;
    }
  }

  //   Adjusting other faces
  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceUp[0][x]);
    faceUp[0][x] = faceLeft[cubeSize - 1 - x][0];
    faceLeft[cubeSize - 1 - x][0] = faceDown[cubeSize - 1][cubeSize - 1 - x];
    faceDown[cubeSize - 1][cubeSize - 1 - x] = faceRight[x][cubeSize - 1];
    faceRight[x][cubeSize - 1] = tempArr[x];
  }

  //   ########### END OF MOVE: B ################
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveB;
