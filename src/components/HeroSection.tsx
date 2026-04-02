import { motion } from "framer-motion";
import floralWreath from "@/assets/floral-wreath.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-3 rounded-full bg-rose-medium opacity-40"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-32 right-20 w-2 h-2 rounded-full bg-gold-accent opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-rose-soft opacity-50"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-sage opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      />

      {/* Wreath with text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center"
      >
        <img
          src={floralWreath}
          alt="Guirlanda floral"
          className="absolute inset-0 w-full h-full object-contain"
          width={800}
          height={800}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center z-10 px-8"
        >
          <span className="text-gold-accent font-body text-sm tracking-[0.3em] uppercase">Celebrando</span>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground mt-1 leading-tight">
            Heloísa
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-primary italic mt-1">
            faz 1 aninho!
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center mt-8 max-w-lg"
      >
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Um ano de sorrisos, descobertas e muito amor. <br />
          Cada momento foi um presente. 🌸
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
