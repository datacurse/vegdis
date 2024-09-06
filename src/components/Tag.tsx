import type React from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const Tag: React.FC<TagProps> = ({ children, className, href }) => {
  const TagComponent = href ? 'a' : 'div';

  return (
    <TagComponent
      href={href}
      className={cn(
        "cursor-pointer transition ease-in duration-100 flex flex-row items-center space-x-1 px-2 py-1 text-xs rounded-md text-high",
        className
      )}
    >
      {children}
    </TagComponent>
  );
};

export default Tag;