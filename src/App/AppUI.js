import React from 'react';
import { AllCounter } from '../AllCounter';
import { AllSearch } from '../AllSearch';
import { AllList } from '../AllList';
import { AllItem } from '../AllItem';
import { AllsLoading } from '../AllsLoading';
import { AllsError } from '../AllsError';
import { EmptyAlls } from '../EmptyAlls';
import { CreateAllButton } from '../CreateAllButton';
import { AllForm } from '../AllForm';
import { Modal } from '../Modal';
import { AllContext } from '../AllContext';


function AppUI() {
    const {
        loading,
        error,
        searchedAll,
        completeAll,
        deleteAll,
        openModal,
        setOpenModal,
    } = React.useContext(AllContext);
    return (
        <>
            <AllCounter />
            <AllSearch />
            
            <AllList>
                {loading && (
                    <>
                        <AllsLoading />
                        <AllsLoading />
                        <AllsLoading />
                    </>
                )
                }
                {error && <AllsError />}
                {(!loading && searchedAll.length === 0) &&
                    <EmptyAlls />}


                {searchedAll.map(all => (
                    <AllItem
                        key={all.text}
                        text={all.text}
                        completed={all.completed}
                        onComplete={() => completeAll(all.text)}
                        onDelete={() => deleteAll(all.text)}
                    />
                ))}
            </AllList>

            <CreateAllButton 
            setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <AllForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };

