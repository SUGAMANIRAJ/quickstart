// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!video) return;

    const formData = new FormData();
    formData.append('video', video);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('There was an error uploading the video!', error);
    }
  };


  

  return (
    <div className="container mx-auto p-4">
      <header className="App-header text-center bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Any Video</h2>
        <input
          type="file"
          onChange={handleVideoChange}
          accept="video/*"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload 
        </button>
        {prediction && (
          <p className="mt-4 text-xl font-semibold">
            <span className="text-green-500">Uploaded Successfully</span>
          </p>
        )}
      </header>
    </div>
  );

};

export default App;
