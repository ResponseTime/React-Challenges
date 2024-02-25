import {useEffect,useState } from 'react'
import './App.css'

function App() {
  const [list, setlist] = useState([32,5,6,1,4,6,6,1,43,1,3,40,0,2,1,41,4])
  
  useEffect(() => {
    const sortArray = async () => {
      let nlist = [...list];
      for (let i = 0; i < nlist.length - 1; i++) {
        for (let j = 0; j < nlist.length - i - 1; j++) {
          if (nlist[j] > nlist[j + 1]) {
            let tmp = nlist[j];
            nlist[j] = nlist[j + 1];
            nlist[j + 1] = tmp;
            await new Promise((resolve) => setTimeout(resolve, 200));
            setlist([...nlist]);
          }
        }
      }
    };
    sortArray();
  }, []);
  
  return (
    <div className='sort-holder'>
      {list.map((val)=>{
        return <div style={{height:val+100+"px",width:"20px",backgroundColor:"red",margin:"2px"}}>{val}</div>
      })}
    </div>
  )
}

export default App
