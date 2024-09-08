// import mongoose from "mongoose";

// const busSchema = new mongoose.Schema({
//     count :{
//         type: Number,
//         default: 0,
//         required: true
//     },

//     source: {
//         type: String,
//         required: true
//     },

//     destination: {
//         type: String,
//         required: true
//     },

//     time: {
//         type: String,
//         required: true
//     },

//     status: {
//         type: String,
//         required: true
//     }
// })

// const daySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },

//     buses: [busSchema]
// })

// const dayModel = mongoose.Schema("dayModel", daySchema)

// export default dayModel

// import mongoose from "mongoose";
// // Define the schema for bus schedule and seating count
// const busSchema = new mongoose.Schema({
//   busNumber: {
//     type: String,
//     required: true
//   },
//   days: {
//     type: String,
//     enum: ['Mon-Fri', 'Sat-Sun'],
//     required: true
//   },
//   timetable: [{
//     time: String, // For example '08:00 AM'
//     route: String, // Route details if needed
//     numberOfPeopleSeated: {
//       type: Number,
//       default: 0
//     }
//   }]
// });

// const Bus = mongoose.model('Bus', busSchema)

// export default Bus