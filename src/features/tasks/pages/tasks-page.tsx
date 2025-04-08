import { Link } from "react-router-dom";

export default function TasksPage() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-600">
          No tasks yet. Start by adding a new task.
        </p>
        <Link
          to="/tasks/new"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add New Task
        </Link>
      </div>
    </div>
  );
}
