import { useEffect, useRef, useState } from 'react';
import './App.css';
import Node from './components/Node';
import getNeightbors from './utils/getNeighbors';
import getPositionOfInitialModel from './utils/getPositionOfInitialModel';
import { titleScreen } from './utils/models';
import MenuBar from './components/MenuBar';

const sizes = {
  small: 3000,
  medium: 8000,
  large: 12000,
  huge: 31000,
};

export type NodeType = {
  row: number
  col: number
  active: boolean
  update: () => void
  node: JSX.Element
};

function App() {
  const [gridSize, setGridSize] = useState('');
  const [matrix, setMatrix] = useState<NodeType[][]>([]);
  const [startingModel, setStartingModel] = useState<number[][]>(titleScreen);
  const [gameLoop, setGameLoop] = useState(false);
  const drawRef = useRef(false);
  const gameRef = useRef(false);
  const size = sizes.medium;

  function buildNode(row: number, col: number, active: boolean) {
    const obj: NodeType = {
      row,
      col,
      active,
      update,
      node: <></>
    };
    obj.node = <Node
      key={'row-' + row + '-col-' + col}
      row={row}
      col={col}
      active={obj.active}
      update={update}
    />;
    return obj;
  };

  /**
   * This function runs once every game loop interval
   */
  function update({ row, col, fromGameLoop }: { row?: number, col?: number, fromGameLoop: boolean }) {
    if (!fromGameLoop && !drawRef.current) {
      return;
    }
    setMatrix((old) => {
      if (drawRef.current && !gameRef.current) {
        if (row === undefined || col === undefined) {
          return old;
        }
        const newArr = old.map((rowArr: NodeType[]) => rowArr.slice());
        const obj = buildNode(row, col, !newArr[row][col].active);
        newArr[row][col] = obj;
        return newArr;
      }

      const newArr = old.map((rowArr: NodeType[]) => [...rowArr]);

      // Perform all calculations for every node in the matrix
      for (let i = 0; i < old.length; i++) {
        for (let j = 0; j < old[i].length; j++) {
          const neighbors = getNeightbors(i, j, old);

          // if the current cell is not active
          if (!old[i][j].active) {
            if (neighbors.length === 3) {
              const obj = buildNode(i, j, true);
              newArr[i][j] = obj;
            }
          } else { // if cell is active
            if (neighbors.length !== 2 && neighbors.length !== 3) {
              const obj = buildNode(i, j, false);
              newArr[i][j] = obj;
            }
          }
        }
      }

      return newArr;
    });
  }

  /**
   * Set up the matrix on app load
   */
  useEffect(() => {
    window.addEventListener('mousedown', () => {
      drawRef.current = true;
    })
    window.addEventListener('mouseup', () => {
      drawRef.current = false
    })
    const squareRoot = Math.round(Math.sqrt(size))
    const renderMatrix = [];
    const initialModel = getPositionOfInitialModel(startingModel, squareRoot)
    for (let row = 0; row < squareRoot; row++) {
      const renderGrid = [...Array(squareRoot)].map(function (_, col) {
        const obj = buildNode(row, col, initialModel[row]?.find((x: number) => x === col))
        return obj;
      });

      renderMatrix.push(renderGrid)
    }

    setMatrix(renderMatrix)
    setGridSize([...Array(Math.round(Math.sqrt(size)))].map(() => '1fr ').join(''))
  }, [startingModel])

  /**
   * Play and pause the game
   */
  useEffect(() => {
    if (gameLoop) {
      gameRef.current = true;
      const interval = setInterval(() => {
        update({ row: undefined, col: undefined, fromGameLoop: true })
      }, 70);

      return () => clearInterval(interval);
    } else {
      gameRef.current = false;
    }

  }, [gameLoop])

  return (
    <>
      <MenuBar
        gameIsOn={gameLoop && !!gameRef.current}
        setGameLoop={setGameLoop}
        setStartingModel={setStartingModel}
      />
      <div className="game_grid" style={{
        gridTemplateColumns: `${gridSize}`,
        gridTemplateRows: `${gridSize}`,
      }}>
        {matrix.flat().map((node) => node.node)}
      </div>
    </>
  )
}

export default App
