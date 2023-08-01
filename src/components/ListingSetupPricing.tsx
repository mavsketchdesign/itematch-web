import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingCategory: React.FC<any> = ({itemCategory, createListing, setCreateListing}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    

    
      return (
            
            <>
                <div className="ListingPrice">
                    <div className="scrollable_container">
                        <div className="text_col">
                            <div className="text_container">
                                <div className="header_text">
                                    <span className="outline">ALMOST</span>
                                    <span className="bold">THERE</span>
                                
                                </div>

                                <p className="med_text margin-bottom-40">
                                It's time to set a price on your item.
                                
                                </p>

                            </div>
                        </div>
                        <div className="setup_col">
                            <div className="setup_title">
                                <div className="header_text">
                                    <img src="assets/Logo/v1-full.png" alt="" />
                                    <span>Setup</span>
                                </div>
                                <p className="sub_text">
                                    <b>TIP:</b> 
                                    <i> Giving disounts can literally boost customer satisfaction and drive sales with irresistible discounts: A little generosity goes a long way!</i>
                                </p>
                            </div>
                            <div className="pricing_wrapper">
                                <div className="row grid margin-top-10">
                                    <div className="grid_inner">
                                        <span>Price</span>
                                        <IonItem lines="none" className="input">
                                            <div className="symbol">$</div>
                                            <IonInput value={createListing?.price} onIonChange={ (e) => {setCreateListing({ ...createListing, price: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                        </IonItem>
                                    </div>
                                    <div className="grid_inner">
                                        <span></span>
                                        <IonItem lines="none" className="itemDetails_select">
                                            <select value={createListing?.rate_type} onChange={ (e) => {setCreateListing({ ...createListing, rate_type: e.target.value }) } } defaultValue={""}>
                                                <option value="" disabled>rate</option>
                                                <option value="hourly">per hour</option>
                                                <option value="daily">per day</option>
                                                <option value="weekly">per week</option>
                                                <option value="monthly">per month</option>
                                                <option value="yearly">per year</option>
                                            </select>
                                        </IonItem>
                                    </div>
                                </div>

                                <div className="row margin-top-30">
                                    <span>Discount</span>
                                    <IonItem lines="none" className="input">
                                        <div className="symbol">%</div>
                                        <IonInput value={createListing?.discount} onIonChange={ (e) => {setCreateListing({ ...createListing, discount: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                    </IonItem>
                                    <div className="small_text">You can skip the discount option, you can always visit your dashboard and add or remove discount option on your item.</div>
                                </div>
                            </div>

                                

                                
                        </div>
                    </div>
                </div>
                
            </>
      );
};
  
  export default ListingCategory;