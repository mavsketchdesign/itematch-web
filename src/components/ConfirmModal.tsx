import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal, IonTextarea, useIonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import '../css/EditListingModal.css';
import {useDispatch, useSelector} from 'react-redux';




const ShowListModal: React.FC<any> = ({isClose, viewModalConfirm, subject, confirmAction}) => {

    
      return (
        <>
            <IonModal className="EditListingModal sm" isOpen={viewModalConfirm?.isOpen} onDidDismiss={isClose} swipeToClose={true}>

                <div className="closeButton" onClick={isClose}><img src="assets/img/delete.png" alt="" /></div>
                    <IonContent>
                        <div className="confirmation_wrapper">
                            {
                            subject === "deactivated" &&
                                <>
                                    <div className="message">
                                        <span className="text">Are you sure you to deactivate this Item? This will no longer be visible and available for listing.</span>
                                    </div>
                                </>
                            }
                            {
                            subject === "paused" &&
                                <>
                                    <div className="message">
                                        <span className="text">Are you sure you to pause this Item? This will no longer be visible and available for listing.</span>
                                    </div>
                                </>
                            }


                            <div className="confirm_button">
                                <IonButton onClick={isClose} className="save_edit white" type="submit" expand="block">
                                    Cancel
                                </IonButton> 
                                <IonButton onClick={()=>{confirmAction()}} className="save_edit" type="submit" expand="block">
                                    Confirm
                                </IonButton>  
                            </div>
                        </div>
                    </IonContent>

            </IonModal>
        </>
      );
};
  
  export default ShowListModal;