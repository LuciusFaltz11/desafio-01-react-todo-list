import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export const Task = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  border-radius: 8px;
  padding: 1rem;
  background: ${(props) => props.theme['gray-500']};
  font-size: 0.875rem;
`;

export const ExcludeTaskButton = styled.button`
  background: transparent;
  line-height: 0;
  cursor: pointer;
  border: none;

  &:hover {
    svg {
      color: ${(props) => props.theme.danger};
      transition: color 0.2s;
    }
  }

  svg {
    color: ${(props) => props.theme['gray-300']};
  }
`;

interface CheckboxContainerProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  flex: 1;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  cursor: pointer;

  text-decoration: ${(props) => props.checked && 'line-through'};
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color: transparent;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  border: 1px solid ${(props) => props.theme.blue};

  &:hover {
    border-color: ${(props) => props.theme['blue-dark']};
  }

  &[data-state='unchecked']:hover {
    border-color: ${(props) => props.theme['blue-dark']};
    transition: background 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};
  }

  &[data-state='checked']:hover {
    background: ${(props) => props.theme['purple']};
    transition: background 0.2s;
    border-color: ${(props) => props.theme.purple};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  svg {
    color: ${(props) => props.theme['gray-100']};
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0;
  }
`;
