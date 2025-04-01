import { motion } from 'framer-motion';

export const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
      />
    </div>
  );
};