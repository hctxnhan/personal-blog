import { Overlay } from '@/components/primitive/Overlay';
import { customFetch } from '@/lib/fetch';
import { cn, constructUrl } from '@/lib/util';
import { Gallery as GalleryType } from '@/types/Single';
import styles from './Gallery.module.css';

const mapImageToGridArea = (index: number) =>
  ({
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
  }[index + 1]);

export async function Gallery() {
  const gallerySingle = await customFetch<GalleryType>('gallery?populate=*');
  const { data } = await gallerySingle.getData;

  if (!data) return null;

  return (
    <div className={cn('grid', styles.galleryGrid)}>
      {data.attributes.images.data.map((image, index) => (
        <div
          style={{
            gridArea: mapImageToGridArea(index)
          }}
          key={image.id}
          className={cn('group relative bg-sky-950 overflow-hidden')}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={constructUrl(image.attributes.url, true)}
            alt={
              'This is the caption of the image in case you didnt relize that'
            }
          />
          <Overlay className="group-hover:opacity-100 opacity-40 z-10" />
          <div className="group-hover:block hidden absolute inset-0 w-full h-full gap-4 p-4 z-20">
            <p className="text-white text-2xl font-display uppercase">
              {
                'This is the caption of the image in case you didnt realize that'
              }
            </p>
            <p className="text-white text-sm font-display uppercase">
              {
                'This is the caption of the image in case you didnt realize that'
              }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
