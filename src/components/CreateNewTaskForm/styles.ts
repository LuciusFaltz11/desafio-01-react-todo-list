import styled from 'styled-components';

export const FormTaskContainer = styled.form`
  width: 100%;
  margin-top: -1.65rem;
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    background: ${(props) => props.theme['gray-500']};
    padding: 1rem;
    color: ${(props) => props.theme['gray-100']};
    border-radius: 8px;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button[type='submit'] {
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    font-weight: 700;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['blue']};
      transition: background-color 0.2s;
    }
  }
`;
