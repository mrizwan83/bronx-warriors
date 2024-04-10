import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { g7, g8, g9, g10, g11, g12, g16 } from '../assets/images'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Gallery = () => {
  const images = [g7, g8, g9, g10, g11,g16]
  return (
    <section
      id='gallery'
      className='w-full flex flex-col justify-center items-center gap-10 max-container'
    >
      <div className='text-center'>
        <p className='text-xl font-montserrat text-coral-red'>Gallery</p>
        <h2 className='mt-4 font-palanquin text-5xl max-sm:text-4xl font-bold'>
          Our Memories
        </h2>
      </div>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {' '}
              <img
                src={image}
                alt=''
                className='w-full h-auto rounded-lg shadow-lg'
              />
            </SwiperSlide>
          ))}

          {/* Navigation arrows */}
          <div className='swiper-button-next text-coral-red'></div>
          <div className='swiper-button-prev text-coral-red'></div>

          {/* Pagination bullets */}
          <div className='swiper-pagination'></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
