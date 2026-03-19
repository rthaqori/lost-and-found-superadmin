import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/loginPage";
import DashboardPage from "./components/pages/dashboardPage";
import CollegesPage from "./components/pages/college/collegesPage";
import AdminsPage from "./components/pages/adminsPage";
import StudentsPage from "./components/pages/studentsPage";
import PostsPage from "./components/pages/postsPage";
import AllUserPage from "./components/pages/allUserPage";
import DashboardLayout from "./components/layouts/dashboardLayout";
import AddCollegePage from "./components/pages/college/addCollegePage";
import EditCollegePage from "./components/pages/college/editCollegePage";
import CollegeDetailsPage from "./components/pages/college/collegeDetsilsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/colleges">
          <Route index element={<CollegesPage />} />
          <Route path="add" element={<AddCollegePage />} />
          <Route path=":id/edit" element={<EditCollegePage />} />
          <Route path=":id" element={<CollegeDetailsPage />} />
        </Route>

        <Route path="/admins" element={<AdminsPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<AllUserPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
