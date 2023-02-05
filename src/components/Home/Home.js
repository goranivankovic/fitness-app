import React, { Component } from 'react'
import run from '../../video/run.mp4'
import wave from '../../img/wave.png'
import homeStyles from '../../Styles/Home.module.css'
import {AiOutlineApple} from 'react-icons/ai'
import {Button} from 'react-bootstrap'


export default class Home extends Component {
    constructor(){
        super()
    

   
    }






    render() {
   


        return (
            <div id='home' className={homeStyles.main}>
          <div>
                <video src={run}  type="video/mp4" autoPlay={true} muted={true} loop={true}></video>
                
             

                 <div className={homeStyles.textDiv}>

                     <div className={homeStyles.textDiv_headline}>Online personal training</div>

                     <div className={homeStyles.textDiv_mideleText}>Start your journey today with a one week free trial</div>

                   <button className={homeStyles.textDiv_button}> <AiOutlineApple className={homeStyles.apple} style={{marginRight:"10px"}} />  App Store </button>

                 </div>

               
            </div> 
               
           
       
            </div>
        )
    }
}
