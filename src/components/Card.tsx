interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};