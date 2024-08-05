export interface IWorkplace {
  "company": string,
  "position" : string,
  "start": Date,
  "end": Date,
  "currentlyEmployed" : boolean,
  "responsibilities" : string,
  "stack" : string
}

export interface IResumeData {
  "workplaces" : IWorkplace[];
}