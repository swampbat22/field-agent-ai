export function Button({ children, className = '', variant = 'primary', ...props }) {
  const base = variant === 'secondary'
    ? 'border border-white text-white hover:bg-white hover:text-black'
    : 'bg-black text-white hover:bg-gray-800';

  return (
    <button className={`px-4 py-2 rounded transition ${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
