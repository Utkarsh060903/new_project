import mongoose from 'mongoose';
import { Bus } from "./models/bus.js"

// Connect to MongoDB
mongoose.connect("mongodb+srv://lnmiit:lnmiit@cluster0.mkoomc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected...");
}).catch(err => {
  console.error("Connection error", err);
});

// Define the hardcoded data
const busData = [
  {
    busNumber: '101',
    days: 'Mon-Fri',
    timetable: [
      { time: '08:00AM', numberOfPeopleSeated: 0 },
      { time: '09:00AM', numberOfPeopleSeated: 0 }
    ]
  },
  {
    busNumber: '101',
    days: 'Sat-Sun',
    timetable: [
      { time: '08:00AM', numberOfPeopleSeated: 0 },
      { time: '09:00AM', numberOfPeopleSeated: 0 }
    ]
  }
];

// Insert the data into the database
async function seedDatabase() {
  try {
    // Clear existing data
    await Bus.deleteMany({});
    
    // Insert the new data
    await Bus.insertMany(busData);
    
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
}

seedDatabase();