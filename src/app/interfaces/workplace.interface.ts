import { ICompany } from "./company.interface";
import { ITech } from "./tech.interface";

export interface IWorkplace {
  company: ICompany,
  position : string,
  start: number,
  end?: number,
  currentlyEmployed : boolean,
  responsibilities : string,
  stack : ITech[]
}

export interface IResumeData {
  workplaces : IWorkplace[];
}