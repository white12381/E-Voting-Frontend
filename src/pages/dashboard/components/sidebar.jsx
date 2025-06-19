import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignOut from "../../../assets/images/Sign_out_squre.png"
import List from "../../../assets/images/list.png"


const SideBar = ({ open, setOpen }) => {
  const user = localStorage.getItem('token')
  const sideBarLinks = [
    {
      imageUrl: "/assets/images/Globe.png",
      imageAlt: "Localization",
      title: "Localization",
      href: "/language-preference",

    },

    {
      imageUrl: "/assets/images/home.png",
      imageAlt: "Home",
      title: "Home",
      href: "/",
    },

    {
      imageUrl: "/assets/images/about_us.png",
      imageAlt: "About us",
      title: "About us",
      href: "/about-us",
    },

    {
      imageUrl: "/assets/images/lists.png",
      imageAlt: "lists",
      title: "My listings",
      href: "/my-listings"
    }
  ];

  const [drawerWidth, setDrawerWidth] = useState("20%");
  const handleLogout = () => {

    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.href = "/";
    }
  };
  useEffect(() => {
    const updateDrawerWidth = () => {
      if (window.innerWidth <= 576) {
        setDrawerWidth("50%");
      } else if (window.innerWidth <= 768) {
        setDrawerWidth("40%");
      } else {
        setDrawerWidth("20%");
      }
    };

    window.addEventListener("resize", updateDrawerWidth);
    updateDrawerWidth(); // Set initial width

    return () => window.removeEventListener("resize", updateDrawerWidth);
  }, []);

  return (
    <>
      <Drawer
        closable
        styles={{
          header: {
            display: "none",
          },
        }}
        classNames={{ body: "bg-customBlack" }}
        destroyOnClose
        title={null}
        closeIcon={null}
        placement="right"
        open={open}
        width={drawerWidth}
        onClose={() => setOpen(false)}
      >
        <div
          className={`h-full grid content-between md:p-4 text-white  font-semibold text-sm md:text-base`}
        >
          <div className="space-y-4">
            {sideBarLinks.map((link, index) => (
              <Link
                onClick={() => {
                  link.onClick && link.onClick();
                  setOpen(false);
                }}
                key={index}
                to={link.href}
                title={link.title}
                className={`notActiveSideBarLink px-3 hover:text-white hover:bg-primary py-2 rounded  ${link.className || ""
                  }`}
              >
                <img
                  src={List}
                  width={30}
                  height={30}
                  className="w-[19px] h-[19px] md:w-[30px] md:h-[30px]"
                  alt={link.imageAlt}
                />
                <p>{link.title}</p>
              </Link>
            ))}
          </div>
          <div onClick={handleLogout} className={`notActiveSideBarLink px-3`}>
            <img
              src={SignOut}
              width={30}
              height={30}
              alt={"Sign Out"}
            />
            <p>{user ? "Sign Out" : "Sign In"}</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
