import qs from 'qs';
import { customFetch } from '@/lib/fetch';
import { Post } from '@/types/Post';
import { PostGrid } from '@/components/composite/PostGrid/PostGrid';

interface PostByCategoryGridProps {
  label: string;
  page?: string;
  pageSize?: string;
}

export async function PostByCategoryGrid({
  label,
  page = '1',
  pageSize = '10'
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
  return <PostGrid posts={data} />;
}
