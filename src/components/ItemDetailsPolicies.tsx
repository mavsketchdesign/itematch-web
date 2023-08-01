import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import {RootStore} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link
  } from "react-router-dom";

const ItemDetailsPolicies: React.FC<any> = ({item, setActiveEdit, setViewModal, editListing}) => {
    
    return (
        <>
            {
                ((item?.category === "home") || (item?.category === "facility")) &&
                <div className="item_edit_container">

                    <div className="header_title clickable">
                        Manage your policies
                    </div>

                    <div className="edit_item_wrapper">

                        <div className="edit_item_box">
                            <div className="edit_title">Check In</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "check-in").length > 0 ?
                                        `After ${editListing?.listing_requirement.find((data:any) => data?.title === "check-in")?.desc}` :
                                        "Add Check-in time"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("check_in"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Check Out</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "check-out").length > 0 ?
                                        `Before ${editListing?.listing_requirement.find((data:any) => data?.title === "check-out")?.desc}` :
                                        "Add Check-out time"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("check_out"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Quiet Hours</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "quiet_hour_start").length > 0 &&
                                        <>
                                            {editListing?.listing_requirement.find((data:any) => data?.title === "quiet_hour_start")?.desc} - {editListing?.listing_requirement.find((data:any) => data?.title === "quiet_hour_end")?.desc}
                                        </>
                                    }
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "quiet_hour_start").length ==0 &&
                                        <>
                                            Add quiet hours
                                        </>
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("quiet_hour"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Allow Commercial Use</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                    editListing?.listing_requirement.filter((data:any) => data?.title === "event_use").length > 0 ?
                                    `${editListing?.listing_requirement.find((data:any) => data?.title === "event_use")?.desc}` :
                                    "Do you allow?"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("event_use"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Allow Pets</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "allow_pets").length > 0 ?
                                        `${editListing?.listing_requirement.find((data:any) => data?.title === "allow_pets")?.desc}` :
                                        "Do you allow?"
                                    }</span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("allow_pets"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Cancellation Policy</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "cancellation").length > 0 ?
                                        `${editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc}` :
                                        "Set cancellation policy"
                                    }</span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("cancellation"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        


                    </div>

                </div>
            }
            {
                ((item?.category == "car") || (item?.category == "bike")) &&
                <div className="item_edit_container">

                    <div className="header_title clickable">
                        Manage your policies
                    </div>

                    <div className="edit_item_wrapper">

                        <div className="edit_item_box">
                            <div className="edit_title">Trip start</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "trip-start").length > 0 ?
                                        `After ${editListing?.listing_requirement.find((data:any) => data?.title === "trip-start")?.desc}` :
                                        "Add trip start"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("trip-start"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Trip end</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "trip-end").length > 0 ?
                                        `Before ${editListing?.listing_requirement.find((data:any) => data?.title === "trip-end")?.desc}` :
                                        "Add trip end"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("trip-end"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Maximum Travel Distance</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "max-travel").length > 0 &&
                                        <>
                                            {editListing?.listing_requirement.find((data:any) => data?.title === "max-travel")?.desc} - {editListing?.listing_requirement.find((data:any) => data?.title === "distance_unit")?.desc} / day
                                        </>
                                    }
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "max-travel").length ==0 &&
                                        <>
                                            Add maximum travel distance
                                        </>
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("max-travel"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>


                        <div className="edit_item_box">
                            <div className="edit_title">Delivery & Pickup</div>
                            <div className="edit_value">
                                <span className="value_text"> 
                                    Setup your delivery & pickup
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("delivery_pickup"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>


                        <div className="edit_item_box">
                            <div className="edit_title">Cancellation Policy</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "cancellation").length > 0 ?
                                        `${editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc}` :
                                        "Set cancellation policy"
                                    }</span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("cancellation"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        


                    </div>

                </div>
            }
            {
                ((item?.category !== "home") && (item?.category !== "facility") && (item?.category !== "car") && (item?.category !== "bike")) &&
                <div className="item_edit_container">

                    <div className="header_title clickable">
                        Manage your policies
                    </div>

                    <div className="edit_item_wrapper">

                        <div className="edit_item_box">
                            <div className="edit_title">Item pick up time</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "pickup-time").length > 0 ?
                                        `After ${editListing?.listing_requirement.find((data:any) => data?.title === "pickup-time")?.desc}` :
                                        "Add pick up time"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("pickup-time"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Item return time</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "return-time").length > 0 ?
                                        `Before ${editListing?.listing_requirement.find((data:any) => data?.title === "return-time")?.desc}` :
                                        "Add return time"
                                    }
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("return-time"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="edit_item_box">
                            <div className="edit_title">Delivery & Pickup</div>
                            <div className="edit_value">
                                <span className="value_text"> 
                                    Setup your delivery & pickup
                                </span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("delivery_pickup"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>


                        <div className="edit_item_box">
                            <div className="edit_title">Cancellation Policy</div>
                            <div className="edit_value">
                                <span className="value_text">
                                    {
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "cancellation").length > 0 ?
                                        `${editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc}` :
                                        "Set cancellation policy"
                                    }</span>
                                <div className="edit_box" onClick={()=>{ setActiveEdit("cancellation"); setViewModal({isOpen:true});}}>
                                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                                <span>Edit</span>
                                </div>
                            </div>
                        </div>

                        


                    </div>

                </div>
            }
        </>
    );
};

export default ItemDetailsPolicies;
