export interface IWorkplace {
  "company": string,
  "position" : string,
  "start": string,
  "end": string,
  "responsibilities" : string,
  "stack" : string
}

export interface IResumeData {
  "workplaces" : IWorkplace[];
}