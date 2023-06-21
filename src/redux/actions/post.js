import axios from "axios";
import { server } from "../../server";

// create post
export const createPost = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "postCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/post/create-post`,
      newForm,
      config
    );
    dispatch({
      type: "postCreateSuccess",
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: "postCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All Posts of a user
export const getAllPostsUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllPostsUserRequest",
    });

    const { data } = await axios.get(
      `${server}/post/get-all-posts-user/${id}`
    );
    dispatch({
      type: "getAllPostsShopSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "getAllPostsUserFailed",
      payload: error.response.data.message,
    });
  }
};

// delete post of a user
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const { data } = await axios.delete(
      `${server}/post/delete-user-post/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deletePostSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deletePostFailed",
      payload: error.response.data.message,
    });
  }
};

// get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllPostsRequest",
    });

    const { data } = await axios.get(`${server}/post/get-all-posts`);
    dispatch({
      type: "getAllPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "getAllPostsFailed",
      //payload: error.response.data.message,
      payload: error,
    });
  }
};
