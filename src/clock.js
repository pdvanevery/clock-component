import React, { useState, useEffect } from 'react'


function Clock() {
    //State of clock
    const [time, setTime] = useState('')


    //Add '0' if the value is a one digit number
    function formatTime(val) {
        if(val<10) {
            return '0'
        } else {
            return '0'
        }
    }

    //Set interval for clock tick function
    useEffect(() => {
        //Interval 
        const timerID = setInterval(
            () => tick(), 1000)

        //Cleanup
        return function cleanup() {
            clearInterval(timerID)
        }
    })

    //Tick function
    function tick() {
        //data variables
        const d = new Date()
        const h = d.getHours()
        const m = d.getMinutes()
        const s = d.getSeconds()

        //Set the state to the formatted time
        setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s)
    }

  return (
    <div>clock</div>
  )
}

export default Clock