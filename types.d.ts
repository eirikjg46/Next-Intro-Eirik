import axios from 'axios';

export type QuizQuestion = {
    question: string,
    answers: {
      answere: string;
      correct?: boolean; 
    }[];
  }