import type { ImageMetadata } from "astro";

export default function RenderImageRow({image}: {image: ImageMetadata}) {
  const total_width = 1200;

  return (
    <div className="flex mb-1.5 gap-1.5 w-full justify-center items-center">
      <div key={image.src} className={`rounded-md h-full`} style={{width: `${total_width}px` }}>
        <img src={image.src} className="rounded-md" loading="lazy" />
      </div>
    </div>
  );

}