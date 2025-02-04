import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CreateModalHeader({ title, setSelection }: any) {
  return (
    <div className="headerBar">
      <button onClick={() => setSelection(null)}>
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      </button>
      <p className="header">Create {title} module</p>
    </div>
  );
}

export default CreateModalHeader;
