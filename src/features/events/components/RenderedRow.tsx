import type { ImageMetadata } from "astro";

interface RenderRowProps {
  images: ImageMetadata[];
  layout: 'HH' | 'VVH' | 'VVV' | 'VHV' | 'HVV';
}

export default function RenderImageRow({images, layout}: RenderRowProps) {
  const total_width = 1200;
  // const margin_width = String(Math.round(total_width / 40))+'px';
  const margin_width = '0px';
  const layoutLength = layout.length;
  console.log('Layout:', layout, 'Length:', layoutLength);
  if (images.length < layoutLength) {
    console.warn("Not enough images for layout");
    return null;
  }
  console.log('Rendering image row with layout:', layout);

  var widths: number[] = [];
  var heights: number[] = [];
  var marginsLeft: string[] = [];
  var marginsRight: string[] = [];
  // Calculate width and height based on layout
  const factor = 9 / 8.5;
  if (layout === 'HH') {
    widths = [total_width / 9 * 4.5 + 3, total_width / 9 * 4.5 + 3];  // +3 so that 2 images are the same width as 3 images
    heights = [total_width / 9 * 3 + 2, total_width / 9 * 3 + 2];
    marginsLeft = ['', ''];
    marginsRight = ['', ''];
  }
  else if (layout === 'VVH') {
    widths = [total_width / 9 * 2, total_width / 9 * 2, total_width / 9 * 4.5].map(w => w * factor);
    heights = [total_width / 9 * 3, total_width / 9 * 3, total_width / 9 * 3].map(h => h * factor);
    marginsLeft = ['', '', ''];
    marginsRight = ['', '', ''];
  }
  else if (layout === 'VVV') {
    widths = [total_width / 9 * 3, total_width / 9 * 3, total_width / 9 * 3]
    heights = [total_width / 9 * 4.5, total_width / 9 * 4.5, total_width / 9 * 4.5];
    marginsLeft = ['', '', ''];
    marginsRight = ['', '', ''];
  }
  else if (layout === 'VHV') {
    widths = [total_width / 9 * 2, total_width / 9 * 4.5, total_width / 9 * 2].map(w => w * factor);
    heights = [total_width / 9 * 3, total_width / 9 * 3, total_width / 9 * 3].map(h => h * factor);
    marginsLeft = ['', '', ''];
    marginsRight = ['', '', ''];
  }
  else if (layout === 'HVV') {
    widths = [total_width / 9 * 4.5, total_width / 9 * 2, total_width / 9 * 2].map(w => w * factor);
    heights = [total_width / 9 * 3, total_width / 9 * 3, total_width / 9 * 3].map(h => h * factor);
    marginsLeft = ['', '', ''];
    marginsRight = ['', '', ''];
  }
  
  return (
    <div className="flex mb-1.5 gap-1.5 w-full justify-center items-center">
      {images.slice(0, layoutLength).map((img, i) => {
        return (
        <div key={img.src+i} className={`rounded-md`} style={{ height: `${heights[i]}px`, width: `${widths[i]}px`, marginLeft: marginsLeft[i], marginRight: marginsRight[i] }}>
          <img src={img.src} className="rounded-md" loading="lazy" />
        </div>
      )})}
    </div>
  );
}