import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import '../css/LoaderPage.css';




const LoaderPage: React.FC<any> = () => {
    
    useEffect(()=> {
        setTimeout(()=>{
            setRefresh(true);
        }, 15000)
    }, []);


    const [refresh, setRefresh] = useState(false);
    const refreshButton = () => {
        window.location.reload();
    }

      return (
        <div className="loading_container">
            {/* <img className="load_ball" src="assets/img/loading.gif" alt="" /> */}


            {
            !refresh &&
                <div className="loadingio-spinner-disk-se8bv8k1lxl">
                    <div className="ldio-kakwhv0uegi">
                        <div>
                        <div></div>
                        <div></div>
                        </div>
                    </div>
                </div>
            }
            {
            refresh &&
                <div className="refresh_container">
                    <div className="refresh_box">
                        <img className="broken_image" src="assets/img/server_down.png" alt="" />
                        <div className="text">Sorry it took time than usual, please refresh the page!</div>
                        <IonButton onClick={ () => { refreshButton(); }} className="outline_submit" type="submit" expand="block">
                            REFRESH PAGE
                        </IonButton>
                    </div>
                </div>
            }
            
        </div>
      );
};
  
  export default LoaderPage;