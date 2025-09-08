import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type PhotoData = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
};

export default function Gallery() {
  const [images, setImages] = useState<PhotoData[]>([]);

  const [page, setPage] = useState(1);
  const [hasMore] = useState(true);

  async function fetchImages(pageNum = 1) {
    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=15&page=${pageNum}`;
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
  setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    fetchImages(1);
  }, []);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(nextPage);
  };
  console.log(images);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more images</b>
        </p>
      }
    >
      <div className="gap-2 columns-2 md:columns-3 lg:columns-6">
        {images.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls?.regular}
            alt={photo.alt_description ?? "Image"}
            className="w-full h-auto mb-2 rounded-xl"
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
