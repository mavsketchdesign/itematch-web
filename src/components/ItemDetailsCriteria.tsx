import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import {RootStore} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link
  } from "react-router-dom";

const ItemDetailsCriteria: React.FC<any> = ({item, setActiveEdit, setViewModal, editListing}) => {
    
    return (
        <>
        {
            item?.category === "home" &&
            <div className="item_edit_container">

                <div className="header_title clickable">
                    Manage your policies
                </div>

                <div className="edit_item_wrapper">

                    <div className="edit_item_box">
                        <div className="edit_title">Security Deposit</div>
                        <div className="edit_value">
                            <span className="value_text">
                                {
                                    editListing?.ListingRequirement.filter((data:any) => data?.title === "check-in").length > 0 ?
                                    `After ${editListing?.ListingRequirement.find((data:any) => data?.title === "check-in")?.desc}` :
                                    "Add Check-out time"
                                }
                            </span>
                            <div className="edit_box" onClick={()=>{ setActiveEdit("check_in"); setViewModal({isOpen:true});}}>
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

export default ItemDetailsCriteria;
