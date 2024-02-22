import { useState } from 'react'
import './App.css'

function App() {
  type Tpoint = {
    x: number,
    y: number
  }
  const [points, setpoints] = useState<Tpoint[]>([])
  const [popped, setpopped] = useState<Tpoint[]>([])
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>)=>{
    setpoints([...points,{x:event.clientX,y:event.clientY}])
  }

  const undo = ()=>{
    const nPoints = [...points]
    const pop = nPoints.pop()
    if(!pop){return}
    setpopped([...popped,pop])
    setpoints(nPoints)
  }

  const redo = ()=>{
    const pop = popped.pop()
    if(!pop){return}
    setpoints([...points,pop])
    setpopped([...popped])
  }
  return (
    <>
    <button onClick={undo}>Undo</button> 
    <button onClick={redo}>Redo</button>
    <div className='App' onClick={handleClick}>
      {points.map((point:any)=>{
        return <div style={{top:point.y+"px", left:point.x+"px", width:"50px",height:"50px",borderRadius:"100px",backgroundColor:"red",position:"absolute"}}></div>
      })}
    </div>
    </>
  )
}

export default App
