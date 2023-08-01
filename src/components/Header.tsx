import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/Header.css';
import { useState, useEffect } from 'react';
import {RootStore} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link
  } from "react-router-dom";

const Header: React.FC<any> = ({searchTool}) => {
    const userDetails = useSelector((state: RootStore) => state.user);
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    const toggleButton = () => {
        isMenuToggle ? setIsMenuToggle(false) : setIsMenuToggle(true);
    }

    const logout = () => {
        localStorage.removeItem("user_token");
        window.location.href = "/";
    }

    return (
        <div className="header">


        <div className={`header_bar ${!searchTool ? "transparent": ""}`}>

            <Link to={`/ManageItem/`}>
                <div className="logo_wrapper">
                    <img src="assets/Logo/v1.png" alt="" />
                </div>
            </Link>



            <div className="header_middle_wrapper">
                {
                searchTool &&
                    <div className="search_box">
                        <div className="search_field_wrapper">
                            <div className="search_input category">
                                <span className="title">CATEGORY</span>
                                <span className="sub">Choose category</span>
                            </div>
                            <div className="search_input location">
                                <span className="title">LOCATION</span>
                                <span className="sub">Choose location</span>
                            </div>
                            <div className="search_input check_in">
                                <span className="title">CHECK IN</span>
                                <span className="sub">Start date</span>
                            </div>
                            <div className="search_input check_out">
                                <span className="title">CHECK OUT</span>
                                <span className="sub">End date</span>
                            </div>
                            <div className="search_input guest b-none">
                                <span className="title">GUEST</span>
                                <span className="sub">End date</span>
                            </div>
                            <div className="search_button">
                                <div className="search_container">
                                    <img src="assets/img/search.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>



            <div className="menu_wrapper" onClick={()=>{toggleButton();}}>
                {/* <div className="avatar" style={{backgroundImage: "url('assets/img/avatar/3.jpg')"}}></div> */}
                <div className="avatar"> 
                    {/* <div className="initial">M</div> */}
                    <img className="default_icon" src="assets/img/icons/customer.png" alt="" />
                </div>
                <div className="menu_bar">
                    <img src="assets/img/more.png" alt="" />
                </div>
            </div>
            {
                isMenuToggle &&
                <>
                    <div className="overlay" onClick={()=>{toggleButton();}}></div>
                    <div className="side_bar">

                        <div className="title_header">
                            <div className="name">
                                <span>{userDetails?.first_name}</span>
                                <img className="badge" src="assets/img/badge.png" alt="" /></div>
                            <div className="user_type">OWNER</div>
                        </div>

                        <div className="option_wrapper">
                            <div className="option_inner_wrapper">
                                <Link onClick={()=>{toggleButton()}} to={`/ManageItem/`}>
                                    <div className="option_box">
                                        <div className="option_title">Dashboard</div>
                                        <div className="icon_wrapper">
                                            <img className="icon" src="assets/img/icons/dashboard.png" alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <Link onClick={()=>{toggleButton()}} to={`/ManageItem/Items/`}>
                                    <div className="option_box">
                                        <div className="option_title">Listings</div>
                                        <div className="icon_wrapper">
                                            <img className="icon" src="assets/img/icons/item.png" alt="" />
                                        </div>
                                    </div>
                                </Link>
                                <div className="option_box disabled">
                                    <div className="option_title">Bookings</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/booking.png" alt="" />
                                    </div>
                                </div>
                                {/* <Link onClick={()=>{toggleButton()}} to={`/ManageItem/profile/`}> */}
                                <div className="option_box disabled">
                                    <div className="option_title">Profile</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/profile.png" alt="" />
                                    </div>
                                </div>
                                {/* </Link> */}
                                <div className="option_box disabled">
                                    <div className="option_title">Compliance</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/compliance.png" alt="" />
                                    </div>
                                </div>
                                <div className="option_box disabled">
                                    <div className="option_title">Switch to user</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/switch-user.png" alt="" />
                                    </div>
                                </div>
                                <div className="option_box disabled">
                                    <div className="option_title">Settings</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/settings.png" alt="" />
                                    </div>
                                </div>
                                <div className="option_box" onClick={()=>{logout();}}>
                                    <div className="option_title">Logout</div>
                                    <div className="icon_wrapper">
                                        <img className="icon" src="assets/img/icons/logout.png" alt="" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </>
            }
        </div>


        </div>
    );
};

export default Header;
