export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQA2cisT3w9sH-vijV5WYE4NjodysxpoG87bD560OIwJnxW5IckP3On9sS1umHWX_u3IWz6Q6cOuIbf2tExUAc6qEWhiZ58Ee1Itf6BAl6UyLXwLTwp2FOsz5c6Rd7gmIHdtK-zXaE6kxy53aeTyFVruAeoTn5yult9ASRVx1P2LuGdF',
};

const reducer = (state, action) => {
 //Action has 2 things (type , payload)

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_GYMSONGS":
      return {
        ...state,
        gym_workout: action.gym_workout,
      };
    case "SET_Current":
      return {
        ...state,
        current_song: action.current_song,
      };
    default:
      return state;
  }
};

export default reducer;
