import './Node.css';

type NodeProps = {
  row: number
  col: number
  active: boolean
  update: ({ row, col, fromGameLoop }: { row: number, col: number, fromGameLoop: boolean }) => void
}

function Node({ row, col, active, update }: NodeProps) {
  return (
    <div
      className="node"
      onMouseEnter={() => {
        update({ row, col, fromGameLoop: false })
      }}
      onMouseDown={() => {
        setTimeout(() => {
          update({ row, col, fromGameLoop: false });
        }, 0)
      }}
      style={{ backgroundColor: active ? 'black' : 'rgb(179, 177, 177)' }}
    >

    </div>
  )
}

export default Node