const pdf = require("pdf-parse");
const mammoth = require("mammoth");

// TODO: Implement file parsing service

const parsePDF = async (buffer) => {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    throw new Error(`PDF parsing error: ${error.message}`);
  }
};

const parseDOCX = async (buffer) => {
  try {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    throw new Error(`DOCX parsing error: ${error.message}`);
  }
};

const parseFile = async (buffer, fileType) => {
  if (fileType === "pdf") {
    return parsePDF(buffer);
  } else if (fileType === "docx") {
    return parseDOCX(buffer);
  }
  throw new Error("Unsupported file type");
};

module.exports = { parseFile, parsePDF, parseDOCX };
