const app = require('./app');
const connectDatabase = require('./config/database');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

// const dotenv = require('dotenv');

// dotenv.config({path: 'backend/config/config.env'})


process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})
if (process.env.NODE_ENV !== 'PRODUCTION') 
	require('dotenv').config({ path: 'backend/config/config.env' })
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// cloudinary.config({
//     cloudname: "dgneiaky7",
//     api_key: "898821119148654",
//     api_secret: "5SHFHYHVNjRy8kOmY4u4ioDO99Q"
// })

const server =  app.listen(process.env.PORT, () => {
	console.log(`server started on port:' ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});





process.on('unhandledRejection',err =>{
	console.log(`error:, ${err.stack}`);
	console.log((' shutting down this serve due to unhandled promise rejection'))
	server.close(() => {
		process.exit(1)
	})
})