import { ITech } from "./tech.interface";

export interface IProject
  {
    name: string,
    link: string,
    pics: IPic[],
    description: string,
    stack : ITech[],
  }

  export interface IPortfolio {
    portfolio: IProject[]
  }

  export interface IPic {
    url: string,
    thumbnail: string,
  }