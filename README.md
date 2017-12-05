# nodejs-starter
NodeJs starter for personal projects

## Updating code on server

git pull
npm run prod:build

## Running on Server

NODE_ENV=production pm2 start start.js


## Restarting app on Server

NODE_ENV=production pm2 restart all     

## Kill running app on Server

pm2 delete all

https://github.com/Unitech/pm2
