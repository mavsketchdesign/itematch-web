import {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_INFO,
  FETCH_LISTINGS,
  FETCH_SPECIFIC_LISTING,
  FETCH_USER_LIST_INFO

} from "./types";
import axios from "axios";
import { useState, useEffect } from 'react';
import {itematchAPI} from "../utilities/axios";
// import axiosInstance from "../utilities/axios";

export const initialRegister = (userData:any, response:any) => async (dispatch: any) => {
  try {
    var { data } = await itematchAPI.post(
      "user/register", userData
    );

    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: data,
    // });
    response(data);
    
   

  } catch (e) {
    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: {
    //     status: 500,
    //     msg: "Something went wrong while fetching tracks.",
    //     items: [],
    //   },
    // });
    response(e);
  }
};

export const validateEmail = (userData:any, response:any) => async (dispatch: any) => {
  try {
    var { data } = await itematchAPI.post(
      "user/validate", userData
    );

    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: data,
    // });
    response(data);
    
   

  } catch (e) {
    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: {
    //     status: 500,
    //     msg: "Something went wrong while fetching tracks.",
    //     items: [],
    //   },
    // });
  }
};

export const validatePhone = (userData:any, response:any) => async (dispatch: any) => {
  try {
    
    var { data } = await itematchAPI.post(
      "user/validate_phone", userData
    );

    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: data,
    // });
    response(data);
    
   

  } catch (e) {
    // dispatch({
    //   type: USER_SIGNUP,
    //   payload: {
    //     status: 500,
    //     msg: "Something went wrong while fetching tracks.",
    //     items: [],
    //   },
    // });
  }
};

export const userUpdate = (userData:any, response:any) => async (dispatch: any) => {
  
    try {
      
      var { data } = await itematchAPI.post(
        "user/update", userData
      );

      response(data);
      // dispatch({
      //   type: USER_SIGNUP,
      //   payload: data,
      // });
    } catch (e) {
      // dispatch({
      //   type: USER_SIGNUP,
      //   payload: {
      //     status: 500,
      //     msg: "Something went wrong while fetching tracks.",
      //     items: [],
      //   },
      // });
    }
};

export const signinUser = (userData:any, response:any) => async (dispatch: any) => {
  
  try {
    var { data } = await itematchAPI.post(
      "user/sign_in", userData
    );

    response(data);
    dispatch({
      type: USER_SIGNIN,
      payload: data,
    });
  } catch (e) {
    response(data);
  }
};

export const signinSocial = (userData:any,social: any, response:any) => async (dispatch: any) => {
  
  try {
    var { data } = await itematchAPI.post(
    // (if social is google then call the google api) || (if social is google then call the google api) || else Apple api
    (social==="google" ? "user/oauth/google" : social==="facebook" ? "user/oauth/facebook" : "user/oauth/apple"), userData
    );

    // console.log("response from api", data);
    response(data);

    dispatch({
      type: USER_SIGNIN,
      payload: data,
    });
  } catch (e) {
    response(data);
  }
};

export const tokenResendOTP = (userData:any) => async (dispatch: any) => {
  

  try {
    // var { data } = await itematchAPI.post(
    //   "user/resend_email", currentData, {
    //     headers: {
    //       token: userData
    //     }
    //   }
    // );
    var { data } = await itematchAPI.post(
      "user/resend_email"
    );

  } catch (e) {
   
  }

};

export const isSignedin = (response:any) => async (dispatch: any) => {
  
  

  try {
    
    var { data } = await itematchAPI.post(
      "user/user_details"
    );
    
    response(data);
    if(data?.status == 200) {
      dispatch({
        type: USER_INFO,
        payload: data?.data,
      });
    }
    

   
  } catch (e) {
   
  }

};

export const postHomeListing = (itemData: any, response:any) => async (dispatch: any) => {

  console.log("posting");
  try {
    
    var { data } = await itematchAPI.post(
      "post/listing/update", itemData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
      
    response(data);


   
  } catch (e) {
   
  }

};

export const postVehicleListing = (itemData: any, response:any) => async (dispatch: any) => {

  console.log("posting");
  try {
    
    var { data } = await itematchAPI.post(
      "post/vehicle/update", itemData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
      
    response(data);


   
  } catch (e) {
   
  }

};

export const postItemListing = (itemData: any, response:any) => async (dispatch: any) => {

  console.log("posting");
  try {
    
    var { data } = await itematchAPI.post(
      "post/item/update", itemData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
      
    response(data);


   
  } catch (e) {
   
  }

};

export const postFacilityListing = (itemData: any, response:any) => async (dispatch: any) => {

  console.log("posting");
  try {
    
    var { data } = await itematchAPI.post(
      "post/facility/update", itemData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
      
    response(data);


   
  } catch (e) {
   
  }

};

export const fetchListings = (itemData: any) => async (dispatch: any) => {
  const userData = {
    user_id: itemData
  }

  try {
    
    var { data } = await itematchAPI.post(
      "post/fetch_all", userData
    );
    
    if(data?.status == 200) {
      dispatch({
        type: FETCH_LISTINGS,
        payload: data?.data,
      });
    }
    

   
  } catch (e) {
   
  }

};

export const fetchSpecificListing = (itemData: any, PageResponse:any) => async (dispatch: any) => {

  const userData = {
    post_id: itemData
  }

  try {
    
    var { data } = await itematchAPI.post(
      "post/owner_fetch", userData
    );
    
    if(data?.status == 200) {
      dispatch({
        type: FETCH_SPECIFIC_LISTING,
        payload: data?.data,
      });
    } else {
      PageResponse(false);
    }
    

   
  } catch (e) {
   
  }

};

export const userInformation = () => async (dispatch: any) => {


  try {
    
    var { data } = await itematchAPI.post(
      "post/user_information",
    );
    
    if(data?.status == 200) {
      dispatch({
        type: FETCH_USER_LIST_INFO,
        payload: data?.data,
      });
    }
    

   
  } catch (e) {
   
  }

};

export const requestPassword = (itemData: any, response:any) => async (dispatch: any) => {

  try {
    
    var { data } = await itematchAPI.post(
      "user/request_password", itemData
    );
      
    response(1, data);


   
  } catch (e) {
   
  }

};

export const compared_otp = (itemData: any, response:any) => async (dispatch: any) => {

  try {
    
    var { data } = await itematchAPI.post(
      "user/compared_otp", itemData
    );
      
    response(2, data);


   
  } catch (e) {
   
  }

};

export const change_password = (itemData: any, response:any) => async (dispatch: any) => {

  try {
    
    var { data } = await itematchAPI.post(
      "user/change_password", itemData
    );
      
    response(3, data);


   
  } catch (e) {
   
  }

};

export const fetchVehicleMake = (vehicleResponse:any) => async (dispatch: any) => {
  
  try {

      var { data } = await itematchAPI.get(
        "base/vehicle/brands"
      );
  
      // PostResponse(data.status, user_id, data.filenanme, caption);
      console.log("data from post added", data)
      vehicleResponse(data);
  
    
    // if(data?.status == 200) {
    //   dispatch({
    //     type: FETCH_LISTINGS,
    //     payload: data?.data,
    //   });
    // }
    

   
  } catch (e) {
   
  }

};

export const fetchVehicleModel = (itemData: any, vehicleResponse:any) => async (dispatch: any) => {
  
  try {
    
    // var { data } = await axios.get(
    //   `https://api.api-ninjas.com/v1/cars?make=${itemData}&model=&limit=50`, {
    //     headers: {
    //         'X-Api-Key': 'YPbEQXDnlRdLzFYTw6VBkQ==mLpc7edDIfwMPcMW'
    //     }
    //   });

    var { data } = await itematchAPI.post(
      "base/vehicle/models", 
      {
        "brand": itemData
      }
    );
  
      // PostResponse(data.status, user_id, data.filenanme, caption);
      console.log("data from post added", data)
      vehicleResponse(data);
  
    
    // if(data?.status == 200) {
    //   dispatch({
    //     type: FETCH_LISTINGS,
    //     payload: data?.data,
    //   });
    // }
    

   
  } catch (e) {
   
  }

};