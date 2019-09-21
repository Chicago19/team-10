export function addAnswer(index, answer) {
  return {
    type: "EXAM_ADD_ANSWER",
    payload: {
      index: index,
      answer: answer
    }
  };
}
