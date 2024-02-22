import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [table, setTable] = useState(new Array(new Array(3).fill(''), new Array(3).fill(''), new Array(3).fill('')))
  const [score, setscore] = useState(0);
  useEffect(() => {
    let i = setInterval(() => {
      const rand1 = Math.floor(Math.random() * 3)
      const rand2 = Math.floor(Math.random() * 3)
      setTable(prev => {
        const newTable = [...prev];
        newTable[rand1][rand2] = "X";
        return newTable;
      });
      setTimeout(() => {
        setTable(prev => {
          const newTable = [...prev];
          if (newTable[rand1][rand2] === "X") {
            newTable[rand1][rand2] = <>&nbsp;</>;
          }
          return newTable;
        });
      }, 1000);
    }, 1000)
    return () => {
      clearInterval(i)
    }
  }, [])
  const handle = (e: any) => {
    if (e === "X") {
      setscore(prev => prev + 1)
    }
  }
  return (
    <>
      <h1>{score}</h1>
      <table style={{ height: "50vh", width: "50vw" }}>
        {table.map((e) => {
          return <tr >
            {
              e.map((er) => {
                return (
                  <button onClick={() => { handle(er) }}>{er}</button>
                )
              })}
          </tr>
        })}
      </table>
    </>
  )
}

export default App
