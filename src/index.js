import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import { HookApp } from './HookApp.jsx';
// import { CounterApp } from './components/use-state/CounterApp.jsx';
// import { CounterWithHook } from './components/use-state/CounterWithHook.jsx';
// import { SimpleForm } from './components/use-effect/SimpleForm.jsx';
import { FormWithHook } from './components/use-effect/FormWithHook.jsx';

ReactDOM.render(
    <FormWithHook />,
    document.getElementById('app')
);
