import {
  USER_SIGNUP,
  USER_SIGNIN

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
      
      console.log("data", userData);
      console.log("JWT", localStorage.getItem('user_token'));
      
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
    console.log("data", userData);
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