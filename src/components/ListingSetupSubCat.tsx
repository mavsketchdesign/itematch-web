import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingSubCategory: React.FC<any> = ({itemCategory, createListing, setCreateListing}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    

    
      return (
            
            <>
                <div className="ListingBody">
                    <div className="scrollable_container md-center">
                        <div className="text_col md-d-none">
                            <div className="text_container">
                                <div className="header_text">
                                    <span className="outline">EARN</span>
                                    <span className="bold">FROM</span>
                                    <div className="image_wrapper">
                                        <img src="assets/Logo/v1-full.png" alt="" />
                                    </div>
                                
                                </div>

                                <div className="header_description">
                                    <p className="med_text">
                                        Enlist your items now and start earning from them. May it be your full time business or a short term income.
                                    </p>

                                    <p className="sm_text">
                                    Can’t decide which category to choose? Don’t worry, we are here to help you with that. Please click show items list.
                                    </p>
                                    
                                    <IonButton onClick={ () => { setViewModal({isOpen: true}) }} className="outline_submit" type="submit" expand="block">
                                        SHOW ITEMS LIST
                                    </IonButton>
                                </div>

                            </div>
                        </div>

                        <div className="setup_col">
                            <div className="setup_title">
                                <div className="header_text">
                                    <img src="assets/Logo/itematching.png" alt="" />
                                    <span>Setup</span>
                                </div>
                                <p className="sub_text">
                                    {`Next, please tell us what type of ${createListing?.category} you have.`}
                                </p>
                            </div>
                            <div className="category_wrapper">
                                <div className="category_container">

                                    {
                                        itemCategory && itemCategory.filter((data:any)=>data?.category_value== createListing?.category_value).map((cat: any, index: number) => {
                                            return (
                                                <div className={`category_box active`} key={index} style={{backgroundImage: `url('assets/img/bg/${cat?.category_image}')`}}>
                                                    <div className="cat_title_box">
                                                        <img src={`assets/Logo/categories/${cat?.category_text_icon}`} alt="" />
                                                    </div>
                                                    <img className="check" src="assets/img/checked.png" alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className="sub_category_wrapper margin-top-30">
                                <div className="subCatheader">
                                    {`Choose the type of ${createListing?.category}.`}
                                </div>

                                <IonItem lines="none" className="sub_category_select margin-top-10">
                                    <select value={createListing?.sub_category} onChange={ (e) => {setCreateListing({ ...createListing, sub_category: e.target.value }) } } defaultValue={""}>
                                        <option value="" disabled>Item type:</option>
                                        {/* <option value="44">UK (+44)</option> */}

                                        {
                                            itemCategory && itemCategory.filter((data:any)=>data?.category_value== createListing?.category_value).map((cat: any) => {
                                                return (

                                                    cat?.category_sub_category && cat?.category_sub_category.map((subCat: any, index: number) => {
                                                        return (
                                                            <option key={index} value={subCat?.sub_category_value}>{subCat?.sub_category_name}</option>
                                                        )
                                                    })
                                                
                                                )
                                            })
                                        }
                                    </select>
                                </IonItem>
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
  
  export default ListingSubCategory;