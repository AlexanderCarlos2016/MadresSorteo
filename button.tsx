export const Button = ({ children, ...props }: any) => (
  <button {...props} className={`px-4 py-2 rounded-xl font-medium ${props.className}`}>
    {children}
  </button>
);