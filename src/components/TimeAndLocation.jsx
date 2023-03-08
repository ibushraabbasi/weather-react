import React from 'react'

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
            Time , 08 March 2023 | Local time: 12: 46 pm
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
         <p className="text-white text text-3xl font-medium">Istanbul, TR</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
