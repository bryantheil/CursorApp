import Application from '../models/Application';

class ApplicationService {
  constructor() {
    this.storageKey = 'job_applications';
    this.responseTimeKey = 'company_response_times';
    
    // Request notification permission on service initialization
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  // Get all applications
  getAllApplications() {
    const applications = localStorage.getItem(this.storageKey);
    return applications ? JSON.parse(applications) : [];
  }

  // Add new application
  addApplication(applicationData) {
    const application = new Application(applicationData);
    const applications = this.getAllApplications();
    applications.push(application);
    localStorage.setItem(this.storageKey, JSON.stringify(applications));
    return application;
  }

  // Update application
  updateApplication(id, updateData) {
    const applications = this.getAllApplications();
    const index = applications.findIndex(app => app.id === id);
    
    if (index !== -1) {
      const oldStatus = applications[index].status;
      const updatedApp = { ...applications[index], ...updateData, lastUpdated: new Date() };
      applications[index] = updatedApp;
      localStorage.setItem(this.storageKey, JSON.stringify(applications));

      // If status changed, send notification
      if (oldStatus !== updateData.status) {
        this.sendStatusUpdateNotification(updatedApp);
      }
      
      return updatedApp;
    }
    return null;
  }

  // Delete application
  deleteApplication(id) {
    const applications = this.getAllApplications();
    const filteredApps = applications.filter(app => app.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filteredApps));
  }

  // Update company response time data
  updateCompanyResponseTime(companyName, responseTime) {
    const responseTimes = this.getCompanyResponseTimes();
    if (!responseTimes[companyName]) {
      responseTimes[companyName] = {
        totalTime: 0,
        count: 0
      };
    }
    
    responseTimes[companyName].totalTime += responseTime;
    responseTimes[companyName].count += 1;
    
    localStorage.setItem(this.responseTimeKey, JSON.stringify(responseTimes));
  }

  // Get average response time for a company
  getAverageResponseTime(companyName) {
    const responseTimes = this.getCompanyResponseTimes();
    const company = responseTimes[companyName];
    
    if (company && company.count > 0) {
      return company.totalTime / company.count;
    }
    return null;
  }

  // Get all company response times
  getCompanyResponseTimes() {
    const times = localStorage.getItem(this.responseTimeKey);
    return times ? JSON.parse(times) : {};
  }

  // Send notification for status updates
  sendStatusUpdateNotification(application) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Application Status Update', {
        body: `Your application for ${application.position} at ${application.companyName} has been updated to: ${application.status}`,
        icon: '/favicon.ico'
      });
    }
  }
}

export default new ApplicationService(); 