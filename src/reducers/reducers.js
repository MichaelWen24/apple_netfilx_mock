import { SET_MOVIE, ADD_MOVIE, REMOVE_MOVIE } from "../actions/actions";

const initialState = {
  myList: [],
  recommendations: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
