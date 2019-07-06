FROM node:12.2.0

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install nodemon

# copy all files, we could use volumes mapping and do away with this step
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
