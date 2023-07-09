import { Pagination } from '@/components/composite/Pagination/Pagination';
import { PostGrid } from '@/components/composite/PostGrid/PostGrid';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { Container } from '@/components/primitive/Container';
import { customFetch } from '@/lib/fetch';
import { Post } from '@/types/Post';
import qs from 'qs';
import { Filter } from './components/Filter';
import { Category } from '@/types/Category';

export default async function BlogPage({
  searchParams
}: {
  searchParams: {
    page: string;
    pageSize: string;
    filter: string;
  };
}) {
  const { page = 1, pageSize = 10, filter = '' } = searchParams;
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
          $startsWithi: filter
        }
      }
    },
    pagination: {
      page,
      pageSize
    }
  });

  const postsCollection = await customFetch<Post[]>(`posts?${urlParams}`);
  const { data, meta } = await postsCollection.getData;

  const labelsCollection = await customFetch<Category[]>(`labels`);
  const { data: labels } = await labelsCollection.getData;

  return (
    <main>
      <Container includeNavbar>
        <div className="flex items-center w-full justify-between">
          <SectionHeader
            subtitle="See what news on my blog since last time you visited."
            title="All Posts"
          />
          <Filter
            options={labels.map((label) => ({
              value: label.attributes.name,
              label: label.attributes.name
            }))}
          />
        </div>
        <div className="flex flex-col gap-14">
          <PostGrid posts={data} />
          <Pagination
            pages={meta.pagination.pageCount}
            currentPage={Number(page)}
            nextPageUrl={`/blog?page=${Number(page) + 1}&pageSize=${pageSize}`}
            prevPageUrl={`/blog?page=${Number(page) - 1}&pageSize=${pageSize}`}
          />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
