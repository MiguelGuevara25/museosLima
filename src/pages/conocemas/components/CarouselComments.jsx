import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CarouselComments = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper [&>div>div]:mb-16 [&>div>span]:bg-[#FFA836]"
      >
        <SwiperSlide>
          <div className="text-white bg-[#FFA836] p-7 rounded-3xl shadow-lg">
            <p className="font-bold text-2xl mb-6">
              Ministerio de Cultura realizará Foro Nacional ¿Qué museos queremos
              ser? Los desafíos de los museos peruanos ante la nueva definición
              de ICOM
            </p>

            <span>Jueves, 27 Octubre, 2022</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white bg-[#FFA836] p-7 rounded-3xl shadow-lg">
            <p className="font-bold text-2xl mb-6">
              Ministerio de Cultura realizará Foro Nacional ¿Qué museos queremos
              ser? Los desafíos de los museos peruanos ante la nueva definición
              de ICOM
            </p>

            <span>Jueves, 27 Octubre, 2022</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white bg-[#FFA836] p-7 rounded-3xl shadow-lg">
            <p className="font-bold text-2xl mb-6">
              Ministerio de Cultura realizará Foro Nacional ¿Qué museos queremos
              ser? Los desafíos de los museos peruanos ante la nueva definición
              de ICOM
            </p>

            <span>Jueves, 27 Octubre, 2022</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white bg-[#FFA836] p-7 rounded-3xl shadow-lg">
            <p className="font-bold text-2xl mb-6">
              Ministerio de Cultura realizará Foro Nacional ¿Qué museos queremos
              ser? Los desafíos de los museos peruanos ante la nueva definición
              de ICOM
            </p>

            <span>Jueves, 27 Octubre, 2022</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComments;
