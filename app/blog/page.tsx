import { SectionHeader } from '@/components/composite/SectionHeader';
import { Container } from '@/components/primitive/Container';
import { PostCategoryBanner } from './components/PostCategoryBanner';
import { customFetch } from '@/lib/fetch';
import { Category } from '@/types/Category';
import { PostByCategoryGrid } from './components/PostByCategoryGrid';
import Link from 'next/link';

export default async function BlogPage({
  searchParams
}: {
  searchParams: {
    page: string;
    pageSize: string;
    filter: string;
  };
}) {
  const { page, pageSize, filter } = searchParams;

  const labelsCollection = await customFetch<Category[]>(`labels`);
  const { data: labels } = await labelsCollection.getData;

  return (
    <main>
      <Container className="pt-6">
        <div className="flex items-center w-full justify-between">
          <SectionHeader
            subtitle="See what news on my blog since last time you visited."
            title={`All Posts ${filter ? ` IN ${filter}` : ''}`}
          />
        </div>
        <div className="flex flex-col gap-16">
          {filter && (
            <PostByCategoryGrid
              label={filter}
              page={page}
              pageSize={pageSize}
            />
          )}

          {!filter &&
            labels.map((label) => (
              <PostCategoryBanner
                key={label.id}
                title={label.attributes.name}
                label={label.attributes.name}
                alt={label.attributes.name}
                src={
                  'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                }
                width={1470}
                height={980}
              />
            ))}
        </div>
      </Container>
    </main>
  );
}
