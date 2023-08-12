import './AllList.css';

function AllList({ children }) {
    return(
        <ul className="AllList">
            { children }
        </ul>
    );
  }
  
  export { AllList };