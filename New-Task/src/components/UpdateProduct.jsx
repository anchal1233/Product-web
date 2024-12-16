import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct);
    onClose(); 
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Product</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={updatedProduct.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={updatedProduct.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <textarea
                  className="form-control"
                  name="price"
                  value={updatedProduct.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <input
                  className="form-control"
                  name="rating.rate"
                  value={updatedProduct.rating.rate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Rating Count</label>
                <input
                  className="form-control"
                  name="rating.count"
                  value={updatedProduct.rating.count}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  className="form-control"
                  name="category"
                  value={updatedProduct.category}
                  onChange={handleChange}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;