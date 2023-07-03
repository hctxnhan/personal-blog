import { Button } from '@/components/primitive/Button';
import { Input } from '@/components/primitive/Input';

export function ContactForm() {
  return (
    <form className="flex flex-col gap-6 w-full">
      <div className='flex flex-col gap-10'>
        <Input placeholder="Email" dark />
        <Input placeholder="Name" dark />
        <Input placeholder="Message" dark />
        <Input placeholder="Address" dark />
      </div>
      <div className="flex justify-end">
        <Button shape={'circle'} size={'medium'}>
          Send
        </Button>
      </div>
    </form>
  );
}
