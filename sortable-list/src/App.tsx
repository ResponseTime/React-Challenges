import {useEffect,useState } from 'react'
import './App.css'

function App() {
  const [list, setlist] = useState([32,5,6,1,4,6,6,1,43,1,3,40,0,2,1,41,4])
 useEffect(() => {
    let nlist = [...list];
    let swapped = true; 

    const sortArray = async () => {
        for (let i = 0; i < nlist.length && swapped; i++) {
            swapped = false; 
            for (let j = i + 1; j < nlist.length; j++) {
                if (nlist[i] > nlist[j]) {
                    let tmp = nlist[i];
                    nlist[i] = nlist[j];
                    nlist[j] = tmp;
                    swapped = true; 
                    await new Promise(resolve => setTimeout(resolve, 1000)); 
                    setlist([...nlist]);
                }
            }
        }
    };

    sortArray();
}, [list]);

  return (
    <div className='sort-holder'>
      {list.map((val)=>{
        return <div style={{height:val+100+"px",width:"20px",backgroundColor:"red",margin:"2px"}}>{val}</div>
      })}
    </div>
  )
}

export default App
