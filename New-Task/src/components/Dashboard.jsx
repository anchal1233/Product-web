import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UpdateProduct from './UpdateProduct';


function Dashboard() {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
        useEffect (()=>{
            const fetchProducts = async () =>{
                try{
                    const response = await axios.get('https://fakestoreapi.com/products')
                    console.log(response.data)
                    setData(response.data)                   
                }
                catch (error){
                    console.log("error", error)
                }
            } 
            fetchProducts();
        },[])
    function handleShow (product) {
        
        setShowModal(true);
        setSelectedProduct(product);
    }

    
      const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
      };

      const handleShowUpdate = (product) => {
        setSelectedProduct(product);
        setShowUpdateModal(true);
      };
    
      const handleCloseUpdate = () => {
        setShowUpdateModal(false);
        setSelectedProduct(null);
      };
      const handleUpdate = (updatedProduct) => {
            const updateProduct = async () =>{
                try{
                    const response = await axios.put(`https://fakestoreapi.com/products/${updatedProduct.id}`,updatedProduct)
                    {response.status == 200 ? alert("Product Updated") : alert("Not Updated")}
                }
                catch(error){
                    console.log(error)
                }
            }
            updateProduct();
        }
        const handleDelete = (productId) => {
            const confirmDelete = window.confirm("Are you sure you want to delete this product?");
            if (confirmDelete) {
              const productDelete = async () =>{
                const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`)
                {response.status == 200 ? alert("Product Deleted") : alert("Not Deleted")}
              }
              productDelete();
            }
          };
          const filteredProducts = data.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );


  return (
    
    <div className='container-fluid'>
    <input
    id="query"
    class="input"
    type="search"
    placeholder="Search..."
    name="searchbar"
    value={searchQuery}
    onChange={(e)=> setSearchQuery(e.target.value)}
  />
      
        <div className="row ps-4">
                    {filteredProducts.map((product) =>(
                        <div className="card col-2 m-4 border-warning" key={product.id} style={{ width: '16rem' }}>
            <img src={product.image} height='200px' className="card-img-top" alt='' />
            <div className="card-body ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-text"><strong>Price: ${product.price}</strong></p>
                <div className="d-flex align-items-center">
                    <span className="me-2">Rating: {product.rating.rate} / 5</span>
                    <span>({product.rating.count} ratings)</span>
                </div>
                <button onClick={()=> handleShow(product)} className='btn ms-1 btn-primary btn-sm'>View</button>
                <button onClick={()=>handleShowUpdate(product)} className='btn ms-1 btn-warning btn-sm'>Update</button>
                <button onClick={()=>handleDelete(product.id)} className='btn ms-1 btn-danger btn-sm'>Delete</button>
            </div>
        </div>
                    ))}
                    {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct?.title}</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <img src={selectedProduct?.image} width="200px" height="200px" alt="" />
              <b>Category : {selectedProduct?.category}</b>
                <p><b>Description : </b>{selectedProduct?.description}</p>
              
              </div>
              <div className="modal-footer">
              <p>Price Rs.{selectedProduct?.price}</p>
              <p>Rating ({selectedProduct?.rating.rate}/ 5) by {selectedProduct?.rating.count} Customers</p>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showUpdateModal && (
        <UpdateProduct
          product={selectedProduct}
          onUpdate={handleUpdate}
          onClose={handleCloseUpdate}
        />
      )}
     </div>
    </div>
  )
}

export default Dashboard
