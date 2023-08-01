import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import {RootStore} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link
  } from "react-router-dom";

const ItemDetailsVehicles: React.FC<any> = ({item, setActiveEdit, setViewModal, editListing}) => {

    
    return (
        <>
            
        <div className="edit_item_box">
            <div className="edit_title">Vehicle Specifications</div>
            <div className="edit_value">
                <span className="value_text">
                    Add vehicle specifications
                </span>
                <div className="edit_box" onClick={()=>{ setActiveEdit("vehicle_brand_model"); setViewModal({isOpen:true});}}>
                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                <span>Edit</span>
                </div>
            </div>
        </div>

        <div className="edit_item_box">
            <div className="edit_title">Vehicle Information</div>
            <div className="edit_value">
                <span className="value_text">
                    Add vehicle information
                </span>
                <div className="edit_box" onClick={()=>{ setActiveEdit("vehicle_info"); setViewModal({isOpen:true});}}>
                <img className="edit_icon" src="assets/img/icons/edit.png" alt="" />
                <span>Edit</span>
                </div>
            </div>
        </div>
               
        </>
    );
};

export default ItemDetailsVehicles;
