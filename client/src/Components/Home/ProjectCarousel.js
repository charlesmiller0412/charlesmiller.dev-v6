import React from "react";
import Images from "../../assets/Images";
import { Swiper, SwiperSlide } from "swiper/react";

// import { Carousel } from "react-responsive-carousel";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";

export default function ProjectCarousel() {
    return (
        <div id="projectCarousel">
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={"3"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={Images.projects.weather}
                        alt="Weather App Preview"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Images.projects.insure} alt="Insure Website" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Images.projects.productPreview}
                        alt="Product Preview Component"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Images.projects.expenseChart}
                        alt="Expense Chart Application"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Images.projects.profileCard}
                        alt="Profile Card Component"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Images.projects.dutchBros}
                        alt="Dutch Bros UX/UI Study"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
