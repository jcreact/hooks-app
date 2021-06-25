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
import { LayoutEffect } from './components/use-layout-effect/LayoutEffect.jsx';

ReactDOM.render(
    <LayoutEffect />,
    document.getElementById('app')
);
