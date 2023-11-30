import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('/todo');
  };


  return (
    <div className='mainDiv flex flex-col'>


      <div className=' flex justify-between'>
        <div className='logo'>
          <img className= "w-16 h-16 mx-4 mt-2" src="https://www.youpro.store/static/media/todo-logo.a5354be7.png" alt="" />
      </div>  
      <div className='button'>
        <button onClick={handleButtonClick} className='border-blue-400 border font-bold mt-4 mx-6 p-2 px-6 text-blue-500 rounded-2xl'>LogIn</button>
      </div>
      </div>

      <div className='body'>

        <div className='h1 my-28 md:my-12'>
        <div className=' font-bold text-3xl sm:text-6xl flex justify-center items-center '>
        One simple to do list for 
        </div>
        <div className='font-bold text-3xl sm:text-6xl flex justify-center items-center'>
        you and your team
        </div>
        </div>

        <div className='h2 flex flex-col justify-center'>
          <div className='flex justify-center md:text-lg  text-gray-500'>
          So many people organize their tasks, lists and manage 
          </div>
          <div className='flex justify-center md:text-lg   text-gray-500'>
          their team's projects
          </div>
        </div>

        <div className='flex justify-center'>
          <button 
          onClick={handleButtonClick}
          className=' py-4 px-12 rounded-full bg-blue-500 text-white font-bold mt-28 md:mt-12 flex gap-4 items-center'>Get Started  <FaArrowRightLong /></button>
        </div>
        
        </div>  {/* body */}
      
    </div> //main div
  );
}


export default LandingPage;
