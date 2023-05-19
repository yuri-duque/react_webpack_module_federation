import React from 'react';

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));

export default {
    title: 'Example/CounterAppOne',
    component: CounterAppOne,
    argTypes: {},
};

export const Primary = {};