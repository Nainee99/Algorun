import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Settings, Star, Clock, Zap } from "lucide-react";

const Sidebar = ({ onCreateProject }) => {
  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground border-r border-border">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img className="h-8 w-auto" src="/logo.png" alt="Algorun" />
          <h1 className="ml-2 text-lg font-bold">Algorun</h1>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={onCreateProject}
          >
            <PlusCircle className="mr-3 h-5 w-5" />
            Create New Project
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-3 h-5 w-5" />
            Work with a Team
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-3 h-5 w-5" />
            Favorite Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-3 h-5 w-5" />
            Activity Logs
          </Button>
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-border p-4">
        <Button className="w-full">
          <Zap className="mr-2 h-5 w-5" />
          Upgrade Plan
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
