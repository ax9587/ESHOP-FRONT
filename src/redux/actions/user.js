import axios from "axios";
import { server } from "../../server";
//import { userReducer } from "../reducers/user";
import { publicRequest } from "../../requestMethods";
import { useResolvedPath } from "react-router-dom";
import { useRef } from "react";
//login
export const login = async (dispatch, user) => {
  //dispatch(userReducer.loginStart());
  
  try {
    dispatch({
      type: "loginStart",
    });
    const res = await publicRequest.post(`${server}/user/login-user`,user);
    //dispatch(userReducer.loginSuccess(res.data));
    dispatch({
      type: "loginSuccess",
      payload: res.data,
    });
  } catch (err) {
    //dispatch(userReducer.loginFailure());
    dispatch({
      type: "loginFailure",
    });
  }
};

export const logout = async (dispatch) => {
    dispatch({
      type: "logout",
    });
};

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    axios.defaults.withCredentials = true;
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true
    },{
      Cookie: 'user_token=xvalue'
    });
    /* const { data } = await fetch(`${server}/user/getuser`, {
      credentials: 'include',
      method: 'get',
    }); */
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      //payload: error.response.data.message,
      payload: error,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      //payload: error.response.data.message,
      payload: error,
    });
  }
};

// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };

// update user address
export const updatUserAddress =
  (country, city, address1, address2,zipCode, addressType) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          successMessage: "User address updated succesfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailed",
        payload: error.response.data.message,
      });
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
       { withCredentials: true,}
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};
