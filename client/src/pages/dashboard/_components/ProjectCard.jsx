import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Trash2, Share2, Code2 } from "lucide-react";

const ProjectCard = ({ project, onDelete, onEdit }) => {
  return (
    <Card className="bg-card text-card-foreground hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{project.name}</span>
          <Badge variant="secondary">{project.language}</Badge>
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Last accessed: {project.lastAccessed}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm">
          <Code2 className="h-4 w-4" />
          <span>8 files</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="ghost" size="sm" onClick={() => onEdit(project)}>
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Project</DialogTitle>
              <DialogDescription>
                Invite others to collaborate on "{project.name}"
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="colleague@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="permission" className="text-right">
                  Permission
                </Label>
                <select
                  id="permission"
                  className="col-span-3 p-2 border rounded"
                >
                  <option>View</option>
                  <option>Edit</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Invite Collaborator</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive"
          onClick={() => onDelete(project)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
