const moveL = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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

  for (let x = 0; x < cubeSize; x++) {
    tempArr.push(faceFront[x][0]);
    faceFront[x][0] = faceDown[x][0];
    faceDown[x][0] = faceBack[cubeSize - 1 - x][cubeSize - 1];
    faceBack[cubeSize - 1 - x][cubeSize - 1] = faceUp[x][0];
    faceUp[x][0] = tempArr[x];
  }

  //   ####### END OF MOVE: L #############
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveL;
