import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/SideMenu.css';
import { useState, useEffect } from 'react';
import {RootStore} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link
  } from "react-router-dom";

const SideMenu: React.FC<any> = ({active}) => {
    const userDetails = useSelector((state: RootStore) => state.user);
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    

    return (
        <div className="side_box">
            <div className="side_title">MENU</div>

            <div className="side_bar">

            <Link to={`/ManageItem/`}>
                <div className={`menu ${active=="dashboard" ? "active": ""}`}>
                    <img src="assets/img/icons/dashboard.png" alt="" className="icon" />
                    <div className="name">DASHBOARD</div>
                </div>
            </Link>

            <Link to={`/ManageItem/Items/`}>
                <div className={`menu ${active=="listings" ? "active": ""}`}>
                    <img src="assets/img/icons/item.png" alt="" className="icon" />
                    <div className="name">LISTINGS</div>
                </div>
            </Link>

            <div className={`menu ${active=="bookings" ? "active": ""}`}>
                <img src="assets/img/icons/booking.png" alt="" className="icon" />
                <div className="name">BOOKINGS</div>
            </div>

            <div className={`menu ${active=="messages" ? "active": ""}`}>
                <img src="assets/img/icons/message.png" alt="" className="icon" />
                <div className="name">MESSAGES</div>
            </div>
            
            {/* <Link to={`/ManageItem/profile/`}> */}
                <div className={`menu ${active=="profile" ? "active": ""}`}>
                    <img src="assets/img/icons/profile.png" alt="" className="icon" />
                    <div className="name">PROFILE</div>
                </div>
            {/* </Link> */}
            </div>

        </div>
    );
};

export default SideMenu;
