import Gallery from "../components/images.tsx";

export default function Home() {
  return (
    <section className="pt-18 px-2 md:px-3 w-full">
      <article
        className="gap-2 columns-2 md:columns-3 lg:columns-6"
        
      >
        <Gallery />
      </article>
    </section>
  );
}
