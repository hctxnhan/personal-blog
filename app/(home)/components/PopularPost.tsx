import { PostCard } from '@/components/composite/PostCard';

export function PopularPost() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <PostCard
        direction="column"
        estimatedReadTime="1 min"
        size="big"
        tag="Lifestyle"
        title="Accusantium suscipit voluptas ad animi est."
        imgAlt="A picture of a dog"
        imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      />
      <div className="flex flex-col gap-4">
        <PostCard
          estimatedReadTime="1 min"
          tag="Lifestyle"
          title="Accusantium suscipit voluptas ad animi est."
          imgAlt="A picture of a dog"
          imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <PostCard
          estimatedReadTime="1 min"
          tag="Lifestyle"
          title="Accusantium suscipit voluptas ad animi est."
          imgAlt="A picture of a dog"
          imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
        <PostCard
          estimatedReadTime="1 min"
          tag="Lifestyle"
          title="Accusantium suscipit voluptas ad animi est."
          imgAlt="A picture of a dog"
          imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  );
}
