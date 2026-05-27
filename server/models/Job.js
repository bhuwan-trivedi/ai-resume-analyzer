// TODO: Implement Job model
// Fields: id, userId, title, description, requiredSkills, createdAt, updatedAt
// Methods: create, findById, findByUserId, update, delete

const jobSchema = {
  userId: String,
  title: String,
  description: String,
  requiredSkills: [String],
  department: String,
  location: String,
  salary: String,
  createdAt: Date,
  updatedAt: Date,
};

module.exports = jobSchema;
