import { useEffect, useState } from "react";
import CarouselBlock from "../components/header/Carousel";
import AnimatedCount from "../components/homePage/AnimatedCount";
import CardCarousel from "../components/homePage/CardCarousel";
import HomePageAbout from "../components/homePage/HomePageAbout";
import NoticeBoard from "../components/homePage/NoticeBoard";
import achiveImage from "../images/achivement.jpg";
import icon1 from "../images/scholarship-icon.png";
import { AchiveCardProps } from "../types/home";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

function HomePage() {
  const [schoolData, setSchoolData] = useState({});
  const HomeWelcomeIntro =
    "Honing a child is perhaps the biggest responsibility for all. It requires an environment that consistently nurtures the young mind, body and spirit and metamorphoses them into strong human beings, repositories of knowledge and skills capable of holding their own in the world outside. Apex International School, is based on the belief that parents and teachers play the most important roles in the learning years of a child. With this view the school encourages a close partnership between the trinity of the learning processes - the child, the teacher and the parent. With such synergy between the crucial stakeholders of a child destiny, the school ensures that learning knows no boundaries. This journey begins in classrooms and goes much beyond its boundaries into the real world. Every child has access to the resources, through which skills are easy to learn, communications is set up, and opinions and ideas are expressed and shared. Parents are invited and encouraged to share in this process by participating in orientation programs and building meaningful interaction with teachers, thereby taking active part in their child learning activities. Teachers are constantly motivated to explore new methods and techniques in the classrooms, and to make full use of resources and technology. This strengthens our mission to guide, shape and build character. It makes learning an experience, which is not only about gaining knowledge, but also about the people our children, will become.";

  const AchiveCardDetails: AchiveCardProps[] = [
    {
      image: icon1,
      count: 500,
      description: "500+(NUR to CLASS 6) STUDENTS",
    },
    {
      image: icon1,
      count: 5,
      description: "NO SCHOOL AWARDS",
    },
    {
      image: icon1,
      count: 40,
      description: "QUALIFIED TEACHERS & STAFFS",
    },
    {
      image: icon1,
      count: 350,
      description: "STUDENTS",
    },
  ];

  useEffect(() => {
    getSchoolInfo();
  }, []);

  const getSchoolInfo = async () => {
    try {
      console.log("Get School Info");
      const dataRef = doc(db, "WEBSITE_CONFIG", "websiteConfig");
      const docSnap = await getDoc(dataRef);
      console.log("Data: ");
      console.log(docSnap);

      if (docSnap.exists()) {
        setSchoolData(docSnap.data());
        console.log("School Data: ");
        console.log(schoolData);
      } else {
        console.log("No such document found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        <CarouselBlock />

        {/* Main Home Page Body */}
        <div className="w-full py-10 px-5 flex flex-col justify-center items-center">
          <div className="w-full md:w-[50%] p-1 flex flex-col justify-center items-center">
            <div className="pb-20">
              <p className="text-3xl font-semibold text-center py-2">
                Quality Education is our base
              </p>
              <p className="text-2xl py-2 text-center">
                APEX INTERNATIONAL SCHOOL
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-center py-2">
                HIGH QUALITY EDUCATION
              </p>
              <p className="text-3xl py-2 text-center">
                Welcome on our Home Page..
              </p>
              <p className="py-3 text-sm md:text-base text-justify">
                {HomeWelcomeIntro}
              </p>
            </div>

            {/* Notice Board */}
            <div className="py-5 w-full">
              <p className="py-1 mb-2 text-2xl text-center font-extrabold bg-[#cdefff] text-[#1d3989] border-[1px] border-[#1d3989]">
                Notice Board
              </p>
              <NoticeBoard />
            </div>
          </div>

          {/* HomePage About Us */}
          <div className="w-[80%] flex flex-col justify-center">
            <div className="py-5">
              <p className="text-3xl text-center py-3">-- ABOUT US --</p>
              <p className="text-sm md:text-base text-center ">
                APEX INTERNATIONAL SCHOOL, Golhaiya (Choura), Po - Siyatand,
                Jamua, Giridih
              </p>
            </div>
            <div className="py-5 grid grid-flow-row md:grid-flow-col">
              <div className="w-full flex justify-center items-center">
                Image
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="py-3">
                  <p className="text-lg text-center">
                    WELCOME TO APEX INTERNATIONAL SCHOOL
                  </p>
                  <p className="text-sm text-center">
                    We are focussed on the complete personality development of
                    the students
                  </p>
                </div>
                <div className="w-full">
                  <HomePageAbout />
                </div>
              </div>
            </div>
          </div>

          {/* Our Main Course //Card Carousel */}
          <div className="w-[80%] mt-16 flex flex-col justify-center">
            <div className="py-5">
              <p className="text-3xl text-center py-3">OUR MAIN COURSES</p>
              <p className="text-base text-center ">
                Courses offered by APEX INTERNATIONAL SCHOOL
              </p>
            </div>
            <CardCarousel />
          </div>
        </div>

        {/* Achivements Block */}
        <div className="w-full bg-secondary text-white flex flex-col justify-center">
          <div className="py-5 px-2 grid grid-flow-row md:grid-flow-col">
            <div className="flex flex-col justify-center items-center">
              <div className="py-3">
                <p className="text-2xl md:text-3xl my-3">ACHEIVEMENTS</p>
                <p className="text-xs md:text-sm">
                  Some of the milestone achieved by APEX INTERNATIONAL SCHOOL
                </p>
                <div className="w-full my-10 ">
                  <img
                    src={achiveImage}
                    alt="achiveImage"
                    height={500}
                    width={500}
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="grid grid-flow-row grid-cols-2 gap-4">
                {/* card Starts */}
                {AchiveCardDetails.map((item) => (
                  <div className="w-full md:w-[80%] border-[1px] border-fade p-5 rounded-md hover:scale-105 transition-transform ease-in-out flex flex-col justify-center items-center">
                    <div>
                      <div className="px-2 pb-7 text-white border-b-2 border-fade-light flex flex-col justify-center items-center">
                        <img
                          src={item.image}
                          className="h-16 w-14 bg-cover my-4"
                        />
                        {/* <p className="text-3xl md:text-5xl font-bold"> */}
                        <AnimatedCount count={item.count} />
                        {/* </p> */}
                      </div>
                      <p className="text-sm md:text-base pt-5 text-center font-semibold">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* card Ends */}
              </div>
            </div>
          </div>
        </div>

        {/* Experienced Staff Block */}
        <div className="w-full my-16 flex flex-col justify-center">
          <div className="py-5">
            <p className="text-3xl text-center py-3">OUR EXPERIENCED STAFFS</p>
            <p className="text-base text-center ">
              Some of experienced staffs of APEX INTERNATIONAL SCHOOL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
