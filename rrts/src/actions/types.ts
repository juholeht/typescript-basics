import { FetchTodosAction, DeleteTodoAction } from "./todos";

// default behaviour for enum is that 
// without value it uses indexes as value (0,1,2,3,etc)
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

// Type union for actions
export type Action = FetchTodosAction | DeleteTodoAction;