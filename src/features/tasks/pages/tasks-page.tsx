import { Link } from "react-router-dom";
import { useGetTasks } from "../api/get-tasks";
import { Task } from "@packages/supabase/entity.types";

export default function TasksPage() {
  const { data: tasks, isLoading, error } = useGetTasks();

  if (isLoading) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">Loading tasks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-red-600">
            Error loading tasks. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <div className="bg-white shadow rounded-lg p-6">
          <ul className="space-y-4">
            {tasks.map((task: Task) => (
              <li key={task.id} className="border-b pb-4 last:border-b-0">
                <h3 className="font-medium">{task.title}</h3>
                {task.description && (
                  <p className="text-gray-600 mt-1">{task.description}</p>
                )}
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 rounded text-sm ${
                      task.is_done
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {task.is_done ? "Completed" : "In Progress"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">
            No tasks yet. Start by adding a new task.
          </p>
        </div>
      )}
      <Link
        to="/tasks/new"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add New Task
      </Link>
    </div>
  );
}
