// TODO: Implement User model
// Fields: id, email, password, name, company, createdAt, updatedAt
// Methods: create, findById, findByEmail, update, delete, authenticate

const userSchema = {
  email: String,
  password: String,
  name: String,
  company: String,
  role: { type: String, enum: ["recruiter", "hr", "admin"], default: "recruiter" },
  createdAt: Date,
  updatedAt: Date,
};

module.exports = userSchema;
