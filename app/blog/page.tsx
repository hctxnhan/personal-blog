import { SectionHeader } from '@/components/composite/SectionHeader';
import { Container } from '@/components/primitive/Container';
import { customFetch } from '@/lib/fetch';
import { Category } from '@/types/Category';
import { Filter } from './components/Filter';
import { PostByCategoryGrid } from './components/PostByCategoryGrid';

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
        <div className="flex items-center w-full justify-between mb-6">
          <SectionHeader className="mb-0" title={`Blog`} />
          <Filter
            options={labels.map((label) => ({
              label: label.attributes.name,
              value: label.attributes.name
            }))}
          />
        </div>
        <div className="flex flex-col gap-16">
          <PostByCategoryGrid
            src="https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hero image"
            height={1470}
            width={980}
            label={filter}
            page={page}
            pageSize={pageSize}
          />
        </div>
      </Container>
    </main>
  );
}
