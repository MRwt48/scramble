const moveDInverse = (
  faceUp: any[],
  faceDown: any[],
  faceFront: any[],
  faceBack: any[],
  faceLeft: any[],
  faceRight: any[],
  cubeSize: number
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
  tempArr = faceFront[cubeSize - 1].map((block: string) => block);
  faceFront[cubeSize - 1] = faceRight[cubeSize - 1].map(
    (block: string) => block
  );
  faceRight[cubeSize - 1] = faceBack[cubeSize - 1].map(
    (block: string) => block
  );
  faceBack[cubeSize - 1] = faceLeft[cubeSize - 1].map((block: string) => block);
  faceLeft[cubeSize - 1] = tempArr.map((block: string) => block);

  //   Cleanup
  temp = "";
  tempArr = [];

  //   ################ END OF MOVE: D' ###################
  return [faceUp, faceDown, faceFront, faceBack, faceLeft, faceRight];
};

export default moveDInverse;
