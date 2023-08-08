import {reducerCases} from "./constants"

export const initialState = {
  token: null,
  user: null,
  playlists: [],
  selectedPlaylistId: "73uqBsL58hvh5Tgarkvu6d", 
  selectedplaylist: null,
  currentlyPlaying:null,
  PlayerState:false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case reducerCases.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        selectedplaylist: action.selectedplaylist,
      };
    case reducerCases.SET_PLAYING:
      return{
        ...state,
        currentlyPlaying:action.currentlyPlaying
      }
    case reducerCases.SET_PLAYER_STATE:
      return{
        ...state,
        PlayerState:action.PlayerState
      }
    default:
      return state;
  }
};

export default reducer;
