export interface Track {
    id: string;
    name: string;
    description: string;
    currentLevel: number;
    progress: number;
    levels: Level[];
  }
  
  export interface Level {
    id: number;
    name: string;
    tasks: Task[];
    isUnlocked: boolean;
    requiredPoints: number;
    earnedPoints: number;
  }
  
  export interface Task {
    id: string;
    title: string;
    description: string;
    points: number;
    isCompleted: boolean;
    instructions: string;
  }