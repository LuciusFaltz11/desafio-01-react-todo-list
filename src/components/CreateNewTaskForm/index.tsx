import { FormTaskContainer } from './styles';
import { PlusCircle } from 'phosphor-react';

export const CreateNewTaskForm = () => {
  return (
    <FormTaskContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </FormTaskContainer>
  );
};
