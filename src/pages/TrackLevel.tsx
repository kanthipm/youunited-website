import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskSidebar from '../components/TaskSidebar';
import TaskDetail from '../components/TaskDetail';

const mockTasks = [
  {
    id: '1',
    title: 'Submit SAT/ACT Scores',
    description: 'Upload your standardized test scores',
    points: 20,
    isCompleted: false,
    instructions:
      'Upload a PDF or screenshot of your official SAT or ACT score report. Make sure all scores and your name are clearly visible.',
  },
  {
    id: '2',
    title: 'Academic Transcript',
    description: 'Upload your current academic transcript',
    points: 15,
    isCompleted: false,
    instructions:
      'Provide your most recent academic transcript showing your courses and grades. The document should be official and include your school name and current GPA.',
  },
  {
    id: '3',
    title: 'Course Planning',
    description: 'Create your course plan for next year',
    points: 10,
    isCompleted: false,
    instructions:
      'Upload a document outlining your planned courses for the next academic year. Include both required courses and electives, and explain how they align with your college goals.',
  },
];

export default function TrackLevel() {
  const { taskId } = useParams();
  const [tasks, setTasks] = useState(mockTasks);

  const handleTaskComplete = (completedTaskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === completedTaskId
          ? { ...task, isCompleted: true }
          : task
      )
    );
  };

  const currentTask = taskId
    ? tasks.find((task) => task.id === taskId)
    : tasks[0];

  return (
    <div className="flex min-h-screen bg-white">
      <TaskSidebar tasks={tasks} />
      {currentTask && (
        <TaskDetail task={currentTask} onComplete={handleTaskComplete} />
      )}
    </div>
  );
}