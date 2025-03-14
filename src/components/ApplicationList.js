import React from 'react';
import ApplicationService from '../services/ApplicationService';

const ApplicationList = ({ applications, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    const colors = {
      applied: 'bg-blue-100 text-blue-800',
      screening: 'bg-yellow-100 text-yellow-800',
      interview_scheduled: 'bg-purple-100 text-purple-800',
      interviewed: 'bg-indigo-100 text-indigo-800',
      offer_received: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      accepted: 'bg-green-500 text-white',
      withdrawn: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const renderStars = (ranking) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < ranking ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  const getAverageResponseTime = (companyName) => {
    const avgTime = ApplicationService.getAverageResponseTime(companyName);
    if (avgTime === null) return 'No data';
    return `${Math.round(avgTime)} days`;
  };

  return (
    <div className="space-y-4">
      {applications.map(application => (
        <div key={application.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{application.position}</h3>
              <p className="text-gray-600">{application.companyName}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(application)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(application.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Application Date</p>
              <p>{formatDate(application.applicationDate)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className={`inline-block px-2 py-1 rounded-full text-sm ${getStatusColor(application.status)}`}>
                {application.status.replace('_', ' ')}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ranking</p>
              <p className="text-lg">{renderStars(application.ranking)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Response Time</p>
              <p>{getAverageResponseTime(application.companyName)}</p>
            </div>
          </div>

          {application.notes && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Notes</p>
              <p className="mt-1 text-gray-700">{application.notes}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApplicationList; 