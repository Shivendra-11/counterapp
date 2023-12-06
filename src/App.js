import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);


function decHandler(props){
   setCount(count-1);
}

function incHandler(props){
  setCount(count+1);
}

function reHandler(){
  setCount(0);
}




  return (
     <div className='w-[100vw] h-[100vh]  flex justify-center items-center flex-col gap-10 bg-[#344151]   ' >
     <div  className='text-[#0398d4] text-2xl ' >  Increment And Decrement</div>
     <div>
  <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px]
   ' >
      <button onClick={decHandler}  className="border-r-2 text-center  w-20  border-[#bfbfbf]  text-5xl " >
        -
      </button  >
      <div  className='font-bold gap-12  text-5xl
       ' >
    {count}
      </div>
      <button onClick={incHandler}  className="border-r-2 text-center  w-20  border-[#bfbfbf]  text-5xl "  >

        +

      </button>

     </div>
     <button onClick={reHandler}   className="border-e-red-600 text-xl  text-center text-white mx-36 bg-blue-500 p-3 my-4 " >
Reset
     </button>
     </div>
     </div>
  );
}

export default App;
