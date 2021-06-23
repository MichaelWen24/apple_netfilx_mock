export const SET_MOVIE = "SET_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_DONE = "FETCH_DONE";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const fetchMyList = async () => {
  const resp = await fetch("http://localhost:3100/myList");
  //  if (!resp.ok) {
  //    throw new Error("fetching mylist error");
  //  }
   const myList = await resp.json();
   return myList;  
};

export const fetchRecommendations = async () => {
  const resp = await fetch("http://localhost:3200/recommendations");
  // if (!resp.ok) {
  //   throw new Error("fetching mylist error");
  // }
  const recommendations = await resp.json();
  return recommendations;
};

export const fetchMovieAction = () => {
  return (dispatch) => {
    dispatch(fetchingData)
    return Promise.all([fetchMyList(), fetchRecommendations()])
      .then(([myList, recommendations]) => {
        dispatch(setMovieAction(myList, recommendations));
        dispatch(fetchDone)
      }).catch((error) => {
        dispatch(fetchingError(error))
      })
  };
};

export const fetchingError = (error) => {
  return {
    type: FETCHING_ERROR,
    error: error
  };
}

export const setMovieAction = (myList, recommendations) => {
  return {
    type: SET_MOVIE,
    payload: {
      myList,
      recommendations,
    },
  };
};

export const addMovieAction = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

export const removeMovieAction = (movie) => {
  return {
    type: REMOVE_MOVIE,
    payload: movie,
  };
};

export const fetchingData = () => {
  return {
    type: FETCHING_DATA,
  };
};

export const fetchDone = () => {
  return {
    type: FETCH_DONE,
  };
};
