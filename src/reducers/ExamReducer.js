const initialState = {
  answers: [undefined, undefined, undefined, undefined, undefined, undefined]
};

const ExamReducer = (state = initialState, action) => {
  if (action.type === "EXAM_ADD_ANSWER") {
    return {
      ...state,
      answers: [
        ...state.answers.slice(0, action.payload.index),
        action.payload.answer,
        ...state.answers.slice(action.payload.index + 1)
      ]
    };
  }

  return state;
};

export default ExamReducer;
