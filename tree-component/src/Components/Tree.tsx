import TreeItem from './TreeItem'
import root from "../root.json"
const Tree = () => {
  return (
    <div style={{ padding: "10px" }}>
      {root.children.map(entry => {
        return <TreeItem entry={entry} depth={1} />
      })}
    </div>
  )
}

export default Tree
