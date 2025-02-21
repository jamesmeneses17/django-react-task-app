import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TaskPage from "./assets/pages/taskPage";
import TasFormPage from "./assets/pages/tasFormPage";
import { Navigation } from "./assets/components/navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/task" />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/taskForm" element={<TasFormPage />} />
        <Route path="/task/:id" element={<TasFormPage />} />
      </Routes>

      <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
