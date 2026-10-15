const FinalStatement = ({ score, quizLength }) => {
  let finalScore;

  switch (score) {
    case score === quizLength:
      finalScore = `Perfect Score! You scored: ${(score / quizLength) * 100}%`;
      break;
    case score >= quizLength * 0.8:
      finalScore = `Great Job! You scored: ${(score / quizLength) * 100}%`;
      break;
    case score >= quizLength * 0.5:
      finalScore = `Not Bad! You scored: ${(score / quizLength) * 100}%`;
      break;
    case score < quizLength * 0.5:
      finalScore = `Better Luck Next Time! You scored: ${(score / quizLength) * 100}%`;
      break;
    default:
      finalScore = `You scored: ${(score / quizLength) * 100}%`;
      break;
  }
  return <h3>{finalScore}</h3>;
};

export default FinalStatement;
