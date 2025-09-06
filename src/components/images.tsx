import { useEffect, useState } from "react";

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
    // fetch(
    //   `https://api.unsplash.com/photos/?client_id=vWnqAj6UA6Oz7uynmeSooW49hosVO_3FO2RemU9MymU&per_page=30`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setImages(data);
    //   })
    //   .catch((err) => console.error(err));

    async function fetchImages() {
      try {
        const res1 = await fetch(
          `https://api.unsplash.com/photos/?client_id=vWnqAj6UA6Oz7uynmeSooW49hosVO_3FO2RemU9MymU&per_page=30`
        );
        const data1 = await res1.json();

        const res2 = await fetch(
           `https://api.unsplash.com/photos/?client_id=vWnqAj6UA6Oz7uynmeSooW49hosVO_3FO2RemU9MymU&per_page=20`
        );
        const data2 = await res2.json();

        setImages([...data1, ...data2]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
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
