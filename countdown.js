

export const CountDown = () => {

    const [milliSeconds, setMilliSeconds] = useState(7200000);

    let theTime = {};


    const interval = setInterval(() => {
        setMilliSeconds(milliSeconds - 1000);

        theTime = {
        hour: Math.floor((milliSeconds / (1000 * 60 * 60)) % 24),
        minutes : Math.floor((milliSeconds / 1000 / 60) % 60),
        seconds : Math.floor((milliSeconds / 1000) % 60)
    }
    }, 1000)

    const {hour, minutes, seconds} = theTime;

    
    console.log(`${hour}: ${minutes}: ${seconds}`);
}