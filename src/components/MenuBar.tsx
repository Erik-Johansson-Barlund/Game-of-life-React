import { Dispatch, SetStateAction } from 'react'

type MenuBarProps = {
  gameIsOn: boolean
  setGameLoop: Dispatch<SetStateAction<boolean>>
  setStartingModel: Dispatch<SetStateAction<number[][]>>
}

function MenuBar({ gameIsOn, setGameLoop, setStartingModel }: MenuBarProps) {
  return (
    <div className="flex">
      {!gameIsOn ? (
        <button onClick={() => {
          setGameLoop(true)
        }}>Play</button>
      ) : (
        <button onClick={() => {
          setGameLoop(false)
        }}>Pause</button>
      )}
      <button onClick={() => {
        setGameLoop(false);
        setStartingModel([[]]);
      }}>Clear</button>
    </div>
  )
}

export default MenuBar;