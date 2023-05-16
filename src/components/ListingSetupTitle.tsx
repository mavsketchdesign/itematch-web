import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';



const ListingTitle: React.FC<any> = ({itemCategory, createListing, setCreateListing}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
  
    
      return (
            
            <>
                <div className="setupTitle_wrapper">
                  <div className="setupTitle_inner_wrapper">

                    <div className="setup_title margin-bottom-30">
                        <div className="header_text">
                            <img src="assets/Logo/itematching.png" alt="" />
                            <span>Setup</span>
                        </div>
                        <p className="sub_header">
                            TITLE & DESCRIPTION
                        </p>
                        <p className="sub_text">
                            {`Every item has its own story. Tell us what's the story of your ${createListing?.sub_category} ${createListing?.category}.`}
                        </p>
                    </div>

                    <div className="row full-width">
                        <IonItem lines="none" className="form">
                            <IonLabel position="floating">Title</IonLabel>
                            <IonInput value={createListing?.title} onIonChange={ (e) => {setCreateListing({ ...createListing, title: e.detail.value! })} } name="email" placeholder="What's your item title"></IonInput>
                        </IonItem>
                    </div>
                    <div className="foot_note">TITLE: Atleast 5 to 30 characters maximum</div>


                    <div className="row full-width margin-top-30">
                    <IonItem lines="none" className="form textarea">
                      <IonLabel position="floating">Description</IonLabel>
                      <IonTextarea value={createListing?.description} onIonChange={ (e) => {setCreateListing({ ...createListing, description: e.detail.value! })} }></IonTextarea>
                    </IonItem>
                    </div>
                    <div className="foot_note">DESCRIPTION: Atleast 50 to 300 characters maximum</div>

                  </div>
                </div>
            </>
      );
};
  
  export default ListingTitle;