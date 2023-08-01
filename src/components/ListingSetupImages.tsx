import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef, useMemo} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner, base64StringtoFile, extractImageFileExtensionFromBase64} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';
import Dropzone from 'react-dropzone'



const ListingUpload: React.FC<any> = ({itemCategory, createListing, setCreateListing, step}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [imgSrc, setImgSrc] = useState<File[]>([]);
    const [imgSrcExt, setSrcExt] = useState(null);
    const [viewModal, setViewModal] = useState({isOpen: false})
    const imageMaxSize = 9000000 // bytes
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
    const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()});

    // useEffect(() => {
    //     if(step == "images")
    //     {
            
    //         setCreateListing({
    //             ...createListing,
    //             images: imgSrc
    //         });
    //     }
        
    //   }, [imgSrc]);

    const verifyFile = (files:any) => {
        if (files){
                const currentFile = files;
                const currentFileType = currentFile.type
                const currentFileSize = currentFile.size
                if(currentFileSize > imageMaxSize) {
                    console.log("file size big");
                    alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                    return false
                }
                if (!acceptedFileTypesArray.includes(currentFileType)){
                    console.log("file size not allowed");
                    alert("This file is not allowed. Only images are allowed.")
                    return false
                }
            return true;
        }
    }
    
    

    const handleOnDrop = (files:File[], rejectedFiles:any) => {

        // if (rejectedFiles && rejectedFiles.length > 0){
        //     verifyFile(rejectedFiles);
        // }
        
        if (files && files.length > 0){
            var isVerified = null;
            files.map(file=>{
                isVerified = verifyFile(file);
            })
            
            console.log(isVerified);
            if(isVerified)
            {
                // setImgSrc((data) => {
                //     return [...data, ...files]
                // });

                setCreateListing((prev:any) => {
                    return {
                        ...createListing,
                        images: [...createListing.images, ...files]
                    }
                })
            }
            
            
        }
    }

    const deleteImage = (index:number) => {
        setImgSrc((state) => {
            
            return state.filter((data, row) => {
                if (row !== index) return true;

                return false
            })
        });
        // setCreateListing({...createListing, 
        //     images:createListing.images.filter((data:any)=>data.title != title)
        // })

        setCreateListing((data:any) => {

            const new_img = data.images.filter((data:any, row:any) => {
                return row !== index
            })

            return {
                ...data,
                images:  new_img
            }
        })
    }
    
    
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
                                Share a glimpse of your item. Upload atleast 5 photos of your item.
                            </p>
                        </div>

                        <div className="upload_option_wrapper">


                            <div className="upload_drop_box">

                                <div className="upload_title"> UPLOAD: (<span className="image_counter">{createListing?.images.length}</span> / 30 )</div>

                                <Dropzone onDrop={handleOnDrop}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                        </section>
                                    )}
                                </Dropzone>
                                {
                                createListing?.images?.length>0 &&
                                <div className="image_upload_wrapper">
                                    {
                                        createListing?.images?.map((data:any, index:any) => (
                                            <div className="image_upload_view">
                                                <div className="closeButton" onClick={()=>{deleteImage(index)}}><img src="assets/img/delete.png" alt="" /></div>
                                                <img className="images" src={URL.createObjectURL(data)} key={index} />
                                            </div>
                                        ))
                                    }
                                </div>
                                }
                            </div>
                            <div className="upload_preview_box">
                                <div className="preview_title"> Preview </div>



                                {/* <div className="hero" style={{backgroundImage: `url('${URL.createObjectURL(imgSrc[0])}')`}}></div> */}
                                <div className="hero" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[0]) ? URL.createObjectURL(createListing?.images[0]) : "" }')`}}></div>
        
                                <div className="image_grid">
                                    <div className="row">
                                        <div className="grid_box">
                                            <div className="image row-big" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[1]) ? URL.createObjectURL(createListing?.images[1]) : "" }')`}}></div>
                                            <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[2]) ? URL.createObjectURL(createListing?.images[2]) : "" }')`}}></div>
                                            <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[3]) ? URL.createObjectURL(createListing?.images[3]) : "" }')`}}></div>
                                        </div>
                                        <div className="grid_box_big">
                                            <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[4]) ? URL.createObjectURL(createListing?.images[4]) : "" }')`}}></div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
      );
};
  
  export default ListingUpload;