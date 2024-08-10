import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerScore: 0,
  playerRockSign: false,
  playerPaperSign: false,
  playerScissorSign: false,
  computerScore: 0,
  computerRockSign: false,
  computerPaperSign: false,
  computerScissorSign: false,
};

const GameSlice = createSlice({
  name: "rockPaperScissor",
  initialState,
  reducers: {
    increasePlayerScore: (state) => {
      state.playerScore = state.playerScore + 1;
    },
    playerRockSignAlt: (state) => {
      state.playerPaperSign = false;
      state.playerRockSign = true;
      state.playerScissorSign = false;
    },
    playerPaperSignAlt: (state) => {
      state.playerPaperSign = true;
      state.playerRockSign = false;
      state.playerScissorSign = false;
    },
    playerScissorSignAlt: (state) => {
      state.playerPaperSign = false;
      state.playerRockSign = false;
      state.playerScissorSign = true;
    },
    increaseComputerScore: (state) => {
      state.computerScore = state.computerScore + 1;
    },
    computerRockSignAlt: (state, action) => {
      if (action.payload === 3) {
        state.computerPaperSign = false;
        state.computerRockSign = true;
        state.computerScissorSign = false;
      }
    },
    computerPaperSignAlt: (state, action) => {
      if (action.payload === 1) {
        state.computerPaperSign = true;
        state.computerRockSign = false;
        state.computerScissorSign = false;
      }
    },
    computerScissorSignAlt: (state, action) => {
      if (action.payload === 2) {
        state.computerPaperSign = false;
        state.computerRockSign = false;
        state.computerScissorSign = true;
      }
    },
    resetGame: (state) => {
      state.computerScore = 0;
      state.playerScore = 0;
      state.playerPaperSign = false;
      state.playerRockSign = false;
      state.playerScissorSign = false;
      state.computerPaperSign = false;
      state.computerRockSign = false;
      state.computerScissorSign = false;
    },
  },
});

export const {
  increasePlayerScore,
  playerRockSignAlt,
  playerScissorSignAlt,
  playerPaperSignAlt,
  increaseComputerScore,
  computerRockSignAlt,
  computerPaperSignAlt,
  computerScissorSignAlt,
  resetGame,
} = GameSlice.actions;
export default GameSlice.reducer;
