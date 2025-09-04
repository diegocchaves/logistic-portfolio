import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdWorkspacePremium } from "react-icons/md";
import avatar1 from "../assets/images/avatar1.svg";
import avatar2 from "../assets/images/avatar2.svg";
import avatar3 from "../assets/images/avatar3.svg";
import avatar4 from "../assets/images/avatar4.svg";
const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Ruy Jardim",
      text: "CEO & Founder of Interaction Log. e Com. Ltda",
      story:
        "From the very beginning, Diego stood out for his reliability, dedication, and ability to quickly adapt to new challenges. He consistently delivered results with precision and professionalism, and his positive attitude made him an invaluable part of our team.",
      image: avatar1,
    },
    {
      id: 2,
      name: "Ruth Crevillen",
      text: "Logistic Specialist and Supply Chain at Barça Licensing & Merchandising",
      story:
        "Diego has a natural talent for organization and problem-solving. In our fast-paced environment, he not only kept operations running smoothly but also brought initiative and creativity to improve processes. His collaborative spirit and commitment were always evident.",
      image: avatar2,
    },
    {
      id: 3,
      name: "Andrés Ortiz",
      text: "Assitant Manager at Barça Licensing & Merchandising",
      story:
        "Working with Diego was a guarantee of excellence. He combines strong technical knowledge with outstanding interpersonal skills, always building trust and motivating those around him. His work ethic and passion left a lasting impact on our team.",
      image: avatar3,
    },
    {
      id: 4,
      name: "Javi García",
      text: "Team Leader at Barça Licensing & Merchandising",
      story:
        "Diego was the kind of teammate everyone wants to work with—supportive, dependable, and always bringing good energy to the group. He had a unique ability to balance professionalism with approachability, which made collaboration smooth and enjoyable. His contribution was key to creating a strong and motivated team.",
      image: avatar4,
    },
  ];

  return (
    <section className="bg-[#0a192f]  text-gray-300 py-10 md:py-24">
      <div className="container px-4 mx-auto text-white ">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <div className="flex flex-row items-center justify-center">
            <MdWorkspacePremium className="text-4xl text-[#28bdec] mr-2" />
            <h1 className="text-4xl font-bold">
              <span></span>
              Words from People I've Worked With
            </h1>
          </div>
          <p className="mb-8 text-center text-gray-400">
            Genuine feedback from colleagues and leaders who’ve seen my work in
            action.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Spacing between slides
          slidesPerView={1} // Number of slides visible
          navigation // Enables navigation arrows
          pagination={{ clickable: true }} // Enables pagination bullets
          autoplay={{ delay: 6500, disableOnInteraction: false }} // Enables autoplay
          loop={true} // Enables infinite looping
          className="custom-swiper"
        >
          {stories.map((story) => (
            <SwiperSlide
              key={story.id}
              className="flex items-center justify-center p-10 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-lg h-[400px] ">
                <img
                  src={story.image}
                  alt={story.name}
                  className="object-cover w-24 h-24 mb-4 rounded-full md:w-32 md:h-32"
                  width={150}
                  height={150}
                  priority
                />
                <p className="mb-4 italic text-center text-gray-300 text-md">
                  &quot;{story.story}&quot;
                </p>
                <h4 className="text-lg font-bold text-center">{story.name}</h4>
                <p className="mt-2 text-xs italic text-center">{story.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
