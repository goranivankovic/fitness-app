import React from 'react'
import traningStyle from '../../Styles/Traning.module.css'
import womenBlue from '../../img/traningWomen.png'
import smile from '../../img/traningSmile.png'
import wave from '../../img/wave.png'

function Traning() {
  return (
    <div className={traningStyle.main} id="traning">

        <div className={traningStyle.first_div_headline}
         data-aos="fade-up"
         data-aos-delay="250"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="true"
        >
            Training Program

        </div>

        <div className={traningStyle.secondDiv}>


            <div className={traningStyle.secondDiv_text_container}
             data-aos="fade-up"
             data-aos-delay="750"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
            >

                <div className={traningStyle.secondDiv_text_container_headline}>
                The women behind theBody

                </div>


                <div className={traningStyle.secondDiv_text_container_main_text}>
                "I started my journey handing out flyers at my local train station, trying to get customers for my bootcamps in the park. Ten years and 600,000 clients later, I can hardly believe how amazing that journey has been.
                <br></br>

              Along the way I've learned so much about why people succeed at getting and staying fit, healthy and happy. And I feel so lucky that I can put all that experience into this app.

                </div>


                <img src={smile} alt='smile' className={traningStyle.secondDiv_text_container_bottom_image}
                 data-aos="fade-up"
                 data-aos-delay="1250"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 />




            </div>






            <img src={womenBlue} alt="women traning" className={traningStyle.secondDiv_image_container}
             data-aos="fade-up"
             data-aos-delay="1750"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             />

        </div>


       <img src={wave} alt="wave" className={traningStyle.wave} />

    </div>
  )
}

export default Traning