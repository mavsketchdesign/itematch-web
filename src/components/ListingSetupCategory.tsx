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
                <div className="ListingBody">
                    <div className="text_col">
                        <div className="text_container">
                            <div className="header_text">
                                <span className="outline">EARN</span>
                                <span className="bold">FROM</span>
                                <div className="image_wrapper">
                                    <img src="assets/Logo/v1-full.png" alt="" />
                                </div>
                            
                            </div>

                            <p className="med_text margin-bottom-40">
                                Enlist your items now and start earning from them. May it be your full time business or a short term income.
                            </p>

                            <p className="sm_text margin-bottom-20">
                            Can’t decide which category to choose? Don’t worry, we are here to help you with that. Please click show items list.
                            </p>
                            
                            <IonButton onClick={ () => { setViewModal({isOpen: true}) }} className="outline_submit" type="submit" expand="block">
                                SHOW ITEMS LIST
                            </IonButton>

                        </div>
                    </div>

                    <div className="setup_col">
                        <div className="setup_title">
                            <div className="header_text">
                                <img src="assets/Logo/itematching.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_text">
                                First, choose which category your item belongs.
                            </p>
                        </div>
                        <div className="category_wrapper">
                            <div className="category_container">

                                {
                                    itemCategory && itemCategory.map((cat: any, index: number) => {
                                        return (
                                            <div className={`category_box ${ createListing?.category_value === cat?.category_value ? "active" : ""  }`} key={cat?.category_code} style={{backgroundImage: `url('assets/img/bg/${cat?.category_image}')`}} onClick={()=> { setCreateListing({...createListing, category: cat?.category_value,category_value: cat?.category_value}) }}>
                                                <div className="cat_title_box">
                                                    <img src={`assets/Logo/categories/${cat?.category_text_icon}`} alt="" />
                                                </div>

                                                {
                                                    createListing?.category_value === cat?.category_value &&
                                                    <img className="check" src="assets/img/checked.png" alt="" />
                                                }
                                            </div>
                                        )
                                    })
                                }
                                <div className="category_box outline_box">
                                    <div className="itematch_choice">Let Itematch decide for you</div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <ShowListModal
                    isOpen={viewModal.isOpen}
                    OnClose= { () => setViewModal({isOpen: false}) }
                    itemCategory = {itemCategory}
                />
            </>
      );
};
  
  export default ListingCategory;