import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import '../css/LoaderPage.css';




const NotFoundPage: React.FC<any> = ({icon, message}) => {
    
      return (
        <div className="loading_container">

            {
                <div className="refresh_container">
                    <div className="refresh_box">
                        <img className="broken_image" src={`assets/img/${icon}`} alt="" />
                        <div className="text">{message}</div>
                        <IonButton onClick={ () => { window.location.href = "/"; }} className="outline_submit" type="submit" expand="block">
                            GO TO HOMEPAGE
                        </IonButton>
                    </div>
                </div>
            }
            
        </div>
      );
};
  
  export default NotFoundPage;