const moveU = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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
  tempArr = faceFront[0].map((block: string) => block);
  faceFront[0] = faceLeft[0].map((block: string) => block);
  faceLeft[0] = faceBack[0].map((block: string) => block);
  faceBack[0] = faceRight[0].map((block: string) => block);
  faceRight[0] = tempArr.map((block: string) => block);

  //   ###### END OF MOVE: U #############

  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveU;
