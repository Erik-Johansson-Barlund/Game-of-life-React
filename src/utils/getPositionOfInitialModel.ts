
function getPositionOfInitialModel(model: number[][], size: number) {
  if (model.length > 0) {
    const modelToPad = JSON.parse(JSON.stringify(model));

    const firstNodeOnSide = modelToPad.reduce((acc: number, node: number[]) => {
      if (node.length > 0 && node[0] < acc) {
        return node[0]
      }
      return acc
    }, size);

    const lastNodeOnSide = modelToPad.reduce((acc: number, node: number[]) => {
      if (node[0] > acc) {
        return node[node.length - 1]
      }
      return acc
    }, 0);

    const paddingOnSide = (size / 2) - (lastNodeOnSide - firstNodeOnSide);
    const paddingOnTop = (size - modelToPad.length) / 2;

    for (const element of modelToPad) {
      for (let j = 0; j < element.length; j++) {
        element[j] = element[j] + Math.ceil(paddingOnSide);
      }
    }

    for (let i = 0; i < paddingOnTop; i++) {
      modelToPad.unshift([])
    }

    return modelToPad
  }
}

export default getPositionOfInitialModel;
