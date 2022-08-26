import { ThemeProvider } from 'styled-components';
import { TaskList } from './pages/TaskList';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskList />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
