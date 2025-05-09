export const Input = ({ ...props }: any) => (
  <input {...props} className={`border px-3 py-2 rounded-xl w-full ${props.className}`} />
);