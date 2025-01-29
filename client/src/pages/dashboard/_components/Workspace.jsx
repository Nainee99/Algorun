import React, { useState } from "react";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Workspace = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  const handleDelete = (project) => {
    setProjectToDelete(project);
    setShowDeleteAlert(true);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter((p) => p.id !== projectToDelete.id));
      setShowDeleteAlert(false);
      setProjectToDelete(null);
    }
  };

  const handleEdit = (project) => {
    setEditingProject({ ...project });
  };

  const saveEdit = () => {
    if (editingProject) {
      setProjects(
        projects.map((p) => (p.id === editingProject.id ? editingProject : p))
      );
      setEditingProject(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </motion.div>
        ))}
      </div>

      {showDeleteAlert && (
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Are you sure you want to delete this project?</AlertTitle>
          <AlertDescription>
            This action cannot be undone. This will permanently delete the
            project "{projectToDelete?.name}".
          </AlertDescription>
          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowDeleteAlert(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </Alert>
      )}

      {editingProject && (
        <Dialog
          open={!!editingProject}
          onOpenChange={() => setEditingProject(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
              <DialogDescription>
                Make changes to your project here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="projectName" className="text-right">
                  Name
                </Label>
                <Input
                  id="projectName"
                  value={editingProject.name}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      name: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="projectLanguage" className="text-right">
                  Language
                </Label>
                <Input
                  id="projectLanguage"
                  value={editingProject.language}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      language: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={saveEdit}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Workspace;
