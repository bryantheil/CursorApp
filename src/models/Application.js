class Application {
  constructor({
    id = null,
    companyName,
    position,
    applicationDate,
    status = 'applied',
    responseTime = null,
    notes = '',
    ranking = null,
    lastUpdated = new Date(),
    nextFollowUp = null,
  }) {
    this.id = id || crypto.randomUUID();
    this.companyName = companyName;
    this.position = position;
    this.applicationDate = new Date(applicationDate);
    this.status = status;
    this.responseTime = responseTime;
    this.notes = notes;
    this.ranking = ranking;
    this.lastUpdated = new Date(lastUpdated);
    this.nextFollowUp = nextFollowUp ? new Date(nextFollowUp) : null;
  }

  static getStatuses() {
    return [
      'applied',
      'screening',
      'interview_scheduled',
      'interviewed',
      'offer_received',
      'rejected',
      'accepted',
      'withdrawn'
    ];
  }
}

export default Application; 