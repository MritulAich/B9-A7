import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      {/* navbar */}
      <div className="flex flex-row justify-between mx-36 my-12">
        <h1 className='text-3xl font-bold text-[#150B2B]'>Recipe Factory</h1>
        <div className="flex flex-row gap-12">
          <button>Home</button>
          <button>Recipes</button>
          <button>About</button>
          <button>Search</button>
        </div>
        <div className="flex flex-row gap-4">
          <label className="input input-bordered flex items-center gap-2 rounded-3xl bg-slate-100">
            <img src="../icons/Frame (1).svg" />
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button><img className='bg-green-300 rounded-3xl' src="../icons/Frame (2).svg" /></button>
        </div>
      </div>

      {/* banner */}
      <div className="hero"><img src="../public/icons/Rectangle 1.png" />
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-6 mx-52 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-8">Explore the art of cooking with our diverse classes. From kitchen to seasoned chefs,<br /> unlock your cooking potential today!</p>
            <button className="btn btn-success rounded-3xl text-lg font-semibold mr-6">Explore Now</button>
            <button className="btn glass rounded-3xl text-lg font-semibold text-white">Our Feedback</button>
          </div>
        </div>
      </div>

      {/* Our Recipes */}
      <div className="text-center mb-12">
        <h1 className='text-4xl font-semibold mt-24 mb-6 text-[#150B2B]'>Our Recipes</h1>
        <p>Dive into a treasure trove of mouthwatering recipes curated by our experts. From quick meals to elaborate <br />feasts, find inspiration for every occasion.</p>
      </div>
    </>
  )
}

export default App
