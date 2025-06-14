"use client";

import { useState } from "react";

export default function Home() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = () => {
    setShowComingSoon((s) => !s);
  };

  return (
    <main
      className="flex flex-col min-h-dvh justify-center items-center text-center cursor-pointer p-5"
      onClick={handleClick}
    >
      {showComingSoon ? (
        <>
          <p className="md:text-4xl">
            <i>Coming soon</i>
          </p>
        </>
      ) : (
        <>
          <img
            src="/sitting1.png"
            className="w-full max-w-[600px] m-auto select-none block md:hidden"
            alt="Jink Bakery and Deli - Coming soon"
          />
          <img
            src="/sleeping1.png"
            className="w-full max-w-[600px] m-auto select-none hidden md:block"
            alt="Jink Bakery and Deli - Coming soon"
          />
        </>
      )}
    </main>
  );
}
