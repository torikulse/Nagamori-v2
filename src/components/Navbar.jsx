import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Router } from "react-router-dom";
import logo from "../assets/newLogo.svg";
import { RxCross1 } from "react-icons/rx";
import line from "../assets/line.svg";
import Nlogo from "../assets/Nlogo.svg";

export default function Navbar({ sidebar, setSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveMenu("home");
    } else if (path === "/treatment") {
      setActiveMenu("treatment");
    } else if (path === "/schedule") {
      setActiveMenu("schedule");
    } else if (path === "/contact") {
      setActiveMenu("contact");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 z-20 flex h-[75px] w-full items-center justify-between bg-white px-7 md:h-[90px] lg:h-[114px] lg:pb-4 xl:pr-30">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="hidden cursor-pointer md:block"
          />
          <img src={Nlogo} alt="logo" className="cursor-pointer md:hidden" />
        </Link>
        <div className="md:flex md:flex-col md:items-end">
          <div className="mb-2 hidden lg:mb-0 lg:flex lg:flex-col lg:items-end lg:gap-6">
            <a
              href="https://line.me/R/ti/p/@321iyeoj"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-b-md bg-[#06C755] px-4"
            >
              <img src={line} alt="" className="lg:w-40 xl:w-44" />
            </a>

            <div className="hidden lg:flex lg:gap-25 xl:gap-35">
              <Link
                onClick={() => {
                  setActiveMenu("home");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                to={"/"}
              >
                ホーム
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "home" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("treatment");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                to={"/treatment"}
              >
                施術メニュー
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "treatment" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("schedule");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                to={"/schedule"}
              >
                出勤予定表
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "schedule" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
              <Link
                onClick={() => {
                  setActiveMenu("contact");
                }}
                className={`relative lg:text-lg xl:text-xl`}
                to={"/contact"}
              >
                お問い合わせ
                <div
                  className={`absolute -bottom-2 h-[1px] w-full bg-[#707070] ${
                    activeMenu === "contact" ? "block" : "hidden"
                  }`}
                ></div>
              </Link>
            </div>
          </div>
          <div className="hover:cursor-pointer lg:hidden">
            {sidebar ? (
              <RxCross1
                size={28}
                onClick={() => {
                  setSidebar(!sidebar);
                }}
              />
            ) : (
              <div
                onClick={() => {
                  setSidebar(!sidebar);
                }}
                className="flex flex-col gap-2"
              >
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
                <div className="h-[1px] w-[22px] bg-[#707070]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[75px] md:h-[90px] lg:h-[114px]"></div>
    </>
  );
}
