import React from 'react'
import healthStyle from '../../Styles/Health.module.css'
import frootsImage from '../../img/helth3.png'
import food1 from '../../img/food1.jpg'
import food2 from '../../img/food2.jpg'

function Health() {
  return (
    <div className={healthStyle.main} id="health">

        
      <div className={healthStyle.first_div_headline}
       data-aos="fade-up"
       data-aos-delay="250"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="true"
   
      >

                    Healthy Food

    
            </div>

            <div className={healthStyle.secondDiv}>

                <div className={healthStyle.secondDiv_image_container}
                 data-aos="fade-up"
                 data-aos-delay="750"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                >
                    <img src={food1} alt="fruits" className={healthStyle.secondDiv_image_container_image1}/>

                    <img src={food2} alt="fruits" className={healthStyle.secondDiv_image_container_image2}/>

                </div>


                <div className={healthStyle.secondDiv_text_container}
                 data-aos="fade-up"
                 data-aos-delay="1250"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                >
                    <div className={healthStyle.secondDiv_text_container_headline}>
                    Every meal tailored to you and your body

                    </div>


                    <div className={healthStyle.secondDiv_text_container_main_text}>
                    Big portions. Tasty recipes. No stressing about calorie counting and the freedom to go off plan now and then. Your meal plan is expertly personalised, updated with fresh recipes and portion sizes each cycle. With veggie, vegan and pescatarian versions now available.

                    </div>

                    </div>



            </div>

            <img src={frootsImage} alt="image fruits" className={healthStyle.fruits_image}
             data-aos="fade-up"
             data-aos-delay="1750"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             />
  

    </div>
  )
}

export default Health