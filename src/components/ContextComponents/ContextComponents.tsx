import React, { createContext, useContext, useState } from 'react';
import './ContextComponents.css'
import { Button } from 'react-bootstrap';

const ThemeContext = createContext('light');

export default function ContextComponent() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme + '-theme theme-container'}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
      </label>
      </div>
    </ThemeContext.Provider>
  )
}

function Form() {
  const theme = useContext(ThemeContext);
  return (
    <Panel title="Welcome">
      <Button variant={theme === 'dark' ? 'secondary' : 'primary'}>Button</Button>
      
    </Panel>
  );
}

interface PanelI {
	title: string,
	children: JSX.Element|JSX.Element[]
}

function Panel({ title, children }: PanelI) {
  const theme = useContext(ThemeContext);
  const className = 'title-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
