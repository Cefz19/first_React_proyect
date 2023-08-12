import React from "react";
import './AllForm.css';
import { AllContext } from '../AllContext';

function AllForm() {
    const {
        addAll,
        setOpenModal,
    } = React.useContext(AllContext);
    const [newAllValue, setNewAllValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addAll(newAllValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewAllValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new ALL</label>
            <textarea
                placeholder="Cut onion to breakfast"
                value={newAllValue}
                onChange={onChange}
                />
            <div className="AllForm-buttonContainer">
                <button type="button" className="AllForm-button
                    AllForm-button--cancel"
                    onClick={onCancel}
                >Cancel</button>
                <button type="submit" className="AllForm-button
            AllForm-button-add">Add</button>
            </div>
        </form>
    );
}

export { AllForm };