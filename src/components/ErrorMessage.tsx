interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => (
  <p className="text-center text-red-600">{error}</p>
);
