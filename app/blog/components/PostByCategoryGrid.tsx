import { PostGrid } from '@/components/composite/PostGrid/PostGrid';
import { Overlay } from '@/components/primitive/Overlay';
import { customFetch } from '@/lib/fetch';
import { ImageProps } from '@/types/ImageProps';
import { Post } from '@/types/Post';
import Image from 'next/image';
import qs from 'qs';

interface PostByCategoryGridProps extends ImageProps {
  label: string;
  page?: string;
  pageSize?: string;
}

export async function PostByCategoryGrid({
  label,
  page = '1',
  pageSize = '10',
  alt,
  src,
  height,
  width
}: PostByCategoryGridProps) {
  const urlParams = qs.stringify({
    fields: ['title', 'slug'],
    populate: {
      label: {
        fields: ['name']
      },
      thumbnail: '*'
    },
    filters: {
      label: {
        name: {
          $startsWithi: label
        }
      }
    },
    pagination: {
      page,
      pageSize
    }
  });

  const postsCollection = await customFetch<Post[]>(`posts?${urlParams}`);
  const { data } = await postsCollection.getData;
  return (
    <div className="flex flex-col gap-6">
      <div className="h-[100px] w-full overflow-hidden center relative">
        <Overlay />
        <p className="text-white text-4xl font-display uppercase">
          {label || 'All posts'}
        </p>
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center -z-20"
          src={src}
          alt={alt}
          width={height}
          height={width}
        />
      </div>
      {data.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-display font-medium">No posts found</p>
          <p className="font-sans text-gray-400">Try another filter</p>
        </div>
      )}
      <PostGrid posts={data} />
    </div>
  );
}
