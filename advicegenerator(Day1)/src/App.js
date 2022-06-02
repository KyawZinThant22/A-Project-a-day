import './App.css';
import DesktopDivider from "./assets/pattern-divider-desktop.svg"
import Button from "./assets/icon-dice.svg"
import { useEffect, useState } from 'react';

function App() {

  const ramdomId = Math.floor(Math.random() * 1000)
  const [response , setResponse] = useState("")
  const [ready , setReady] = useState(false)

  const FetchData = async () => {
    setReady(false)
    try {

      setReady(true)
      const data = await fetch('https://api.adviceslip.com/advice')
       .then(res => res.json())
       .then(res => setResponse(res.slip))

       setReady(false)
       

       
      }catch (err) {
        alert(`Error ${err.message}`);
      }
    }
    

    useEffect(() => {
      FetchData()
    },[])


  return (
    <div className='h-screen bg-DarkBlue flex justify-center align-middle items-center'>

      <div className='bg-DarkGrayishBlue p-10 lg:w-1/4  w-50 m-3 md:m-0 rounded-lg text-center   relative'>
          
          <span className='text-NeonGreen tracking-widest text-sm  '>ADVICE</span>
           <span className='text-NeonGreen text-sm ml-5'># {!ready &&response.id}</span>

       { !ready && ( <div className={`text-LightCyan text-1xl my-6 font-bold`}>
             <q>{response.advice}</q>
          </div>
        )}

          {ready && <div className='spinner mx-auto my-10'></div> }

            <div  className='mb-[2rem] w-full'>
                <img src={DesktopDivider}  alt="line divider" /> 
            </div>

          <button onClick={FetchData}  className='bg-NeonGreen p-5   md:left-[230px] left-[150px] rounded-full absolute lg:left-[203px]  z-10'><img src={Button} alt="dice-icon" /></button>

      </div>
      
    </div>
  );
}

export default App;
