import { Check, Trash } from 'phosphor-react';
import { TaskType } from '../../pages/TaskList';

import {
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxRoot,
  ExcludeTaskButton,
  Task,
} from './style';

interface TaskComponentProps {
  id: string;
  title: string;
  isComplete: boolean;
  markTaskAsCompleted: (id: string) => void;
  excludeTask: (id: string) => void;
}

export const TaskComponent = ({
  id,
  isComplete,
  title,
  markTaskAsCompleted,
  excludeTask,
}: TaskComponentProps) => {
  return (
    <Task>
      <CheckboxContainer
        checked={isComplete}
        onClick={() => markTaskAsCompleted(id)}
      >
        <CheckboxRoot checked={isComplete}>
          <CheckboxIndicator>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxRoot>
        <p>{title}</p>
      </CheckboxContainer>
      <ExcludeTaskButton onClick={() => excludeTask(id)}>
        <Trash size={24} />
      </ExcludeTaskButton>
    </Task>
  );
};
