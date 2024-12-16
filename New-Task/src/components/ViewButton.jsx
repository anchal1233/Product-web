import React, { useState } from 'react'
import Modal from './Modal'

const ViewButton = () => {
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <button type="button" className="btn btn-primary view-button" onClick={handleShow}>
                View
            </button>

            <Modal showModal={showModal} handleClose={handleClose} />
        </div>
    );
};

export default ViewButton;