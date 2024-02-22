import { useState } from "react"

type TreeEntry = {
  name: string,
  children?: TreeEntry[]
}
const TreeItem = ({ entry, depth }: { entry: TreeEntry, depth: number }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      {entry.children ? <button onClick={() => setExpanded(!expanded)}>{expanded ? "-" : "+"}{entry.name}</button> : <div>{entry.name}</div>}
      <div style={{ paddingLeft: `${depth * 10}px` }}>
        {expanded && entry.children?.map((entry) => {
          return <TreeItem entry={entry} depth={depth + 1} />
        })}
      </div>
    </div>
  )
}

export default TreeItem
