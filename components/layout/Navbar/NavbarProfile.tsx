import { Avatar } from '@/components/primitive/Avatar';
import { Icon } from '@/components/primitive/Icon';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function NavbarProfile() {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="PL"
      />
      <div>
        <p className='font-medium text-sky-900'>Do Phuong Linh</p>
        <p className='text-sm text-slate-500'>linh.dophuong@gmail.com</p>
      </div>
      <div>
        <Icon icon={<ChevronDownIcon className="h-5 w-5" />} />
      </div>
    </div>
  );
}
