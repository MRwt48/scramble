const moveUw = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number,
  wide: number
) => {
  //   ########## MOVE: U #############
  // Rotate faceUp by -90deg
  let tempArr = [];
  let k = 0;
  let temp;
  for (let i = 0; i < cubeSize; i++)
    for (let j = i; j < cubeSize; j++) {
      temp = faceUp[i][j];
      faceUp[i][j] = faceUp[j][i];
      faceUp[j][i] = temp;
    }

  for (let i = 0; i < cubeSize; i++) {
    k = cubeSize - 1;
    for (let j = 0; j < k; j++) {
      temp = faceUp[j][i];
      faceUp[j][i] = faceUp[k][i];
      faceUp[k][i] = temp;
      k--;
    }
  }

  //   Adjusting other faces
  for (let m = 0; m < wide; m++) {
    tempArr = [];
    tempArr = faceFront[m].map((block: string) => block);
    faceFront[m] = faceLeft[m].map((block: string) => block);
    faceLeft[m] = faceBack[m].map((block: string) => block);
    faceBack[m] = faceRight[m].map((block: string) => block);
    faceRight[m] = tempArr.map((block: string) => block);
  }

  //   ###### END OF MOVE: U #############

  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveUw;
