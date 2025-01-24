import { Link } from "react-router-dom";
import school_logo from "../../images/apex_international_logo.jpg";
import { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavbarLargeScreen, NavbarSmallScreen } from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const FollowIcons = [
    { index: 1, icon: FacebookIcon },
    { index: 2, icon: InstagramIcon },
    { index: 3, icon: GoogleIcon },
    { index: 4, icon: XIcon },
    { index: 5, icon: YouTubeIcon },
    { index: 6, icon: LinkedInIcon },
  ];
  let Latest_News =
    "This is a scrolling marquee effect using Tailwind CSS in React!";

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed w-full shadow-md z-50">
        {/* Latest News */}
        <div
          className={`w-full px-1 md:px-8 bg-secondary flex justify-center items-center ${
            isVisible ? "visible" : "hidden"
          }`}
        >
          <div className="min-w-22 md:min-w-28 p-2 bg-primary text-white font-semibold text-xs md:text-base flex justify-center items-center">
            Latest News
          </div>
          <div className="px-3 py-2 w-3/4 text-white overflow-hidden flex justify-center items-center">
            <div className="inline-block animate-marquee whitespace-nowrap text-sm text-yellow-500 font-semibold">
              {Latest_News}
            </div>
          </div>
        </div>

        {/* Social Media info */}
        <div
          className={`bg-primary w-full p-1 text-white ${
            isVisible ? "visible" : "hidden"
          }`}
        >
          <div className="grid grid-flow-row md:grid-flow-col text-xs md:text-base">
            <div className="flex justify-center items-center">
              <p>apexinternational9020@gmail.com</p>
            </div>
            <div className="flex justify-center items-center">
              <p>
                Follow us
                {FollowIcons.map((item) => (
                  <>
                    {"  "}
                    <Link key={item.index} to={"#"}>
                      <item.icon fontSize="small" />
                    </Link>
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
        {/* School Header */}
        <div className="w-full px-3 bg-white grid grid-flow-row md:grid-flow-col gap-4 shadow-sm">
          <div className="flex justify-center items-center p-1">
            <div className="flex justify-center items-center">
              <img src={school_logo} alt="apex_logo" height={70} width={70} />
            </div>
            <div className="text-xl md:text-4xl text-red-600 font-extrabold flex justify-center items-center pl-4">
              Apex International School
            </div>

            {/* Menu Button */}
            <div className="flex flex-row-reverse items-center visible md:hidden m-1">
              <div className="p-0">
                {!navOpen ? (
                  <Button
                    color="error"
                    variant="contained"
                    size="small"
                    className="p-0"
                    onClick={handleNavOpen}
                  >
                    <MenuIcon />
                  </Button>
                ) : (
                  <Button
                    color="error"
                    variant="contained"
                    size="small"
                    className="p-0"
                    onClick={handleNavClose}
                  >
                    <CloseIcon />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div
            className={`grid grid-flow-col ${
              isVisible ? "visible" : "hidden"
            } md:visible`}
          >
            <div className="p-1 flex flex-row gap-3 md:justify-center items-center">
              <p className="text-red-800">
                <CallIcon fontSize="large" />
              </p>
              <div className="flex flex-col ">
                <p className="text-xs md:text-sm text-gray-500 font-semibold ">
                  Contact Us
                </p>
                <p className="text-sm md:text-base text-primary font-semibold">
                  975759325,3759079020
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <NavbarLargeScreen
          isVisible={isVisible}
          handleNavClose={handleNavClose}
        />

        {navOpen ? <NavbarSmallScreen handleNavClose={handleNavClose} /> : null}
      </div>
    </>
  );
};

export default Header;
