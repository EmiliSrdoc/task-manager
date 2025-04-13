import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TasksPage from "@features/tasks/pages/tasks-page";
import CreateTaskPage from "@features/tasks/pages/create-task-page";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-blue-500">Task Manager</h1>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/tasks/new" element={<CreateTaskPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
