 setup/complete-project-structure
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]

FROM node:18-alpine\n\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm ci --only=production\n\n# Copy application files\nCOPY . .\n\n# Expose port\nEXPOSE 5000\n\n# Start application\nCMD ["npm", "start"]\n
 main
