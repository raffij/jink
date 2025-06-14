'use client'

import { useState } from "react";

const images = ['/sitting1.png', '/sleeping1.png', '/laying1.png'];

export default function Home() {
  const [currentImage, setCurrentImage ] = useState(0);

  const handleImageChange = () => {
    setCurrentImage(s => s+1 === images.length ? 0 : s+1);
  }

  return (
    <main className="flex flex-col min-h-dvh justify-center items-center text-center">
      <div onClick={handleImageChange}>
        <img src={images[currentImage]} className="max-w-[600px] m-auto p-5" alt="Jink Bakery and Deli - Coming soon" />
      </div>
    </main>
  );
}
