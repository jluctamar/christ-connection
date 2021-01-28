export interface triviaQuestion {
    question: string,
    choices: string[],
    answer: string
  }
  
  export interface selectedAnsResp {
      selectedAnswer: string,
      isCorrect: boolean
    }