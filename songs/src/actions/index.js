// Action creator selectSong
export const selectSong = song => {
  // Return an action (type and payload)
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
