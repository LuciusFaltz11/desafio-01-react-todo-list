import { Check, PlusCircle, Trash } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import uuid from 'react-uuid';
// import { CreateNewTaskForm } from '../../components/CreateNewTaskForm';
import { FormTaskContainer } from '../../components/CreateNewTaskForm/styles';
import { Header } from '../../components/Header';
import { TaskComponent } from '../../components/TaskComponent';
import { Container, TaskBox, TasksInfos, TasksResume } from './style';

export type TaskType = {
  id: string;
  title: string;
  isComplete: boolean;
};

export const TaskList = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTitleTask, setNewTitleTask] = useState('');

  const handleCreateNewTask = (e: FormEvent) => {
    e.preventDefault();
    const TaskCreated = {
      id: uuid(),
      title: newTitleTask,
      isComplete: false,
    };
    setTasks((state) => [...state, TaskCreated]);
    setNewTitleTask('');
  };

  const markTaskAsCompleted = (id: string) => {
    const newTasks = tasks.map((task) => {
      return task.id === id ? { ...task, isComplete: !task.isComplete } : task;
    });
    setTasks(newTasks);
  };

  const excludeTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const completedTasks = tasks.reduce(
    (acc, task) => {
      if (task.isComplete) {
        acc.sum += 1;
      }
      return acc;
    },
    { sum: 0 }
  );

  return (
    <main>
      <Header />
      <Container>
        <FormTaskContainer onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTitleTask}
            onChange={(e) => setNewTitleTask(e.target.value)}
          />
          <button type="submit">
            Criar <PlusCircle size={20} />
          </button>
        </FormTaskContainer>

        <TasksResume>
          <TasksInfos type="created">
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </TasksInfos>

          <TasksInfos type="completed">
            <strong>Concluídas</strong>
            <span>{`${completedTasks.sum} de ${tasks.length}`}</span>
          </TasksInfos>
        </TasksResume>

        <TaskBox>
          {tasks.map((task) => {
            return (
              <TaskComponent
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
                markTaskAsCompleted={markTaskAsCompleted}
                excludeTask={excludeTask}
              />
            );
          })}
        </TaskBox>
      </Container>
    </main>
  );
};
