
import React from 'react';
import { board } from './components/board';
import { c } from './components/console';

import { ConsoleView } from './components/console/ConsoleView';
import { BoardView } from './components/board/BoardView';

const AppContainer = ({ children }: any) => (
  <section style={{
    display: 'flex'
  }}>
    {children}
  </section>
)

function App() {
  return (
    <AppContainer>
      <BoardView board={board} />
      <ConsoleView c={c}/>
    </AppContainer>
  );
}

export default App;
