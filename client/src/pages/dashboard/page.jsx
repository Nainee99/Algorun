import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "./_components/Sidebar";
import Workspace from "./_components/Workspace";
import CreateProjectDialog from "./_components/CreateProjectDialog";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const Dashboard = () => {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const initialProjects = [
    {
      id: 1,
      name: "Project 1",
      language: "JavaScript",
      lastAccessed: "2023-12-01",
    },
    {
      id: 2,
      name: "Project 2",
      language: "Python",
      lastAccessed: "2023-12-05",
    },
    { id: 3, name: "Project 3", language: "Java", lastAccessed: "2023-12-10" },
  ];

  const handleCreateProject = (newProject) => {
    // This function would typically update the projects state
    // For now, we'll just close the dialog
    setIsCreateProjectOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar onCreateProject={() => setIsCreateProjectOpen(true)} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />
          <motion.main
            className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
            <Workspace projects={initialProjects} />
          </motion.main>
        </div>
        <CreateProjectDialog
          isOpen={isCreateProjectOpen}
          onClose={() => setIsCreateProjectOpen(false)}
          onCreateProject={handleCreateProject}
        />
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
