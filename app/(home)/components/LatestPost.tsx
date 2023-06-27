import { PostCard } from '@/components/composite/PostCard';

export function LatestPost() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-8">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <PostCard
            key={i}
            direction="column"
            estimatedReadTime="1 min"
            tag="Lifestyle"
            title="Invest more time in planning your projects in order to deliver on time"
            preview='A positioned element is an element whose computed position value is either relative , absolute , fixed , or sticky'
            imgAlt="A picture of a dog"
            imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        ))}
    </div>
  );
}
