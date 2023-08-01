import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Header from '../components/Header';
import ListingSetupFooter from '../components/ListingSetupFooter';
import LoaderPage from '../components/LoaderPage';
import SideMenu from '../components/SideMenu';
import { useState, useEffect, useRef} from 'react';
import {GetViewPortSize, LetterCount, truncate} from '../utilities/tools';
import {isSignedin, fetchListings, userInformation} from '../actions/UserAction';
import '../css/ManageItem.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore} from '../store';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";

const OwnerPage: React.FC = () => {

let location = useLocation();
const dispatch = useDispatch();
const userDetails = useSelector((state: RootStore) => state.user);
const listings = useSelector((state: RootStore) => state.listings);
const userListingInfo = useSelector((state: RootStore) => state.userListingInfo);
const locationChecker = () => {
    return ((location?.pathname == "/ManageItem/") || (location?.pathname == "/ManageItem")) ?
    true :
    false;
};
const [loading, setLoading] = useState(true);

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
                        <div className="ManageItem" style={{minHeight: `${GetViewPortSize()}`}}>

                          <div className="listing_wrapper">

                            <div className="inner_wrapper">

                              <div className="side_menu">
                                <SideMenu 
                                  active = "dashboard"
                                />
                              </div>

                              <div className="window_box">
                                <div className="listing_title">
                                  <img src="assets/Logo/dashboard.png" alt="" />
                                  {/* <div className="title"></div> */}
                                  <div className="subtitle">Hi {userDetails?.first_name}! you can keep track on your listings and its status here. </div>
                                </div>

                                <div className="row">
                                  <div className="top_charts">

                                    <div className="chart">
                                      <div className="chart_title">Active Listings</div>
                                      <div className="chart_value">
                                        <img className="chart_icon" src="assets/img/icons/item.png" alt="" />
                                        <div className="value">{userListingInfo?.active_listing}</div>
                                      </div>
                                    </div>

                                    <div className="chart">
                                      <div className="chart_title">Current Bookings</div>
                                      <div className="chart_value">
                                        <img className="chart_icon" src="assets/img/icons/booking.png" alt="" />
                                        <div className="value">{userListingInfo?.bookings}</div>
                                      </div>
                                    </div>

                                    <div className="chart">
                                      <div className="chart_title">Gross Sales</div>
                                      <div className="chart_value">
                                        <img className="chart_icon" src="assets/img/icons/sales.png" alt="" />
                                        <div className="value">
                                          <span className="curr">AED</span>
                                          {userListingInfo?.gross_sales}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="chart">
                                      <div className="chart_title">Messages</div>
                                      <div className="chart_value">
                                        <img className="chart_icon" src="assets/img/icons/message.png" alt="" />
                                        <div className="value">{userListingInfo?.messages}</div>
                                      </div>
                                    </div>

                                    <div className="chart">
                                      <div className="chart_title">Notifications</div>
                                      <div className="chart_value">
                                        <img className="chart_icon" src="assets/img/icons/notification.png" alt="" />
                                        <div className="value">{userListingInfo?.notifications}</div>
                                      </div>
                                    </div>

                                    
                                  </div>
                                </div>

                                {/* <div className="row box-shadow">

                                  <div className="badge_title">
                                      <img src="assets/Logo/be_elite.png" alt="" />
                                  </div>

                                  <div className="todo_wrapper">
                                    <div className="todo_scrollable">
                                      <div className="todo_box">Add profile picture<img src="assets/img/icons/open.png" alt="" /></div>
                                      <div className="todo_box">Complete your first listing setup<img src="assets/img/icons/open.png" alt="" /></div>
                                      <div className="todo_box">Add your biography<img src="assets/img/icons/open.png" alt="" /></div>
                                      <div className="todo_box">Add a username<img src="assets/img/icons/open.png" alt="" /></div>
                                      <div className="todo_box">Add your address<img src="assets/img/icons/open.png" alt="" /></div>
                                      <div className="todo_box">Add your biography<img src="assets/img/icons/open.png" alt="" /></div>
                                    </div>
                                  </div>

                                  <div className="complete_profile_wrapper">
                                    <div className="progress_wrapper">
                                      <div className="progress_bar">
                                        <div className="progress" style={{width: `50%`}}></div>
                                      </div>
                                    </div>
                                    <div className="row_title">
                                      <div className="text">Complete your account</div>
                                      <div className="sub_text">Owners who have high profile completion rate tends to have more bookings.</div>
                                      
                                      <div className="percentage">50%</div>
                                    </div>
                                  </div>



                                </div> */}

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
                                    YOUR LISTINGS
                                  </div>
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


export default OwnerPage;