import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import { HookApp } from './HookApp.jsx';
// import { CounterApp } from './components/use-state/CounterApp.jsx';
// import { CounterWithHook } from './components/use-state/CounterWithHook.jsx';
// import { SimpleForm } from './components/use-effect/SimpleForm.jsx';
// import { FormWithHook } from './components/use-effect/FormWithHook.jsx';
// import { MultipleHooks } from './components/examples/MultipleHooks.jsx';
// import { FocusScreen } from './components/use-ref/FocusScreen.jsx';
// import { RealExampleRef } from './components/use-ref/RealExampleRef.jsx';
// import { LayoutEffect } from './components/use-layout-effect/LayoutEffect.jsx';
// import { Memorize } from './components/memos/Memorize.jsx';
// import { MemoHook } from './components/memos/MemoHook.jsx';
// import { CallbackHook } from './components/memos/CallbackHook.jsx';
// import { Father } from './components/memos/tarea/Father.jsx';
import { TodoApp } from './components/reducers/TodoApp.jsx';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
