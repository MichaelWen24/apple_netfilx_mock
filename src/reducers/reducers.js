import {
  SET_MOVIE,
  ADD_MOVIE,
  REMOVE_MOVIE,
  FETCHING_DATA,
  FETCH_DONE,
  FETCHING_ERROR,
} from "../actions/actions";

const initialState = {
  myList: [],
  recommendations: [],
  loading: true,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error.message
      };
    }
    case SET_MOVIE: {
      return {
        ...action.payload,
        loading: false,
      };
    }
    case ADD_MOVIE: {
      const addMovieData = action.payload;
      const isAdded = state.myList.find(
        (movie) => movie.id === addMovieData.id
      );
      if (isAdded) {
        return state;
      } else {
        return {
          ...state,
          myList: [...state.myList, addMovieData],
        };
      }
    }
    case REMOVE_MOVIE: {
      const removeMovieData = action.payload;
      const isAdded = state.recommendations.find(
        (movie) => movie.id === removeMovieData.id
      );
      if (isAdded) {
        return {
          ...state,
          myList: state.myList.filter(
            (movie) => movie.id !== removeMovieData.id
          ),
        };
      }
      return {
        ...state,
        myList: state.myList.filter((movie) => movie.id !== removeMovieData.id),
        recommendations: [...state.recommendations, removeMovieData],
      };
    }
    case FETCHING_DATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DONE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
