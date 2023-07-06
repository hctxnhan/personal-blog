import { SectionHeader } from '@/components/composite/SectionHeader';
import { Container } from '@/components/primitive/Container';
import { GalleryCarousel } from './GalleryCarousel';
import { customFetch } from '@/lib/fetch';
import { Gallery as GalleryType } from '@/types/Single';

export async function Gallery() {
  const gallerySingle = await customFetch<GalleryType>('gallery?populate=*');
  const { data } = await gallerySingle.getData;

  if (!data) return null;

  return (
    <Container className="bg-sky-950">
      <SectionHeader
        inverted
        subtitle="See what news on my blog since last time you visited."
      >
        GALLERY
      </SectionHeader>
      <GalleryCarousel
        images={data.attributes.images.data.map((image) => ({
          url: image.attributes.url,
          caption: image.attributes.caption,
          width: image.attributes.width,
          height: image.attributes.height,
          id: image.id
        }))}
      />
    </Container>
  );
}
