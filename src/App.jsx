import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import { useState } from "react";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
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
    {
      url: img5,
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

  const changeSlide = (slideIndex) => {
    setIndex(slideIndex)
  } 
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-2">
      <p className="text-2xl font-semibold max-sm:text-xl">SUPER HEROS</p>
      <div style={{backgroundImage: `url(${slides[index].url})`}} className="w-[720px] h-[480px] max-sm:w-[340px] max-sm:h-[200px] bg-cover bg-center rounded-2xl duration-500 flex items-center px-6 space-x-[640px] max-sm:px-2 max-sm:space-x-[290px]">
      <BsChevronCompactLeft onClick={leftClick} size={30} className=" bg-black/50 text-white rounded-full p-1 hover:cursor-pointer absolute" />
      <BsChevronCompactRight onClick={rightClick} size={30} className=" bg-black/50 text-white rounded-full p-1 hover:cursor-pointer absolute"/>
      </div>
      <div className="flex">
        {slides.map((slideItem,slideIndex) => (
          <RxDotFilled key={slideIndex} onClick={() => changeSlide(slideIndex)} className="text-2xl cursor-pointer"/>
        ))}
      </div>
    </div>
  );
};

export default App;
