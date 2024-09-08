import React from 'react';
import { motion } from 'framer-motion';

// Data for the cards
const cardsData = [
  { id: 1, title: 'Bus 1', route: 'This is the route for Bus 1', count: 5, status: 'On Time' },
  { id: 2, title: 'Bus 2', route: 'This is the route for Bus 2', count: 10, status: 'Delayed' },
  { id: 3, title: 'Bus 3', route: 'This is the route for Bus 3', count: 3, status: 'On Time' },
  { id: 4, title: 'Bus 4', route: 'This is the route for Bus 4', count: 8, status: 'Cancelled' },
  { id: 5, title: 'Bus 5', route: 'This is the route for Bus 5', count: 12, status: 'On Time' },
  { id: 6, title: 'Bus 6', route: 'This is the route for Bus 6', count: 7, status: 'Delayed' },
  { id: 7, title: 'Bus 7', route: 'This is the route for Bus 7', count: 15, status: 'On Time' },
  { id: 8, title: 'Bus 8', route: 'This is the route for Bus 8', count: 9, status: 'On Time' },
  { id: 9, title: 'Bus 9', route: 'This is the route for Bus 9', count: 6, status: 'Delayed' },
  { id: 10, title: 'Bus 10', route: 'This is the route for Bus 10', count: 11, status: 'Cancelled' },
];

// Variants for Framer Motion
const boxVariants = {
  offscreen: { opacity: 0, y: 200 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

const BoxComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Bus Data for Working Days</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white border-4 border-blue-200 shadow-md rounded-lg p-8 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center justify-between text-center h-[280px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={boxVariants}
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>

            {/* Status Badge */}
            <span className={`px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
              card.status === 'On Time'
                ? 'bg-green-100 text-green-800'
                : card.status === 'Delayed'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {card.status}
            </span>

            <p className="text-gray-600 mb-4">{card.route}</p>
            
            {/* Button Container */}
            <div className="flex space-x-4">
              {/* Live Tracking Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Live Tracking
              </button>

              {/* Count Button */}
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300">
                Count: {card.count}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoxComponent;
