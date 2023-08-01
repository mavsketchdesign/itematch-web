import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Header from '../components/Header';
import ListingSetupFooter from '../components/ListingSetupFooter';
import SideMenu from '../components/SideMenu';
import LoaderPage from '../components/LoaderPage';
import { useState, useEffect, useRef} from 'react';
import {GetViewPortSize, LetterCount, truncate} from '../utilities/tools';
import {isSignedin, fetchListings, userInformation} from '../actions/UserAction';
import '../css/ItemInfo.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore} from '../store';
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { Column } from 'ka-table/models';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";

const ItemInfo: React.FC = () => {

let location = useLocation();
const dispatch = useDispatch();
const userDetails = useSelector((state: RootStore) => state.user);
const listings = useSelector((state: RootStore) => state.listings);
const userListingInfo = useSelector((state: RootStore) => state.userListingInfo);
const locationChecker = () => {
    return ( (location?.pathname == "/ManageItem/items") || (location?.pathname == "/ManageItem/items/") || (location?.pathname == "/ManageItem/Items") || (location?.pathname == "/ManageItem/Items/") ) ?
    true :
    false;
  };
const [loading, setLoading] = useState(true);
const [dataArray, setDataArray] = useState<any>([]);
const [listingTable, setListingTable] = useState(false);

  useEffect(() => {
    // execute only if this is the current page
    if(locationChecker()) {
      dispatch(isSignedin(response));
    }

  }, [location]);

  const response = (res:any) => {
    console.log("res", res);
    if(res?.status==200) {

    } else {
        window.location.href = "/";
    }
};

useEffect(()=> {
  if(locationChecker()) {

        setTimeout(()=> {
          setLoading(false);
        }, 500);

        if(userDetails) {
          console.log("Called")
          dispatch(fetchListings(userDetails?.id));
          dispatch(userInformation());
        }

  }
}, [userDetails])

const HeaderName = [
    {
        name: "Item Name",
        key: "itemName"
    },
    {
        name: "Status",
        key: "itemStatus"
    },
    {
        name: "Remarks",
        key: "remarks"
    },
    {
        name: "Location",
        key: "location"
    }
];

const columns: Column[] = Array(HeaderName.length).fill(undefined).map(
    (_, index) => ({
      key: HeaderName[index]?.key,
      width: 150,
      //title: 'Column ' + index,
      title: HeaderName[index]?.name,
      type: DataType.String,
    }),
  );

  
  useEffect(()=> {
        if (Array.isArray(listings)) {

            const dummy_data = listings.map((item, index) => ({
                itemName: item?.title,
                itemStatus: item?.verified ? "Verified": "Not verified",
                remarks: item?.status.charAt(0).toUpperCase() + item?.status.replace('_', ' ').slice(1),
                location: item?.address,
                index: index
            }));

            setDataArray(dummy_data);
        }
  },[listings]);


const TableAction = (index:any, header_title:any) => {
    console.log("index is:", index, "header", header_title);

    window.location.href = `/ManageItem/Items/${listings[index]?.id}`;
}
    

    return (
        <>
        <div className="main" >
            {
            !loading &&
                <>
                    <Header 
                            searchTool = {false}
                    />

                    <IonContent class="home_content" fullscreen>
                        <div className="ItemInfo" style={{minHeight: `${GetViewPortSize()}`}}>

                            <div className="listing_wrapper">
                                <div className="inner_wrapper">

                                <div className="side_menu">
                                    <SideMenu 
                                    active = "listings"
                                    />
                                </div>

                                <div className="window_box">

                                    <div className="listing_title margin-bottom-30">
                                        <img src="assets/Logo/listings.png" alt="" />
                                        <div className="subtitle">Hi {userDetails?.first_name}! Manage your listings here. </div>
                                    </div>


                                    { //if there is missing compliance
                                    userListingInfo?.remarks && userListingInfo?.remarks.length>0 &&
                                    <div className="row">
                                        <div className="header_title">
                                        MISSING COMPLIANCE
                                        <img src="assets/img/icons/warning.png" alt="" />
                                        </div>

                                        <div className="mc_wrapper">

                                        <div className="mc_box">
                                            <div className="mc_comment">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur, eius odit vitae molestiae repudiandae minus ad suscipit impedit nisi porro magni ullam esse recusandae dolore et? Nemo, facilis dolor.

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus deleniti magni laborum obcaecati, sequi possimus itaque nihil, sed vitae molestiae dolores dolor esse dolore harum ducimus, expedita odit adipisci!
                                            </div>
                                            <div className="mc_box_footer">
                                            <IonButton onClick={()=>{}} className="manage_button" type="submit" expand="block">
                                                MANAGE
                                            </IonButton>
                                            </div>
                                        </div>

                                        <div className="mc_box">
                                            <div className="mc_comment">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur, eius odit vitae molestiae repudiandae minus ad suscipit impedit nisi porro magni ullam esse recusandae dolore et? Nemo, facilis dolor.
                                            </div>
                                            <div className="mc_box_footer">
                                            <IonButton onClick={()=>{}} className="manage_button" type="submit" expand="block">
                                                MANAGE
                                            </IonButton>
                                            </div>
                                        </div>


                                        </div>
                                    </div>
                                    }

                                    <div className="row">
                                        <div className="header_title">
                                            <span>YOUR LISTINGS</span>
                                            <div className="listing_stack_option_wrapper">
                                                <div className="listing_stack_option">
                                                    <div className={`option ${listingTable ? "active": ""}`} onClick={()=>{ setListingTable(true); }}>
                                                        <img src="assets/img/icons/list.png" alt="" />
                                                    </div>
                                                    <div className={`option ${!listingTable ? "active": ""}`} onClick={()=>{ setListingTable(false); }}>
                                                        <img src="assets/img/icons/grid.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {
                                        !listingTable &&
                                            <div className="listing_grid">
                                                <div className="listing_box add" onClick={()=> { window.location.href = "/CreateListing"; }}>
                                                <div className="add_wrapper">
                                                    <img className="add_icon" src="assets/img/plus.png" alt="" />
                                                    <span className="add_text">ADD ITEM</span>
                                                </div>
                                                </div>
                                                
                                                {
                                                (listings !== undefined && listings.length>0) && listings.map((item: any, index: number) => {
                                                    return (
                                                    
                                                        <div className="listing_box" key={index}>
                                                            <Link to={`/ManageItem/Items/${item?.id}`}>
                                                                <div className="listing_image" style={{backgroundImage: `url("${item?.ListingImage[0]?.low_res}")`}}></div>

                                                                <div className="listing_item_title">
                                                                {/* <div className="subtitle">{item?.category}</div> */}
                                                                <img className="cat_icon" src={`assets/Logo/categories/${item?.category}.png`} alt="" />
                                                                {/* <div className="title">{truncate(item?.title, 16)}</div> */}
                                                                <div className="title">{item?.title}</div>
                                                                </div>

                                                                {
                                                                // missing_compliance
                                                                item?.status === "initial_review" &&
                                                                <div className="status await">
                                                                    <img className="status_icon" src="assets/img/icons/review.png" alt="" />
                                                                    <div className="status_text">Awaiting Review</div>
                                                                </div>
                                                                }
                                                                
                                                                {
                                                                item?.status === "missing_compliance" &&
                                                                <div className="status mc">
                                                                    <img className="status_icon" src="assets/img/icons/warning.png" alt="" />
                                                                    <div className="status_text">Missing Compliance</div>
                                                                </div>
                                                                }
                                                                {
                                                                item?.status === "initial_rejection" &&
                                                                <div className="status mc">
                                                                    <img className="status_icon" src="assets/img/icons/error.png" alt="" />
                                                                    <div className="status_text">Rejected</div>
                                                                </div>
                                                                }
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                                }

                                            </div>
                                        }

                                        {
                                        listingTable &&
                                            <div className="listing_table">
                                                <Table
                                                    columns={columns}
                                                    data={dataArray}
                                                    //editingMode={EditingMode.Cell}
                                                    rowKeyField={'id'}
                                                    sortingMode={SortingMode.Single}
                                                    childComponents={{
                                                    headCell: {
                                                        elementAttributes: (props) => {
                                                            if (props.column.key === HeaderName[0]?.key){
                                                            return { style: {
                                                                ...props.column.style,
                                                                position: 'sticky',
                                                                left: 0,
                                                                zIndex: 10,
                                                            }
                                                            }
                                                        }
                                                        }
                                                    },
                                                    cell: {
                                                        elementAttributes: (props) => {
                                                            if (props.column.key === HeaderName[0]?.key){
                                                            return { style: {
                                                                ...props.column.style,
                                                                position: 'sticky',
                                                                left: 0,
                                                                backgroundColor: '#eee',
                                                            },
                                                            className: 'my-cell-class',
                                                                onClick: (e, extendedEvent) => {
                                                                    console.log("row #", extendedEvent.childProps);
                                                                    TableAction(extendedEvent.childProps.rowData.index, extendedEvent.childProps.field);
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            return {
                                                                className: 'my-cell-class',
                                                                onClick: (e, extendedEvent) => {
                                                                    console.log("row #", extendedEvent.childProps);
                                                                    TableAction(extendedEvent.childProps.rowData.index, extendedEvent.childProps.field);
                                                                }
                                                            }
                                                        }
                                                        }
                                                    },
                                                    }}
                                                />
                                            </div>
                                        }
                                            
                                    </div>
                                    
                                </div>

                                </div>
                            </div>

                        </div>
                    </IonContent>


                </>
            }

            {
            loading &&
                <LoaderPage />
            }
        </div>
        </>
    );
};


export default ItemInfo;
