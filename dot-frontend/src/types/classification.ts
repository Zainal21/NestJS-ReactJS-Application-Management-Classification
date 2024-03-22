import { Problem } from "./problem";

export type ClassificationData = {
  id: string;
  classificationName: string;
  answer: string;
  problem: Problem;
};

export interface ClassificationModel {
  statusCode: number;
  data: ClassificationData[];
  message: string;
}
