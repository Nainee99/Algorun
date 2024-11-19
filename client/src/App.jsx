import { Button } from "@/components/ui/button";
import React from "react";

const App = () => {
  return (
    <div className="bg-green-500 h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl text-white font-bold mb-4">Hello, World! 🎉</h1>
        <Button className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600">
          Click me
        </Button>
        {/* Add more TailwindCSS classes and ShadCN UI components to test */}
      </div>
    </div>
  );
};

export default App;
