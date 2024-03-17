import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
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
        <button><img className='bg-green-300 rounded-3xl' src="../icons/Frame (2).svg"/></button>
        </div>
      </div>
    </>
  )
}

export default App
