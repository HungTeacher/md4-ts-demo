import {Carousel} from 'antd'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import './navbar.scss'
import DropdownLogout from "../Dropdown/DropdownLogout";
import Cart from "../Cart/Cart";

function Navbar() {
    const [banners, setBanners] = useState([
        {
            id: 1,
            title: "Download the app to access everything Nike. Get Your Great"
        },
        {
            id: 2,
            title: "Free shipping. Get discount 50% for nike vip member"
        }
    ])
    const navigate = useNavigate()
   return (
       <nav>
           <div className="carousel-container">
               <Carousel
                autoplay
                autoplaySpeed={2000}
                effect={"fade"}
                dots={false}
                dotPosition={"bottom"}
               >

                   {
                       banners.map((banner, index) => (
                           <div className="items" key={banner.id + index}>
                               <p className="title">{banner.title}</p>
                           </div>
                       ))
                   }
               </Carousel>
           </div>
           <div className="nav-container">
               <div className="logo" onClick={() => navigate("/")}>
                   <img src="https://images.unsplash.com/photo-1617611413968-537a2ba4986d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="logo"/>
               </div>
               <div className="middle-nav">
                   <span>Men</span>
                   <span>Women</span>
                   <span>Kid</span>
                   <span>Sale</span>
                   <span>News & Featured</span>
               </div>
               <div className="right-nav">
                   <span className="right-nav-icon"><Search /></span>
                   <span className="right-nav-icon">
                       <DropdownLogout />
                   </span>
                   <span className="right-nav-icon cart-icon"><Cart /></span>
               </div>
           </div>
       </nav>
   )
}

export default Navbar