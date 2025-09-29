// src/components/Photo.tsx
import { useState } from "react";

type PhotoData = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
};

// A simple skeleton component
function Skeleton() {
  return (
    <div className="w-full h-80 mb-2 rounded-xl bg-gray-300 animate-pulse"></div>
  );
}

// A component to manage the image and its loading state
export default function Photo({ photo }: { photo: PhotoData }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Skeleton />}
      <img
        src={photo.urls.regular}
        alt={photo.alt_description ?? "Image"}
        className={`w-full h-auto mb-3 rounded-xl ${
          isLoaded ? "block" : "hidden"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
}
