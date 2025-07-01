const mongoose = require('mongoose');

// exports.connect = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://faraz:V66xuwhbSvliM5YP@cluster0.dtsaijf.mongodb.net/', 
//         {
//         dbName: 'classJuly01',
//         }
// ).then(() => {
//         console.log('Connected to MongoDB')})
//     .catch((error) => { console.log(error)});
//   } 
  
//   catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
        
    
// }

exports.connect = async () => {
    mongoose.connect('mongodb+srv://faraz:V66xuwhbSvliM5YP@cluster0.dtsaijf.mongodb.net/',
        {
            dbName: 'classJuly01',
        }
    ).then((conn) => {
        //console.log("response", conn);
        console.log(`database connected with host: ${conn.connection.host}`);
    }).catch((err) => {
        console.error("Error in connection", err);
    })
}