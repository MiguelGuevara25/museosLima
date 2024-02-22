import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { imagesPublicaciones } from "../data/data";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CarouselPublicaciones = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper w-4/5 mx-auto [&>div>div]:mb-16 [&>div>span]:bg-[#FFA836]"
    >
      {imagesPublicaciones.map((datos, id) => {
        return (
          <SwiperSlide className="overflow-hidden rounded-3xl" key={id}>
            <div className="h-96 relative overflow-hidden">
              <img
                src={datos.img}
                className="h-full object-cover rounded-3xl shadow-xl brightness-50 hover:brightness-100 scale-125 hover:scale-100 transition-all duration-500"
                alt=""
              />

              <div className="absolute bottom-8 left-6 text-white">
                <p className="font-bold w-36 pb-3">{datos.name}</p>
                <button className="border px-3 py-1 rounded-3xl hover:bg-white hover:text-black transition-all">
                  Saber más
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselPublicaciones;
