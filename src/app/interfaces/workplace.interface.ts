export interface IWorkplace {
  "company": string,
  "position" : string,
  "start": number,
  "end"?: number,
  "currentlyEmployed" : boolean,
  "responsibilities" : string,
  "stack" : string
}

export interface IResumeData {
  "workplaces" : IWorkplace[];
}