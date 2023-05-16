import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef, useMemo} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingUpload: React.FC<any> = ({itemCategory, createListing, setCreateListing, step}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    
    useEffect(() => {
        if(step == "amenity")
        {
            // console.log("itemsList", itemCategory)
            console.log("createList", createListing)
        }
        
      }, [createListing]);
    

      return (
            
        <>
            <div className="upload_wrapper">
                <div className="upload_inner_wrapper">
                    <div className="upload_scrollable_wrapper">
                        <div className="setup_title margin-bottom-30">
                            <div className="header_text">
                                <img src="assets/Logo/itematching.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_header">
                                UPLOAD YOUR ITEM PHOTOS
                            </p>
                            <p className="sub_text">
                                Share a glimpse of your item to the users.
                            </p>
                        </div>

                        <div className="upload_option_wrapper margin-top-20">

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
};
  
  export default ListingUpload;