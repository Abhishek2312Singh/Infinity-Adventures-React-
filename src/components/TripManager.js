import React, { useState } from 'react';
import './TripManager.css';

const PackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    package_type: '',
    package_name: '',
    package_duration: '',
    package_price: ''
    // package_image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.package_type || !formData.package_name || !formData.package_duration || !formData.package_price) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("http://localhost:80/package/add",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      const result = await response.text();
      console.log(result);

      if (response.ok) {
        if (editingId) {
          // Update existing package
          setPackages(prev => prev.map(pkg => 
            pkg.id === editingId 
              ? { ...formData, id: editingId }
              : pkg
          ));
          setEditingId(null);
        } else {
          // Add new package
          const newPackage = {
            ...formData,
            id: Date.now()
          };
          setPackages(prev => [...prev, newPackage]);
        }

        // Reset form
        setFormData({
          package_type: '',
          package_name: '',
          package_duration: '',
          package_price: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting package');
    }
  };

  const handleEdit = (pkg) => {
    setFormData({
      package_type: pkg.package_type,
      package_name: pkg.package_name,
      package_duration: pkg.package_duration,
      package_price: pkg.package_price
    });
    setEditingId(pkg.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      setPackages(prev => prev.filter(pkg => pkg.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      package_type: '',
      package_name: '',
      package_duration: '',
      package_price: '',
      package_image: ''
    });
  };

  return (
    <div className="package-manager">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Package Management</h2>
            
            {/* Add/Edit Form */}
            <div className="card mb-4">
              <div className="card-header">
                <h4>{editingId ? 'Edit Package' : 'Add New Package'}</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="package_type" className="form-label">Package Type</label>
                      <select
                        className="form-control"
                        id="package_type"
                        name="package_type"
                        value={formData.package_type}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Package Type</option>
                        <option value="International">International</option>
                        <option value="Domestic">Domestic</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="package_name" className="form-label">Package Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="package_name"
                        name="package_name"
                        value={formData.package_name}
                        onChange={handleInputChange}
                        placeholder="e.g., Dubai Adventure"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="package_duration" className="form-label">Package Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="package_duration"
                        name="package_duration"
                        value={formData.package_duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 7 days, 2 weeks"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="package_price" className="form-label">Package Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="package_price"
                        name="package_price"
                        value={formData.package_price}
                        onChange={handleInputChange}
                        placeholder="e.g., $1500, ₹50000"
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="package_image" className="form-label">Package Image URL</label>
                      <input
                        type="url"
                        className="form-control"
                        id="package_image"
                        name="package_image"
                        value={formData.package_image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/package-image.jpg"
                        required
                      />
                      {formData.package_image && (
                        <div className="mt-2">
                          <small className="text-muted">Image Preview:</small>
                          <div className="mt-1">
                            <img 
                              src={formData.package_image} 
                              alt="Package preview" 
                              className="img-preview"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <div className="img-error" style={{display: 'none'}}>
                              <small className="text-danger">Invalid image URL</small>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                      {editingId ? 'Update Package' : 'Add Package'}
                    </button>
                    {editingId && (
                      <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Packages List */}
            <div className="card">
              <div className="card-header">
                <h4>Package List ({packages.length} packages)</h4>
              </div>
              <div className="card-body">
                {packages.length === 0 ? (
                  <div className="text-center py-4">
                    <p className="text-muted">No packages added yet. Add your first package above!</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Package Type</th>
                          <th>Package Name</th>
                          <th>Duration</th>
                          <th>Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packages.map(pkg => (
                          <tr key={pkg.id}>
                            <td>
                              <img 
                                src={pkg.package_image} 
                                alt={pkg.package_name}
                                className="package-image"
                                onError={(e) => {
                                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxMEMyMy4zMTM3IDEwIDI2IDEyLjY4NjMgMjYgMTZDMjYgMTkuMzEzNyAyMy4zMTM3IDIyIDIwIDIyQzE2LjY4NjMgMjIgMTQgMTkuMzEzNyAxNCAxNkMxNCAxMi42ODYzIDE2LjY4NjMgMTAgMjAgMTBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMiA0MEwyOCA0MEwyOCAzMkwyOCAyNkwyOCAyMEwyMCAyMEwxMiAyMEwxMiAyNkwxMiAzMkwxMiA0MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==';
                                }}
                              />
                            </td>
                            <td>{pkg.package_type}</td>
                            <td>{pkg.package_name}</td>
                            <td>{pkg.package_duration}</td>
                            <td>{pkg.package_price}</td>
                            <td>
                              <div className="btn-group" role="group">
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => handleEdit(pkg)}
                                  title="Edit Package"
                                >
                                  <i className="fas fa-edit"></i> Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDelete(pkg.id)}
                                  title="Delete Package"
                                >
                                  <i className="fas fa-trash"></i> Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageManager;
