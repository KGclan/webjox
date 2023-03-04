export interface ITournament {
  name: string;
  rounds: IRound[];
  id?: number;
}

export interface IRound {
  id: number;
  title: string;
  seeds: ISeed[],
}

export interface ISeed {
  id: number;
  teams: ITeam[];
}

export interface ITeam {
  name: string;
}