

import React,{useState} from 'react'

import navStyles from '../../Styles/Nav.module.css'




import {AiOutlineBars} from 'react-icons/ai'
import {BiFootball} from 'react-icons/bi'







function Nav() {

    const[laz,setLaz]=useState(false)


    function navBar(){

    setLaz(!laz)

  }

  return (

       
    <div>
     
        <div className={navStyles.main}>

            <div className={navStyles.logo}>theBody</div> 
 
            <ul className={navStyles.navItems}>

                <a href="#home">Mission</a> 
                 <a href="#about">About</a>  
                 <a href="#health">Health</a> 
                 <a href="#traning">Traning</a> 
                 <a href="#app">App</a>  
                 <a href="#contact">Contact</a>

              
             

            </ul>

        </div>
   

  <AiOutlineBars  className={navStyles.bar} onClick={navBar}/>

 
            
             {laz ?
    
            <div className={navStyles.main768} id="main768">


                <a onClick={navBar} href="#home">Mission</a> 
                 <a onClick={navBar} href="#about">About</a>  
                 <a onClick={navBar} href="#health">Health</a> 
                 <a onClick={navBar} href="#traning">Traning</a> 
                 <a onClick={navBar} href="#app">App</a>  
                 <a onClick={navBar} href="#contact">Contact</a>


           </div>
 :""}


        


    </div>
  
  )
}

export default Nav



