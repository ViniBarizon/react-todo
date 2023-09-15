import Button from "@/components/button/submit";

export default function NewTodo() {
    return <>
        <main className="flex flex-1 shadow items-center h-screen justify-center">
            <div className="border px-4 py-3 rounded align-middle">
                <p>Create a new to-do task.</p>
                <label className="text-xl text">Task</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500 mb-4">
                </input>
                <Button text="Inserir To-Do"/>
            </div>
        </main>
    </>
}