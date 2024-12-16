import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modal = ({ showModal, handleClose }) => {
    const [data, setData] = useState([])
        useEffect (()=>{
            const fetchProducts = async () =>{
                try{
                    const response =await axios.get('https://fakestoreapi.com/products')
                    console.log(response.data)
                    setData(response.data)                   
                }
                catch (error){
                    console.log("error", error)
                }
            } 
            fetchProducts();
        },[])
     

    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Product Table</h5>
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                   
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;