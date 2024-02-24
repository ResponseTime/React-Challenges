import './App.css'
import { useEffect, useRef, useState } from 'react'
function App() {

const [rotation, setrotation] = useState("")
const [rotation1, setrotation1] = useState("")
const dir1 = useRef(null)  
const dir2 = useRef(null)
  
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let x = (e.pageX - dir1.current.getBoundingClientRect().left)/30+"px";
      let y = (e.pageY - dir1.current.getBoundingClientRect().top)/30+"px";
      let x1 = (e.pageX - dir2.current.getBoundingClientRect().left)/30+"px";
      let y1 = (e.pageY - dir2.current.getBoundingClientRect().top)/30+"px";
      setrotation(`translate3d(${x},${y},0px)`)
      setrotation1(`translate3d(${x1},${y1},0px)`)
    })
  },[])
  return (
    <div className='eye-container'>
      <div className='eye1'>
        <div className='eye-ball' style={{position:"absolute",transform:rotation}} ref={dir1}>

        </div>
      </div>
      <div className='eye2'>
        <div className='eye-ball1' style={{position:"absolute",transform:rotation1}} ref={dir2}>
        </div>
      </div>
    </div>
  )
}

export default App
