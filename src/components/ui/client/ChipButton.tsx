import type React from 'preact/compat';
import type { FC } from 'preact/compat';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}
const ChipButton: FC<Props> = ({ children, isActive, ...buttonProps }) => {
  return (
    <button
      style={{
        backgroundColor: isActive ? '#F0F0F0' : 'transparent',
      }}
      class={
        ' px-4 py-1 rounded-3xl text-sm duration-300 hover:bg-app-bg-secondary '
      }
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ChipButton;
