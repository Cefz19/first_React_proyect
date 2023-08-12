import React from "react";
import { AllIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    return (
        <AllIcon
            type="check"
            color={completed ? 'green' : 'grey'}
            onClick={onComplete}
        />

    );
}

export { CompleteIcon };