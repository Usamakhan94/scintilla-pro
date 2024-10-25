import { motion } from "framer-motion";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image src="/top-logo.svg" alt="Logo" width={150} height={150} />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
