import { Avatar } from '@/components/primitive/Avatar';

export function PostAvatar() {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="PL"
      />
      <div>
        <p className="font-medium text-sm text-sky-900">Do Phuong Linh</p>
        <p className="text-sm text-slate-500">linh.dophuong@gmail.com</p>
      </div>
    </div>
  );
}
