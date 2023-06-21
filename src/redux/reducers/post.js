import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const postReducer = createReducer(initialState, {
  postCreateRequest: (state) => {
    state.isLoading = true;
  },
  postCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.post = action.payload;
    state.success = true;
  },
  postCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all posts of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete post of a user
  deletePostRequest: (state) => {
    state.isLoading = true;
  },
  deletePostSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deletePostFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all posts
  getAllPostsRequest: (state) => {
    state.isLoading = true;
  },
  getAllPostsSuccess: (state, action) => {
    state.isLoading = false;
    state.allPosts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
