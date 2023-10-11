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
            title: "freeship"
        },
        {
            id: 2,
            title: "sale"
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
                   <img src="https://static.vecteezy.com/system/resources/previews/010/994/232/non_2x/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="logo"/>
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