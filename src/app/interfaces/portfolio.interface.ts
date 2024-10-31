import { ITech } from "./tech.interface";

export interface IProject
  {
    name: string,
    link: string,
    description: string,
    stack : ITech[],
  }

  export interface IPortfolio {
    portfolio: IProject[]
  }