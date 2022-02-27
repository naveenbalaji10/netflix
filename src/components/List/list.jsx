import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React,{useRef} from 'react'
import { useState } from 'react'
import ListItem from '../ListItem/ListItem'
import './list.scss'



const List = () => {
    
    const [isScrolled,setIsScrolled]=useState(false)
    const [slideNumber,setSlideNumber]=useState(0)
     
     const ListRef=useRef()

     const handleClick=(direction)=>{ 
         let distance=ListRef.current.getBoundingClientRect().x - 50 
         if (direction === "left" && slideNumber > 0){
             setSlideNumber(slideNumber-1)
            ListRef.current.style.transform=`translateX(${350 + distance +5}px)`
         }

         if (direction === "right" && slideNumber < 5){
             setIsScrolled(true)
             setSlideNumber(slideNumber +1)
            ListRef.current.style.transform=`translateX(${-350 + distance -5}px)`
         }
     }

  return (
    <div className='list'>
        <span className='title'>Continue to watch</span>
        <div className='wrapper'>
            <ArrowBackIosOutlined className='Arrow left' onClick={()=>handleClick("left")} style={{ display: !isScrolled && "none"}}/>
            <div className='container' ref={ListRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2} />
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                
            </div>
            <ArrowForwardIosOutlined className='Arrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List