import React from 'react';
import './AllsLoading.css'


function AllsLoading() {

    return(
        <div className='LoadingAll-container'>
            <span className='LoadingAll-completeIcon'></span>
            <p className='LoadingAll-text'></p>
            <span className='LoadingAll-deleteIcon'></span>
            
        </div>
    );
  }

  export { AllsLoading };
  