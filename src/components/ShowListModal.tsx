import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import '../css/ShowListModal.css';




const ShowListModal: React.FC<any> = ({isOpen, OnClose, itemCategory}) => {

    const [list, setList] = useState<any>(itemCategory);
    const [form, setForm] = useState<string>("");


    useEffect(() => {

        if (form.length === 0) {
            setList(itemCategory);
        }

        if (form.length !== 0) {
            // FILTER DATA THEN FILTER SUB OBJECT ARRAY
            const new_list = itemCategory.filter((data:any) => {
                
                return data.category_sub_category.some((inner:any) => inner.sub_category_name.toLowerCase().includes(form.toLowerCase()))
            }).map((data:any) => {

                return {
                    ...data,
                    category_sub_category: data.category_sub_category.filter((inner:any) => inner.sub_category_name.toLowerCase().includes(form.toLowerCase()))
                }

            })

            setList(new_list);
        }
    }, [form]);
    
      return (
            
        <IonModal className="ListingModal" isOpen={isOpen} onDidDismiss={OnClose} swipeToClose={true}>
            
            <div className="closeButton" onClick={()=>{OnClose();}}><img src="assets/img/delete.png" alt="" /></div>
            <IonItem lines="none" className="search_filter">
                <IonLabel position="floating">Filter Search</IonLabel>
                <IonInput value={form} onIonChange={ (e) => { setForm(e.detail.value!) } } name="first_name" placeholder="What are you searching?"></IonInput>
            </IonItem>
                <IonContent>
                    <div className="setup_title">
                        <div className="header_text">
                            <img src="assets/Logo/itematching.png" alt="" />
                            <span>Guide</span>
                        </div>
                        <p className="sub_text">
                            Complete lists of items you can itematch.
                        </p>
                    </div>

                    <div className="listing_guide_box">
                        {
                            list && list.map((cat: any, indexCounter: number) => {
                                return (
                                    <div key={cat?.category_code}>
                                        <div className="categories_wrapper">
                                            <div className="cat_box">
                                                <div className="num">{indexCounter+1}.</div>
                                                <div className="inner_cat">
                                                    <div className="title">{cat?.category_name}</div>
                                                    <div className="sub_categories_wrapper">
                                                        {
                                                            // mapping the subcategories
                                                            cat?.category_sub_category && cat?.category_sub_category.map((subCat: any, subIndex: number) => {
                                                                return (
                                                                    <div key={subIndex}>
                                                                       
                                                                        <div className="sub_cat_box">
                                                                            <div className="sub_cat_title">
                                                                                <div className="sub_cat_num">{indexCounter+1}.{subIndex+1}.</div>
                                                                                <div className="sub_title">{subCat?.sub_category_name}</div>
                                                                            </div>
                                                                            <div className="sub_description">
                                                                                {subCat?.sub_category_description}
                                                                            </div>
                                                                            
                                                                        </div>
                                                                        
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                            
                            


                    </div>
                        
                </IonContent>

        </IonModal>
      );
};
  
  export default ShowListModal;