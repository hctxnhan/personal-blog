import { PostCard, PostCardProps } from "../PostCard";

interface PostGridProps {
    posts: PostCardProps[];
}

export function PostGrid({ posts }: PostGridProps) {
    return (
        <div className="grid grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <PostCard key={index} {...post} />
            ))}
        </div>
    );
}