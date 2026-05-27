// TODO: Implement validation utilities

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

const validateFileName = (fileName) => {
  const allowedExtensions = ["pdf", "docx"];
  const ext = fileName.split(".").pop().toLowerCase();
  return allowedExtensions.includes(ext);
};

module.exports = { validateEmail, validatePassword, validateFileName };
