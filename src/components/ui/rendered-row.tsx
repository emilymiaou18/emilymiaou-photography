import * as React from 'react';
interface RenderRowProps {
  images: string[];
  layout: 'HH' | 'VVH' | 'VVV' | 'VHV' | 'HVV';
}

export function RenderImageRow({ images, layout }: RenderRowProps) {
  const height = 500 * (2 / 3);
  const layoutLength = layout.length;
  console.log('Layout:', layout, 'Length:', layoutLength);
  if (images.length < layoutLength) {
    console.warn(`Not enough images for layout ${layout}`);
    return null;
  }
  console.log('Rendering image row with layout:', layout);
  return (
    <div className="flex gap-2 w-[1000px] justify-center">

      {images.slice(0, layoutLength).map((img, i) => (
        <div
          key={i}
          className="h-full flex-shrink-0 aspect-[2/3] rounded-md overflow-hidden"
          style={{ height: `${height}px` }}
        >
          <img
            src={img} // ✅ access the actual URL string
            alt=""
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}