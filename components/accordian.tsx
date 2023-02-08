import { useState } from 'react';

export default function Accordion() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <main>
      <h2 style={{display: 'flex', gap: '6px'}}>
        Secret password
        <button onClick={() => setExpanded(false)}>-</button>
        <button onClick={() => setExpanded(true)}>+</button>
      </h2>
      {isExpanded && <p>Password: <code>hunter2</code>.</p>}
    </main>
  );
}