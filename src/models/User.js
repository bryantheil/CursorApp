class User {
  constructor(data = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.bio = data.bio || '';
    this.location = data.location || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Convert user data to JSON format
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      bio: this.bio,
      location: this.location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  // Update user data
  update(data) {
    Object.assign(this, data);
    this.updatedAt = new Date();
    return this;
  }

  // Validate user data
  validate() {
    const errors = {};

    if (!this.name) errors.name = 'Name is required';
    if (!this.email) errors.email = 'Email is required';
    if (this.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = 'Invalid email format';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}

export default User; 