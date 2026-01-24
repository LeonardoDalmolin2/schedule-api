FROM node:22

WORKDIR /app

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]