import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg border focus:outline-none md:w-60 md:mt-100"
      onClick={handleClick}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white" />
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-5 text-sm font-medium text-black border-[1px] border-slate-900 dark:text-black dark:border-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
