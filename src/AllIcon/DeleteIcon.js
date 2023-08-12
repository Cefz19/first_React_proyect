import React from "react";
import { AllIcon } from './';

function DeleteIcon({ onDelete }) {
    return (
        <AllIcon
            type="delete"
            color="grey"
            onClick={onDelete}
        />
    );


}

export { DeleteIcon };