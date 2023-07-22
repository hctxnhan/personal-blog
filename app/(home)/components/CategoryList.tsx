import { BackgroundImage } from '@/components/primitive/BackgroundImage';
import { Overlay } from '@/components/primitive/Overlay';

export async function CategoryList() {
  return (
    <div className="group flex flex-col items-center gap-2 p-16 relative overflow-hidden">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80 886w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80 1186w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80 1486w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80 1772w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1786&q=80 1786w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80 2086w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80 2372w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2386&q=80 2386w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2686&q=80 2686w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80 2972w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2986&q=80 2986w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3286&q=80 3286w, https://images.unsplash.com/photo-1563212107-1f2957a74e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3496&q=80 3496w"
        alt=""
        className="blur-sm group-hover:blur-lg duration-200"
        height={1170}
        width={1786}
      />
      <Overlay />
      <div>
        <span
          className='text-white text-lg'
        >
          This is the quote that I really like and I want to share it with you.
        </span>
      </div>
    </div>
  );
}
