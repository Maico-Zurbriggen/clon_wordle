import './App.css'
import { Navegation } from './components';
import type { ReactNode } from 'react';

function App({ children }: { children: ReactNode }) {

  return (
    <>
      <header>
        <Navegation />
      </header>
      <main>
        { children }
      </main>
    </>
  )
}

export default App
