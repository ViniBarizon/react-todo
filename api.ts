import { Todos } from "@/types/todos";

const baseUrl = 'http://localhost:3001';

export const getTodos = async (): Promise<Todos[]> => {
    const response = await fetch(`${baseUrl}/tasks`);
    const todos = await response.json();
    console.log(todos);
    
    return todos;
}