// TODO: Implement Resume model
// Fields: id, userId, fileName, fileUrl, extractedText, parsedData, createdAt, updatedAt
// Methods: create, findById, findByUserId, update, delete

const resumeSchema = {
  userId: String,
  fileName: String,
  fileUrl: String,
  extractedText: String,
  parsedData: {
    name: String,
    email: String,
    phone: String,
    skills: [String],
    experience: [Object],
    education: [Object],
  },
  createdAt: Date,
  updatedAt: Date,
};

module.exports = resumeSchema;
