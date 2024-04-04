import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
} from '../assets/images'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Gallery = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-10'>Gallery </h1>
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        slidesPerView={4}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={g1} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g2} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g3} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g4} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g4} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g5} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g6} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g7} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g8} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g9} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g10} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g11} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g12} alt='Gallery Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g13} alt='Gallery Image' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Gallery
