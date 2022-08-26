import styled from 'styled-components';

export const Container = styled.div`
  max-width: 46rem;
  width: 100%;
  margin: 0 auto;
`;

export const TasksResume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;

interface TasksInfosProps {
  type: 'created' | 'completed';
}

export const TasksInfos = styled.div<TasksInfosProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) =>
      props.type === 'created' ? props.theme.blue : props.theme.purple};
    font-size: 0.875rem;
  }

  span {
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-100']};
    border-radius: 9999px;
    padding: 0.125rem 0.5rem;
    font-weight: 700;
    font-size: 0.75rem;
  }
`;

export const TaskBox = styled.section`
  display: grid;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1.5rem;
`;
