FROM node:12
RUN apt-get update
RUN apt-get install -y openssl
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
EXPOSE 3030
EXPOSE 5555
# RUN chmod 744 ./start.sh
CMD ["./start.sh"]