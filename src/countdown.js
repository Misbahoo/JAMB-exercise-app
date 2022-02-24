import React, {useState, useEffect} from 'react';

const Countdown = ({twoHours}) => {

            const [theTime, setTheTime] = useState({hours: 0, minutes: 0, seconds: 0})

            useEffect(() => {
                
                let theInterval = setInterval(() => {
                    twoHours = twoHours - 1000;                    
                    setTheTime({
                    hours: Math.floor((twoHours / (1000 * 60 * 60)) % 24),
                    minutes : Math.floor((twoHours / 1000 / 60) % 60),
                    seconds : Math.floor((twoHours / 1000) % 60)
                })
                   
          }, 1000)
        
        return () => (clearInterval(theInterval))

        }, [])
           
                
            return (
                <div className="w-96 rounded-lg m-10 flex flex-row">
                    <span className="text-xl px-2 py-5 font-mono text-gray-500">Your time ends in: </span><p className="text-xl text-center font-mono text-gray-500 py-5">{theTime.hours < 10 ? "0"+theTime.hours: theTime.hours}:{theTime.minutes < 10 ? "0"+theTime.minutes : theTime.minutes}:{theTime.seconds < 10 ? "0"+theTime.seconds : theTime.seconds}</p>
                </div>
            )
}


export default Countdown;