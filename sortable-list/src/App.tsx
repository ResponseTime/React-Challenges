import {useEffect,useState } from 'react'
import './App.css'

function App() {
  const [list, setlist] = useState([32,5,6,1,4,6,6,1,43,1,3,40,0,2,1,41,4])
 useEffect(() => {
    const sortArray = async () => {
        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i] > list[j]) {
                    let tmp = list[i];
                    list[i] = list[j];
                    list[j] = tmp;
                    await new Promise(resolve => setTimeout(resolve, 1000)); 
                    setlist([...list]);
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
