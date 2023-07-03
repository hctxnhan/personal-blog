'use client';
import { Modal } from '@/components/composite/Modal';
import { Button } from '@/components/primitive/Button';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant={'outline'}
        tone={'dark'}
        shape={'circle'}
        size={'small'}
        className="text-sm"
      >
        Contact
      </Button>
      <Modal.Root isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Header
          title="Contact"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore mollitia obcaecati blanditiis quae."
        />
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal.Root>
    </>
  );
}
