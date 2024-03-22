export interface ProblemModel {
  statusCode: number;
  data: Problem[];
  message: string;
}

export interface Problem {
  id: string;
  problemName: string;
}
