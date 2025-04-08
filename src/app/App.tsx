import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksPage from "@features/tasks/pages/tasks-page";

export default function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-500">Task Manager</h1>
        <Routes>
          <Route path="/" element={<TasksPage />} />
        </Routes>
      </div>
    </Router>
  );
}
