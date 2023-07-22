import { PostGrid } from '@/components/composite/PostGrid/PostGrid';
import { Overlay } from '@/components/primitive/Overlay';
import { customFetch } from '@/lib/fetch';
import { ImageProps } from '@/types/ImageProps';
import { Post } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'qs';

interface PostCategoryBannerProps extends ImageProps {
  title: string;
  label?: string;
}

export async function PostCategoryBanner({
  alt,
  src,
  title,
  height,
  width,
  label
}: PostCategoryBannerProps) {
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
      page: 1,
      pageSize: 3
    }
  });

  const postsCollection = await customFetch<Post[]>(`posts?${urlParams}`);
  const { data } = await postsCollection.getData;

  return (
    data.length > 0 && (
      <div className="flex flex-col gap-8">
        <div className="w-full relative flex flex-col gap-1">
          <div className="h-[100px] w-full overflow-hidden center relative">
            <Overlay />
            <p className="text-white text-4xl font-display uppercase">
              {title}
            </p>
            <Image
              className="absolute inset-0 w-full h-full object-cover object-center -z-20"
              src={src}
              alt={alt}
              width={height}
              height={width}
            />
          </div>
          <Link
            href={`/blog?filter=${label}`}
            className="transition w-fit self-end text-sky-950/60 hover:text-sky-950 font-serif cursor-pointer text-right font-semibold"
          >
            show all
          </Link>
        </div>
        <PostGrid posts={data} />
      </div>
    )
  );
}
