import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({sidebar,setSidebar}) => {
  return (
    <div className={`lg:hidden fixed w-[50%] md:w-[300px] h-[100vh] bg-white pt-2 sm:pt-4 px-2 sm:px-3 z-9 right-0 ${sidebar ? "":"translate-x-full"} transition-all duration-300 border border-[#7070703e]`}>
      <div className='flex flex-col p-5 gap-5'>
        <Link onClick={()=>{setSidebar(!sidebar)}} to={"/"}>ホーム</Link>
        <Link onClick={()=>{setSidebar(!sidebar)}} to={"/treatment"}>施術メニュー</Link>
        <Link onClick={()=>{setSidebar(!sidebar)}} to={"/schedule"}>出勤予定表</Link>
        <Link onClick={()=>{setSidebar(!sidebar)}} to={"/contact"}>お問い合わせ</Link>
      </div>
    </div>
  )
}

export default MobileNav

