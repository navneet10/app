import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FooterBrand() {
    return (
        <div className="slide-footer-brand footer-blue">
            <div className="slide-footer-brand-inner">
                <div className="slide-footer-brand-inner-2 bg-primary-1500">
                    <div className="container">
                        <div className="box-swiper">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={40}
                                slidesPerView={"auto"}
                                slidesPerGroup={1}
                                loop={true}
                                speed={6000}
                                centeredSlides={true}
                                allowTouchMove={false}
                                navigation={{
                                    nextEl: ".swiper-button-next-animate",
                                    prevEl: ".swiper-button-prev-animate",
                                    clickable: false,
                                }}
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    reverseDirection: true,
                                    stopOnLastSlide: true,
                                }}
                                breakpoints={{
                                    1199: { slidesPerView: "auto" },
                                    600: { slidesPerView: "auto" },
                                    575: { slidesPerView: 1 },
                                    350: { slidesPerView: 1 },
                                }}
                                className="swiper-group-slide-text"
                            >
                                {["Corporate", "Business", "Consulting", "Creative"].map((text, index) => (
                                    <SwiperSlide key={index} className="swiper-slide">
                                        <div className="text-slide">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M65.5893 35.4981C65.5893 35.4981 62.8688 35.8606 57.7923 36.0941C52.7158 36.3276 45.2935 36.4326 35.9001 35.9182C34.8713 54.7051 32.2406 65.3841 32.2406 65.3841C32.2406 65.3841 31.8781 62.6636 31.6446 57.5871C31.4111 52.5106 31.306 45.0883 31.8204 35.6948C13.0336 34.6661 2.35458 32.0353 2.35458 32.0353C2.35458 32.0353 5.07508 31.6728 10.1516 31.4393C15.2281 31.2058 22.6504 31.1008 32.0438 31.6152C33.0726 12.8283 35.7033 2.14933 35.7033 2.14933C35.7033 2.14933 37.1522 13.0517 36.1235 31.8386C54.9103 32.8673 65.5893 35.4981 65.5893 35.4981Z" fill="white" />
                                                <path d="M36.2367 29.7959C42.803 21.9717 49.0342 20.2669 49.0342 20.2669C46.1496 24.7875 42.4665 28.7455 38.1648 31.9474M30.0055 31.5006C22.1813 24.9343 20.4766 18.7031 20.4766 18.7031C24.9971 21.5877 28.9551 25.2708 32.157 29.5725M31.7102 37.7318C25.1439 45.556 18.9128 47.2608 18.9128 47.2608C21.7973 42.7402 25.4805 38.7822 29.7821 35.5803M37.9414 36.0271C45.7657 42.5934 47.4704 48.8246 47.4704 48.8246C42.9498 45.94 38.9918 42.2569 35.7899 37.9552" fill="white" />
                                                <path d="M33.6895 38.869C36.5059 39.0233 38.9141 36.8651 39.0683 34.0487C39.2226 31.2323 37.0644 28.8241 34.248 28.6699C31.4316 28.5157 29.0234 30.6738 28.8692 33.4902C28.715 36.3066 30.8731 38.7148 33.6895 38.869Z" fill="white" />
                                            </svg>
                                            {text}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
