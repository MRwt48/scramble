const moveDwInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ########## MOVE: D' ################
  // Rotating faceDown by -90deg
  let tempArr = [];
  let k = 0;
  let temp;
  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceDown[i][j];
      faceDown[i][j] = faceDown[j][i];
      faceDown[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceDown[j][i];
      faceDown[j][i] = faceDown[k][i];
      faceDown[k][i] = temp;
      k--;
    }
  }

  //   Adjusting other faces

  for (let m = 0; m < wide; m++) {
    tempArr = [];
    tempArr = faceFront[cubeSize - 1 - m].map((block: string) => block);
    faceFront[cubeSize - 1 - m] = faceRight[cubeSize - 1 - m].map(
      (block: string) => block
    );
    faceRight[cubeSize - 1 - m] = faceBack[cubeSize - 1 - m].map(
      (block: string) => block
    );
    faceBack[cubeSize - 1 - m] = faceLeft[cubeSize - 1 - m].map(
      (block: string) => block
    );
    faceLeft[cubeSize - 1 - m] = tempArr.map((block: string) => block);
  }

  //   ################ END OF MOVE: D' ###################
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveDwInverse;
