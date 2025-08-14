import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaMedal } from "react-icons/fa";
import avatar1 from "../assets/images/avatar1.svg";
import avatar2 from "../assets/images/avatar2.svg";
import avatar3 from "../assets/images/avatar3.svg";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Diego Carvalho",
      text: "Full Stack Developer",
      story:
        "O Cuidando do Money me ajudou a organizar minhas finanças como freelancer, permitindo-me economizar para o futuro e investir na minha carreira.",
      image: avatar1,
    },
    {
      id: 2,
      name: "Cristina Retuerto",
      text: "Enfermeria",
      story:
        "Graças ao Cuidando do Money, aprendi a controlar meu orçamento, criar um fundo de emergência e alcançar meus objetivos financeiros.",
      image: avatar2,
    },
    {
      id: 3,
      name: "Drª Ellen Fernandes",
      text: "Medico Pediátra",
      story:
        "Com o Cuidando do Money, consegui gerenciar meus empréstimos e criar um plano de aposentadoria seguro, permitindo-me focar no crescimento da minha carreira médica.",
      image: avatar3,
    },
  ];

  return (
    <section className="bg-[#0a192f]  text-gray-300 py-10 md:py-24">
      <div className="container px-4 mx-auto text-white ">
        <div className="flex items-center justify-center mb-8">
          <FaMedal className="text-4xl text-[#28bdec] mr-4" />
          <h1 className="text-4xl font-bold">
            Recommended By Previous Leaders
          </h1>
        </div>
        <p className="mb-8 text-center">
          Here are some success stories from people who....
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Spacing between slides
          slidesPerView={1} // Number of slides visible
          navigation // Enables navigation arrows
          pagination={{ clickable: true }} // Enables pagination bullets
          autoplay={{ delay: 3500, disableOnInteraction: false }} // Enables autoplay
          loop={true} // Enables infinite looping
          className="custom-swiper"
        >
          {stories.map((story) => (
            <SwiperSlide
              key={story.id}
              className="flex items-center justify-center "
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-lg h-[400px] shadow-lg ">
                <img
                  src={story.image}
                  alt={story.name}
                  className="object-cover w-24 h-24 mb-4 rounded-full md:w-32 md:h-32"
                  width={150}
                  height={150}
                  priority
                />
                <p className="mb-2 italic text-center text-md">
                  &quot;{story.story}&quot;
                </p>
                <h4 className="text-lg font-bold text-center">{story.name}</h4>
                <p className="mt-2 text-sm italic text-center">{story.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
