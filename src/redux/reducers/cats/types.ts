export interface ICat {
  id: string;
  url: string;
}

export interface IInitialState {
  cats: ICat[];
  loading: boolean;
  error: string | undefined;
}

export interface ActionType {
  type: string;
  payload: [];
}
