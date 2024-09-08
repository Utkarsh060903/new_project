// // import axios from "axios";
// // import { useState } from "react";

// // const QrScanPage = () => {
// //   const [rollNo, setRollNo] = useState("");  // Roll number from QR code
// //   const [isScanned, setIsScanned] = useState(false);  // Show tick button after scanning

// //   // Mock function to simulate QR code scanning and extracting rollNo
// //   const scanQR = () => {
// //     const scannedRollNo = "12345";  // Replace this with actual QR scanning logic
// //     setRollNo(scannedRollNo);
// //     setIsScanned(true);  // Show the tick button
// //   };

// //   // Handle the tick button click to increment count
// //   const handleTick = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:8804/incrementCount", {
// //         rollNo
// //       });

// //       if (response.data.success) {
// //         alert("Count incremented successfully for roll number: " + rollNo);
// //         setIsScanned(false);  // Hide the tick button after increment
// //       }
// //     } catch (error) {
// //       console.error("Error incrementing count", error);
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <button onClick={scanQR}>Scan QR Code</button>

// //       {isScanned && (
// //         <div style={{ marginTop: "20px" }}>
// //           <h3>Roll Number: {rollNo}</h3>
// //           <button onClick={handleTick}>✔ Confirm (Tick)</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default QrScanPage;


import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode"; // Example library for QR scanning

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);

  const onScanSuccess = (decodedText) => {
    // Extract bus number and time from decoded QR code text
    const url = new URL(decodedText);
    const busNumber = url.pathname.split("/").pop(); // Extract bus number
    const time = url.searchParams.get("time");

    setScannedData({ busNumber, time });

    // Send request to the backend to increase the seat count
    fetch(`http://localhost:8804/api/track/bus/${busNumber}?time=${time}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log("Count updated:", data))
      .catch((error) => console.error("Error updating count:", error));

      alert("QR Code Scanned:" `${decodedText}`);
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(onScanSuccess);
  }, []);

  return (
    <div>
      <div id="reader" style={{ width: "600px", height: "600px" }}></div>
      {scannedData && <p>Bus {scannedData.busNumber}, Time: {scannedData.time}</p>}
    </div>
  );
};

export default QRCodeScanner;


// import React, { useEffect, useState } from 'react';
// import { Html5Qrcode } from 'html5-qrcode';

// const QRCodeScanner = () => {
//   const [scanner, setScanner] = useState(null);
//   const [scannedResult, setScannedResult] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const html5QrCode = new Html5Qrcode("qr-reader");
//     setScanner(html5QrCode);

//     return () => {
//       if (scanner) {
//         scanner.stop().catch((err) => console.log('Error stopping scanner', err));
//       }
//     };
//   }, [scanner]);

//   const startScanner = () => {
//     scanner
//       .start(
//         { facingMode: "environment" },
//         { fps: 10, qrbox: { width: 250, height: 250 } },
//         (decodedText) => {
//           handleQrCodeScanned(decodedText);
//         },
//         (errorMessage) => {
//           console.log(`QR code scan error: ${errorMessage}`);
//         }
//       )
//       .catch((err) => {
//         console.error("Error starting QR code scanner: ", err);
//         setErrorMessage("Unable to start the QR code scanner.");
//       });
//   };

//   const stopScanner = () => {
//     if (scanner) {
//       scanner.stop().catch((err) => {
//         console.error("Error stopping scanner: ", err);
//       });
//     }
//   };

//   const handleQrCodeScanned = (decodedText) => {
//     console.log("QR code scanned: ", decodedText);
//     setScannedResult(decodedText);

//     // Send a request to the backend to increment the seat count
//     fetch(decodedText, {
//       method: 'POST'
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Seat count incremented", data);
//         stopScanner();  // Stop the scanner after successful scan
//       })
//       .catch((error) => {
//         console.error("Error incrementing seat count: ", error);
//       });
//   };

//   return (
//     <div>
//       <h2>QR Code Scanner</h2>
//       <div id="qr-reader" style={{ width: "300px" }}></div>
//       <button onClick={startScanner}>Start Scanner</button>
//       <button onClick={stopScanner}>Stop Scanner</button>
//       {scannedResult && <p>Scanned URL: {scannedResult}</p>}
//       {errorMessage && <p>Error: {errorMessage}</p>}
//     </div>
//   );
// };

// export default QRCodeScanner;