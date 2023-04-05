export interface ICategory {
  id: string;
  name: string;
}

export interface initialState {
  categories: ICategory[];
  loading: boolean;
  error: string | undefined;
}

export interface ActionType {
  type: string;
  payload: [];
}
