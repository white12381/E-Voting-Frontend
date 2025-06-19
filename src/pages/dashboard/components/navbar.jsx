import { Dropdown } from "antd";
import { Link, useLocation } from "react-router-dom"
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import SideBar from "./sidebar";
import Hamburger from "../../../assets/images/Hamburger.png"

const Navbar = () => {
  const [openDrawal, setOpenDrawal] = useState(false)

  const handleLogout = () => {

    if (typeof window !== "undefined") {
      localStorage.clear();
      window.location.href = "/";
    }
  };
  const logoutItems = [
    {
      key: '1',
      label: (
        <div onClick={handleLogout} className="text-sm text-primary  p-2 mt-2">
          Logout
        </div>
      ),
    }
  ];
  const {pathname} = useLocation()
  return <>
    <div className='flex fixed top-0 z-50 w-full justify-between items-center md:justify-around bg-secondary p-3'>
      <div>
        <img src={'/vite.svg'} className='w-12 h-12' alt='Logo' />
      </div>
      <div className='hidden md:flex space-x-4 md:space-x-10'>
        <Link to='/dashboard'
          className={`homeNavLink ${pathname === "/dashboard" && "underline"}`}>Dashboard</Link>

        <Link to='/dashboard/create-room' 
        className={`homeNavLink ${pathname?.includes('create') && "underline"}`}>Create Room</Link>
        <Link to='/dashboard/my-rooms'
         className={`homeNavLink ${pathname?.includes('my-room') && "underline"}`}>My Rooms</Link>
           <Link to='/dashboard/vote-decison'
         className={`homeNavLink ${pathname?.includes('vote-decison') && "underline"}`}>Vote</Link>
      </div>
      <aside className="flex items-center gap-x-2 text-sm">
        <p className="text-Sec03 text-sm hidden md:block">Hi, Olasunkanmi Usman</p>
        <Dropdown placement="bottom" menu={{ items: logoutItems }}>
          <div className="flex space-x-2">
            <div className={'relative h-10 text-center  pt-1 text-xl w-10 rounded-full bg-primary text-white'}>
              U
            </div>
            <DownOutlined className="mx-1 text-primary" />
          </div>
        </Dropdown>
        <img
          onClick={() => setOpenDrawal(true)}
          className="cursor-pointer md:hidden"
          src={Hamburger}
          alt="Hamburger"
          width={24}
          height={24}
        />
      </aside>

    </div>
    <SideBar open={openDrawal} setOpen={setOpenDrawal} />
  </>
}
export default Navbar