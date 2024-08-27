import React from 'react';
import './App.css';
import TextToImageGenerator from './components/TextToImageGenerator';
import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <header className="text-white font-semibold">
        <h1 className="bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] p-4 text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Text Prompt to Image Generator
        </h1>
      </header>
      <main className="p-4">
        <TextToImageGenerator />
      </main>
      <footer className="bg-gray-900 p-3 text-center relative w-full mt-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-md mx-auto bg-sky-500 text-white p-1 rounded-lg shadow-lg">
          <p className="text-xl font-bold">Built by Bhavesh-Dwaram</p>
          <p className="text-l mt-1">NIE ISE-2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
