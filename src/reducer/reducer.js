export const initialState = {
  isModalShown: false,
  modalTitle: "Paused",
  clickedLetters: {},
  secretWordArr: [],
  hiddenLetterArr: {},
  remainingAttempts: 85,
  heartGrayLevel: 0,
};
export function reducer(state, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        isModalShown: !state.isModalShown,
      };
    case "HIDDEN_LETTERS":
      return {
        ...state,
        hiddenLetterArr: action.payload.hiddenInit,
      };
    case "SECRET_WORD":
      return {
        ...state,
        secretWordArr: action.payload.arr,
      };
    case "LETTER_PICK":
      return {
        ...state,
        clickedLetters: {
          ...state.clickedLetters,
          [action.payload.letter]: true,
        },
      };
    case "HIDE_PICKED_LETTER": {
      const key = action.payload.letter.toUpperCase();
      return {
        ...state,
        hiddenLetterArr: { ...state.hiddenLetterArr, [key]: false },
      };
    }
    case "UPDATE_ATTEMPTS": {
      return {
        ...state,
        remainingAttempts: state.remainingAttempts - 8.5,
      };
    }
    case "UPDATE_GRAY_LEVEL": {
      return {
        ...state,
        heartGrayLevel: state.heartGrayLevel + 10,
      };
    }
    case "GAME_LOST": {
      return {
        ...state,
        isModalShown: true,
        heartGrayLevel: 0,
        remainingAttempts: 85,
        modalTitle: "You Lose",
      };
    }
    case "GAME_WON": {
      return {
        ...state,
        isModalShown: true,
        modalTitle: "You Won",
      };
    }

    default:
      return state;
  }
}
