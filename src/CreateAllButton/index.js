import './CreateAllButton.css';

function CreateAllButton({ setOpenModal }) {
  return (
    <button className="CreateAllButton" onClick={() => {
        setOpenModal(state => !state);
      }
    }
    >+</button>
  );
}

export { CreateAllButton };