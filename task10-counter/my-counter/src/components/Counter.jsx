import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)


    const plusValue = () => {
        setCounter(counter + 1)
    }

    const minusValue = () => {
        setCounter(counter - 1)
    }




    return (
        <>



            <div className='grid justify-center mt-48'>

                <h1 className='font-bold bg-orange-200 mb-4'>Use of UseSatate | tailwind css </h1>

                <button onClick={plusValue} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increment</button>

                <span className="text-xl border border-black rounded-lg p-1 px-6 mb-4 mt-2">{counter}</span>

                <button onClick={minusValue} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
            </div>



        </>
    )
}

export default Counter
