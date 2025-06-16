import type { ImageMetadata } from "astro";

interface RenderRowProps {
  images: ImageMetadata[];
  layout: 'HH' | 'VVH' | 'VVV' | 'VHV' | 'HVV';
}

export default function RenderImageRow({images, layout}: RenderRowProps) {
  const total_width = 1500;
  const layoutLength = layout.length;
  console.log('Layout:', layout, 'Length:', layoutLength);
  if (images.length < layoutLength) {
    console.warn("Not enough images for layout");
    return null;
  }
  console.log('Rendering image row with layout:', layout);

  const h_width = total_width / 7 * 3;
  const h_height = h_width / 3 * 2;
  const v_width = total_width / 7 * 2;
  const v_height = v_width * 3 / 2;
  var widths: number[] = [];
  var heights: number[] = [];
  // Calculate width and height based on layout
  if (layout === 'HH') {
    widths = [h_width, h_width];
    heights = [h_height, h_height];
  }
  else if (layout === 'VVH') {
    widths = [v_width, v_width, h_width];
    heights = [v_height, v_height, h_height];
  }
  else if (layout === 'VVV') {
    widths = [v_width, v_width, v_width];
    heights = [v_height, v_height, v_height];
  }
  else if (layout === 'VHV') {
    widths = [v_width, h_width, v_width];
    heights = [v_height, h_height, v_height];
  }
  else if (layout === 'HVV') {
    widths = [h_width, v_width, v_width];
    heights = [h_height, v_height, v_height];
  }

  return (
    <div className="flex gap-2 w-[1000px] justify-center">
      {images.slice(0, layoutLength).map((img, i) => (
        <div
          key={img.src}
          className="flex-shrink-0 rounded-md overflow-hidden justify-center"
          style={{ height: `${heights[i]}px`, width: `${widths[i]}px` }}
        >
          <img
            src={img.src+i}
            className="h-full w-full rounded-md object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}