import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <div
      className={twMerge(
        'font-sans',
        'grid',
        'grid-rows-[20px_1fr_20px]',
        'items-center',
        'justify-items-center',
        'min-h-screen',
        'p-8',
        'pb-20',
        'gap-16',
        'sm:p-20',
      )}
    >
      <h1
        className={twMerge(
          'text-6xl',
          'font-bold',
          'text-center',
          'text-gray-100',
          'hover:text-blue-200',
        )}
      >
        Lairum
      </h1>
    </div>
  );
}
