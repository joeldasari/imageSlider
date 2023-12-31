import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import { useState } from "react";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
const App = () => {
  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
  ];

  const [index, setIndex] = useState(0);
  const rightClick = () => {
    if(index < slides.length - 1){
      setIndex((prev) => prev + 1);
    }
    else{ 
      setIndex(0)
    }
  }
  const leftClick = () => {
    if(index !== 0){
      setIndex((prev) => prev - 1)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-2">
      <p className="text-2xl font-semibold">SUPER HEROS</p>
      <div style={{backgroundImage: `url(${slides[index].url})`}} className="group w-[720px] h-[480px] max-sm:w-[340px] max-sm:h-[200px] bg-cover bg-center rounded-2xl duration-500">
      <BsChevronCompactLeft onClick={leftClick} size={30} className=" bg-black/50 text-white rounded-full p-1 hover:cursor-pointer absolute top-[40%] left-[28%] max-sm:top-[15%]  max-sm:left-[12%]" />
      <BsChevronCompactRight onClick={rightClick} size={30} className=" bg-black/50 text-white rounded-full p-1 hover:cursor-pointer absolute top-[40%] right-[28%] max-sm:top-[15%]  max-sm:right-[12%]"/>
      </div>  
    </div>
  );
};

export default App;
