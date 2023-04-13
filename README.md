# Project Backend Rencana-Studi-Mahasiswa

## Things needed to install
```bash
  1. node v18.12.1 or latest
  2. mysql
  3. docker
```

## Run the System with Docker
We can easily run the whole with only a single command:
```bash
docker-compose up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

And you can run on port :
```bash
http://localhost:3000
```

## Run Manual without Docker
1. The first thing to do is set up MYSQL that is running on port 3306
2. install node js v18.12.1
3. Run this command:
```bash
npm run migrate
```
```bash
npm run dev
```