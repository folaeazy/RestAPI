FROM node:18

# Setting up work dir
WORKDIR /app

# copy all package and lock.json
COPY package*.json ./


# Install the dependencies into the container
RUN npm install

# copy application code
COPY . .

# expose port 
EXPOSE 3000

# command to run
CMD ["node", "server.js"]