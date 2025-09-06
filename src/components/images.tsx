import { useEffect, useState } from "react";
import imageData from "../data/imageData";

type PhotoData = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
};

export default function Gallery() {
  const [images, setImages] = useState<PhotoData[]>([]);

  useEffect(() => {
    setImages(imageData);
  }, []);
  return (
    <>
      {images.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls?.regular}
          alt={photo.alt_description ?? "Unsplash image"}
          className=" w-full h-auto  mb-2 rounded-xl  "
        />
      ))}
    </>
  );
}
