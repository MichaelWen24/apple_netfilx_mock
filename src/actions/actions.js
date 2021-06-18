export const SET_MOVIE = "SET_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE"

export const fetchMyList = async () => {
  const resp = await fetch("http://localhost:3100/myList");
  if (!resp.ok) {
    throw new Error("fetching mylist error");
  }
  const myList = await resp.json();
  console.log(myList);
  return myList;
};

export const fetchRecommendations = async () => {
  const resp = await fetch("http://localhost:3100/recommendations");
  if (!resp.ok) {
    throw new Error("fetching mylist error");
  }
  const recommendations = await resp.json();
  return recommendations;
};

export const fetchMovieAction = () => {
  return (dispatch) => {
    return Promise.all([fetchMyList(), fetchRecommendations()])
      .then(([myList, recommendations]) => {
        dispatch(setMovieAction(myList, recommendations));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

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
    payload: movie
  }
}

export const removeMovieAction = (movie) => {
  return {
    type: REMOVE_MOVIE,
    payload: movie
  }
}
