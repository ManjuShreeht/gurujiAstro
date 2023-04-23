import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css";
import slide_image_1 from '../../images/pic1.png';
import slide_image_2 from '../../images/pics.png';
import slide_image_3 from '../../images/pic3.png';
import bb from '../../images/bb.png'

import sun from '../../images/sun.png'
import star from '../../images/star.png'
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



function Slide() {
    return (
        <div className="container">
          <div className="title_wrapper">
            <div className="reactLogo">
              <img src={sun} />
            </div>
            <div className="title_">
            <h3 className='chakra-h3'><tt><span ><img className='star' src={star} /></span>User Testimonial<span><img className='star1' src={star} /></span></tt></h3>
   
            </div>
          </div>
          <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slide_image_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3}/>
            </SwiperSlide>
          <div className="ss">
            <img src={bb} />
           </div>
          </Swiper>
        </div>
      );
    }


export default Slide