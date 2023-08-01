import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef, useMemo} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingItemDetails: React.FC<any> = ({itemCategory, createListing, setCreateListing, step}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    

      return (
            
        <>
            <div className="itemDetails_wrapper">
                <div className="itemDetails_inner_wrapper">
                    <div className="itemDetails_scrollable_wrapper">
                        <div className="setup_title margin-bottom-30">
                            <div className="header_text">
                                <img src="assets/Logo/itematching.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_header">
                                ITEM ADDITIONAL INFORMATION
                            </p>
                            <p className="sub_text">
                                To give a clear details of what the users will be getting from this item.
                            </p>
                        </div>

                        <div className="itemDetails_option_wrapper margin-top-20">

                            <div className="row margin-top-10">
                                <span>Business Type</span>
                                <IonItem lines="none" className="itemDetails_select">
                                    <select value={createListing?.business_type} onChange={ (e) => {setCreateListing({ ...createListing, business_type: e.target.value }) } } defaultValue={""}>
                                        <option value="" disabled>Business Type</option>
                                        <option value="personal">Personal</option>
                                        <option value="business">Business</option>
                                    </select>
                                </IonItem>
                            </div>

                            {
                            (createListing?.category == "home" || createListing?.category == "facility") &&
                                <div className="row margin-top-10">
                                    <span>Item Type</span>
                                    <IonItem lines="none" className="itemDetails_select">
                                        <select value={createListing?.place_type} onChange={ (e) => {setCreateListing({ ...createListing, place_type: e.target.value }) } } defaultValue={""}>
                                            <option value="" disabled>Item Type</option>
                                            <option value="entire">Entire {createListing?.category}</option>
                                            <option value="shared">Shared {createListing?.category}</option>
                                        </select>
                                    </IonItem>
                                </div>
                            }

                            {
                            createListing?.category == "home" &&
                            <>
                                
                                <div className="row margin-top-10">
                                    <span>Bed Capacity</span>
                                    <IonItem lines="none" className="input">
                                        <IonInput value={createListing?.bedroom_capacity} onIonChange={ (e) => {setCreateListing({ ...createListing, bedroom_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                    </IonItem>
                                </div>

                                <div className="row margin-top-10">
                                    <span>Guest Capacity</span>
                                    <IonItem lines="none" className="input">
                                        <IonInput value={createListing?.guest_capacity} onIonChange={ (e) => {setCreateListing({ ...createListing, guest_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                    </IonItem>
                                </div>

                                <div className="row margin-top-10">
                                    <span>Number of Bathrooms</span>
                                    <IonItem lines="none" className="input">
                                        <IonInput value={createListing?.bathroom_capacity} onIonChange={ (e) => {setCreateListing({ ...createListing, bathroom_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                    </IonItem>
                                </div>
                            </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
      );
};
  
  export default ListingItemDetails;