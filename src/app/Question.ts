export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  explanation: string;
  selectedAnswer: string;
}

export interface Option {
  text: string;
  correct?: boolean;
}
