
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Initial data for the task board
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'muted',
    tasks: [
      {
        id: 't1',
        title: 'Develop AI-powered content generation module',
        description: 'Implement a module for automated marketing copy generation using LLMs.',
        tag: { color: 'blue', label: 'AI Development' },
        dueDate: 'July 5',
        assignees: 2,
        progress: { completed: 3, total: 5 }
      },
      {
        id: 't2',
        title: 'Design no-code workflow builder UI',
        description: 'Create intuitive drag-and-drop interface for AI workflow creation.',
        tag: { color: 'purple', label: 'UI/UX Design' },
        dueDate: 'July 8',
        assignees: 1,
        progress: { completed: 0, total: 4 }
      },
      {
        id: 't3',
        title: 'Integrate with Google Drive API',
        description: 'Enable seamless data connection from Google Drive for AI applications.',
        tag: { color: 'accent', label: 'Integrations' },
        dueDate: 'July 10',
        assignees: 2,
        progress: { completed: 0, total: 6 }
      },
      {
        id: 't4',
        title: 'Create pre-built template for customer support chatbot',
        description: 'Develop a ready-to-use template for common customer service AI use cases.',
        tag: { color: 'blue', label: 'AI Solutions' },
        dueDate: 'July 12',
        assignees: 1,
        progress: { completed: 0, total: 3 }
      }
    ]
      },
      {
        id: 'in-progress',
        title: 'In Progress',
        color: 'blue',
        tasks: [
          {
            id: 't5',
            title: 'Implement custom deployment options',
            description: 'Develop features for exporting chatbots and generating API endpoints.',
            tag: { color: 'blue', label: 'Deployment' },
            dueDate: 'June 28',
            assignees: 1,
            progress: { completed: 2, total: 3 }
          },
          {
            id: 't6',
            title: 'Research new AI models for integration',
            description: 'Evaluate performance and compatibility of Anthropic and Mistral AI models.',
            tag: { color: 'accent', label: 'AI Research' },
            dueDate: 'June 30',
            assignees: 2,
            progress: { completed: 5, total: 8 }
          },
          {
            id: 't7',
            title: 'Develop enterprise-grade security features',
            description: 'Implement advanced security protocols for large organizational deployments.',
            tag: { color: 'purple', label: 'Security' },
            dueDate: 'July 1',
            assignees: 1,
            progress: { completed: 3, total: 4 }
          }
        ]
      },
      {
        id: 'in-review',
        title: 'In Review',
        color: 'amber',
        tasks: [
          {
            id: 't8',
            title: 'Review personalized email generation workflow',
            description: 'Test and refine the automated email personalization system.',
            tag: { color: 'accent', label: 'Workflow Automation' },
            dueDate: 'June 25',
            assignees: 1,
            progress: { completed: 4, total: 5 }
          },
          {
            id: 't9',
            title: 'Code SDK documentation update',
            description: 'Ensure comprehensive and clear documentation for developers using the SDK.',
            tag: { color: 'blue', label: 'Documentation' },
            dueDate: 'June 26',
            assignees: 2,
            progress: { completed: 6, total: 6 }
          },
          {
            id: 't10',
            title: 'User feedback analysis for no-code interface',
            description: 'Analyze user feedback to identify improvements for the drag-and-drop builder.',
            tag: { color: 'purple', label: 'Product Feedback' },
            dueDate: 'June 24',
            assignees: 1,
            progress: { completed: 12, total: 12 }
          }
        ]
      },
      {
        id: 'completed',
        title: 'Completed',
        color: 'accent',
        tasks: [
          {
            id: 't11',
            title: 'Initial platform architecture design',
            description: 'Finalize the core architecture for the end-to-end AI automation platform.',
            tag: { color: 'purple', label: 'Architecture' },
            dueDate: 'June 20',
            assignees: 1,
            progress: { completed: 5, total: 5 }
          },
          {
            id: 't12',
            title: 'Market research for AI automation trends',
            description: 'Identify key market trends and user needs in AI automation.',
            tag: { color: 'blue', label: 'Market Research' },
            dueDate: 'June 19',
            assignees: 1,
            progress: { completed: 4, total: 4 }
          },
          {
            id: 't13',
            title: 'Setup initial development environment',
            description: 'Configure all necessary tools and environments for the engineering team.',
            tag: { color: 'accent', label: 'DevOps' },
            dueDate: 'June 18',
            assignees: 2,
            progress: { completed: 7, total: 7 }
          }
        ]
      }
    ];

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
    setDraggedTask(task);
    
    // Find source column
    const sourceColumn = columns.find(col => 
      col.tasks.some(t => t.id === task.id)
    );
    
    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData('sourceColumnId', sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Handle drag leave logic if needed
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) {
      return;
    }
    
    // Update columns state
    const newColumns = columns.map(column => {
      // Remove task from source column
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }
      
      // Add task to target column
      if (column.id === targetColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }
      
      return column;
    });
    
    setColumns(newColumns);
    
    // Show a toast notification
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    // This function can be used for programmatic status changes (not used in this implementation)
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
