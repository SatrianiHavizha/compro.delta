import React, {useEffect, useState} from 'react'

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(()=>{

        const handleScroll = ()=>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;


            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100

            setScrollPercentage(scrollPercent)
            console.log(scrollPercent)
        }



        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }

    },[ ])

  return (
    <div id='progress-container' style={{ 
        height:"7px",
        width:"100%",
        backgroundColor:"transparant",
        position:"fixed"
     }}>
        <div className='progress-fill'
        style={{ 
            height:"100%",
            backgroundColor:"#00a3db",
            width: `${scrollPercentage}%`,
         }}></div>
    </div>
  )
}

export default ProgressBar