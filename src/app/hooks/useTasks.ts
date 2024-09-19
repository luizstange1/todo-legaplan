import { useEffect, useState } from "react";

export type Task = {
  id: string;
  description: string;
  status: string;
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  function handleUpdateTaskList() {
    if (isClient) {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }

  return { tasks, setTasks, handleUpdateTaskList };
}
