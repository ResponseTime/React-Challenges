import './App.css'
import {useEffect, useRef, useState} from 'react'
import ques from "./ques.json"

function App() {
  const [qnum, setqnum] = useState(0)
  const [ans, setans] = useState("")
  const [score, setscore] = useState(0)
  const ref:any = useRef(null)
  useEffect(()=>{
    ref.current.childNodes.forEach((element:any) => { 
    element.addEventListener("mouseenter",()=>{
        element.style.fontWeight = "bolder"
    })
    element.addEventListener("mouseleave",()=>{ 
        element.style.fontWeight = "normal"
    })
    });
    return ()=>{
    ref.current.childNodes.forEach((element:any) => { 
    element.removeEventListener("mouseenter",()=>{
        element.style.fontWeight = "bolder"
    })
    element.removeEventListener("mouseleave",()=>{ 
        element.style.fontWeight = "normal"
    })
    });
    }
  },[])
  const handle = (val:string,event:any)=>{
    ref.current.childNodes.forEach((element:any) => { 
      if(element.style.backgroundColor=="gray"){
        element.style.backgroundColor = "white"
      }
    });
    event.currentTarget.style.backgroundColor = "gray"
    setans(val)
  }
  const checkAns = ()=>{
    if (ans === ques[qnum].correct){  
    ref.current.childNodes.forEach((element:any) => { 
      if(element.style.backgroundColor=="gray"){
        element.style.backgroundColor = "white"
      }
    });
      setans("")
      setscore(score+1)
      setqnum(qnum + 1)
    }
    else{
      setscore(score-1)
      alert("Wrong Ans "+ ans)
    }
  }
  if(qnum>=ques.length){
    return <h1>Quiz Ended Score Is {score}</h1>
  }
  return (
    <>
      <div className='ques-box'>
       {ques[qnum].question}
       <div className='options' ref={ref}>
          {ques[qnum].options.map((val,i)=>{
            return <p style={{padding: '20px'}} onClick={(e)=>{handle(String(val),e)}}>{i+1 + "," +val}</p>
          })}
        </div>
        <div className='footer'>
            <p>Postpone</p>
          <button onClick={checkAns}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
