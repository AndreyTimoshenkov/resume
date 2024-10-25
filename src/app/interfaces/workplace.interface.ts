import { ITech } from "./tech.interface";

export interface IWorkplace {
  "company": string,
  "position" : string,
  "start": number,
  "end"?: number,
  "currentlyEmployed" : boolean,
  "responsibilities" : string,
  "stack" : ITech[]
}

export interface IResumeData {
  "workplaces" : IWorkplace[];
}