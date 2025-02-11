import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Task } from '../types';
import { CheckCircle, Circle } from 'lucide-react';
import clsx from 'clsx';

interface TaskSidebarProps {
  tasks: Task[];
}

export default function TaskSidebar({ tasks }: TaskSidebarProps) {
  const { taskId, levelId, trackId } = useParams();

  return (
    <div className="w-64 bg-gray-50 h-screen fixed left-0 top-0 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tasks</h2>
        <div className="space-y-2">
          {tasks.map((task) => (
            <Link
              key={task.id}
              to={`/track/${trackId}/level/${levelId}/task/${task.id}`}
              className={clsx(
                'flex items-center p-3 rounded-lg transition-colors',
                taskId === task.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'hover:bg-gray-100',
                task.isCompleted && 'text-green-600'
              )}
            >
              {task.isCompleted ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <Circle className="w-5 h-5 mr-2" />
              )}
              <div className="flex-1">
                <div className="text-sm font-medium">{task.title}</div>
                <div className="text-xs text-gray-500">{task.points} points</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}