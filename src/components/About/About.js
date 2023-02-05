import React from 'react'
import aboutStyles from '../../Styles/About.module.css'
import slikaBackground from '../../img/about.png'

import womenPhone from '../../img/aboutPhone.png'








function About() {
  return (
    <div className={aboutStyles.main} id="about">  
     
      <div className={aboutStyles.first_div}>



        <div className={aboutStyles.first_div_headline}> 
        Welcome to the body App

        </div>

        <div className={aboutStyles.first_div_3items}>
          <div className={aboutStyles.first_div_3items_item1}><a href="#health">HEALTH</a></div> 
          <div><a href="#traning">TRANING & BENEFITS</a> </div>
          <div><a href="#app">PRICING</a> </div>

        </div>


      </div>


      <div className={aboutStyles.secondDiv}>

       <div className={aboutStyles.secondDiv_first_box}>

         <div className={aboutStyles.secondDiv_first_box_headline}>
         Exclusive LIVE workouts every week

         </div>

         <div className={aboutStyles.secondDiv_first_box_main_text}>
         Whatever level of fitness you're at, tune in for weekly LIVE workouts .  Made exclusively for app users, all you have to do is press play and let take you through the rest.

         </div>

       </div>


       <img src={womenPhone} alt='women workout' className={aboutStyles.secondDiv_second_box} />

        </div>


   

      
        <div className={aboutStyles.empty}></div>




    </div>
  )
}

export default About