import React, { useState, useEffect } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import ApplicationService from './services/ApplicationService';

function App() {
  const [applications, setApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load applications on mount
    const loadedApplications = ApplicationService.getAllApplications();
    setApplications(loadedApplications);
  }, []);

  const handleSubmit = (formData) => {
    if (editingApplication) {
      // Update existing application
      const updated = ApplicationService.updateApplication(editingApplication.id, formData);
      setApplications(prev => prev.map(app => app.id === editingApplication.id ? updated : app));
      setEditingApplication(null);
    } else {
      // Add new application
      const newApplication = ApplicationService.addApplication(formData);
      setApplications(prev => [...prev, newApplication]);
    }
    setShowForm(false);
  };

  const handleEdit = (application) => {
    setEditingApplication(application);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    ApplicationService.deleteApplication(id);
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Application Tracker</h1>
            <button
              onClick={() => {
                setEditingApplication(null);
                setShowForm(!showForm);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {showForm ? 'Close Form' : 'Add Application'}
            </button>
          </div>

          {showForm && (
            <div className="mb-6">
              <ApplicationForm
                onSubmit={handleSubmit}
                initialData={editingApplication}
              />
            </div>
          )}

          <ApplicationList
            applications={applications}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App; 