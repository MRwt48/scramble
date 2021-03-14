const moveLw = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ############# MOVE: L #############
  // Rotaing the faceLeft -90deg
  let tempArr = [];
  let k = 0;
  let temp;

  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceLeft[i][j];
      faceLeft[i][j] = faceLeft[j][i];
      faceLeft[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceLeft[j][i];
      faceLeft[j][i] = faceLeft[k][i];
      faceLeft[k][i] = temp;
      k--;
    }
  }

  //   Adjusting other faces
  for (let m = 0; m < wide; m++) {
    tempArr = [];
    for (let x = 0; x < cubeSize; x++) {
      tempArr.push(faceFront[x][m]);
      faceFront[x][m] = faceDown[x][m];
      faceDown[x][m] = faceBack[cubeSize - 1 - x][cubeSize - 1 - m];
      faceBack[cubeSize - 1 - x][cubeSize - 1 - m] = faceUp[x][m];
      faceUp[x][m] = tempArr[x];
    }
  }

  //   ####### END OF MOVE: L #############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveLw;
