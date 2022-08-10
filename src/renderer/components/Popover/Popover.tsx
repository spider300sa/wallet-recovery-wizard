import clsx from 'clsx';
import * as React from 'react';

export type PopoverProps = {
  children: React.ReactNode;
  Target: React.ReactElement;
  Width?: 'hug' | 'fill';
};

export const Popover = React.forwardRef<
  HTMLDetailsElement,
  PopoverProps & JSX.IntrinsicElements['details']
>(function Popover(
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className: _,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    style: __,
    children,
    Target,
    Width,
    ...hostProps
  },
  ref
) {
  return (
    <details
      ref={ref}
      className={clsx({
        'tw-inline-flex': Width === 'hug',
        'tw-flex tw-w-full': Width === 'fill',
      })}
      {...hostProps}
    >
      <summary className="marker:tw-hidden marker:tw-content-none">
        {Target}
      </summary>
      <div className="[&_>_*]:tw-shadow-1dp">{children}</div>
    </details>
  );
});
