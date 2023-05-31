import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setNum(num => num + 1);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

  return (
    <div>
        {num}
    </div>
  )
}

export default Counter;