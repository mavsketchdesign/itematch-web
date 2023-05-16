import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/Header.css';
import { useState, useEffect } from 'react';

const Header: React.FC<any> = ({searchTool}) => {

    const [isMenuToggle, setIsMenuToggle] = useState(false);

    return (
        <div className="header">


        <div className={`header_bar ${!searchTool ? "transparent": ""}`}>

            <div className="logo_wrapper">
                <img src="assets/Logo/v1.png" alt="" />
            </div>



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



            <div className="menu_wrapper">
                <div className="avatar" style={{backgroundImage: "url('assets/img/avatar/3.jpg')"}}></div>
                <div className="menu_bar">
                    <img src="assets/img/more.png" alt="" />
                </div>
            </div>
        </div>


        </div>
    );
};

export default Header;
