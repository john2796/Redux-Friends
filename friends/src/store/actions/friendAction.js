import axios from "axios";

export const GET_ITEM = "GET_ITEM";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAIL = "GET_ITEM_FAIL";

export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAIL = "ADD_ITEM_FAIL";

export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAIL = "DELETE_ITEM_FAIL";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAIL = "UPDATE_ITEM_FAIL";

const URL = `http://localhost:5000/api/friends`;

export const getItem = () => dispatch => {
  dispatch({
    type: GET_ITEM
  });
  axios
    .get(`${URL}`)
    .then(res =>
      dispatch({
        type: GET_ITEM_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEM_FAIL,
        payload: err
      })
    );
};

export const addItem = newFriend => dispatch => {
  dispatch({
    type: ADD_ITEM
  });
  axios
    .post(`${URL}`, newFriend)
    .then(res =>
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_ITEM_FAIL,
        payload: err
      })
    );
};
export const deleteItem = id => dispatch => {
  dispatch({
    type: DELETE_ITEM
  });
  axios
    .delete(`${URL}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_ITEM_FAIL,
        payload: err
      })
    );
};

export const updateFriend = (id, updatedFriend) => dispatch => {
  dispatch({
    type: UPDATE_ITEM
  });
  axios
    .put(`${URL}/${id}`, updatedFriend)
    .then(res =>
      dispatch({
        type: UPDATE_ITEM_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_ITEM_FAIL,
        payload: err
      })
    );
};
