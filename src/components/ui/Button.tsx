import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Appends a trailing arrow that slides on hover. */
  arrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: never;
  };

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const sizes: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = 'primary', size = 'md', className, arrow = false } = props;
  const classes = cn('btn group', variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow ? (
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
          />
        ) : null}
      </span>
    </>
  );

  if ('href' in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, arrow: _a, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
