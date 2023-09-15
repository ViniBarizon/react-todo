'use client';

import { useState } from 'react';
import { Todos } from "@/types/todos";

interface TodosProps {
    todos: Todos[]
}

export const TodoList: React.FC<TodosProps> = ({ todos }) => {
    const [isChecked, setIsChecked] = useState<Record<number, boolean>>({});

    const handleCheckboxChange = (id: number) => {
        setIsChecked(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };

    return (
        <main className="flex flex-1 shadow items-center justify-center">
            <div className="border px-4 py-3 rounded align-middle">
                <p>Visualize and manipulate all your to-do's.</p>
                <label className="text-xl text">Task</label>
                {todos.map(todo => (
                    <div className={isChecked[todo.id] ? 'line-through text-opacity-50 flex justify-between' : 'flex justify-between'}>
                        <p key={ todo.id }>{ todo.description }</p> 
                        <input className='w-5 h-5 rounded appearance-none bg-lilac cursor-pointer' type="checkbox" onChange={() => handleCheckboxChange(todo.id)} />
                    </div>
                ))}
            </div>
        </main>
    );
}