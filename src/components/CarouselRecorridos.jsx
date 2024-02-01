import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { imagesCarousel } from "../data/data";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CarouselRecorridos = () => {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper [&>div>div]:mb-16 [&>div>span]:bg-[#FFA836]"
    >
      {imagesCarousel.map((datos, id) => {
        return (
          <SwiperSlide className="overflow-hidden rounded-3xl" key={id}>
            <div className="h-96 relative overflow-hidden">
              <img
                src={datos.img}
                className="h-full object-cover rounded-3xl shadow-xl brightness-50 hover:brightness-100 scale-125 hover:scale-100 transition-all duration-500"
                alt={datos.name}
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

export default CarouselRecorridos;
