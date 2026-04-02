import { motion } from "framer-motion";
import { useState } from "react";
import heartFlowers from "@/assets/heart-flowers.png";

const monthLabels = [
  "Chegou ao mundo 💕",
  "1 mês",
  "2 meses",
  "3 meses",
  "4 meses",
  "5 meses",
  "6 meses",
  "7 meses",
  "8 meses",
  "9 meses",
  "10 meses",
  "11 meses",
  "Momento especial ✨",
  "Momento especial ✨",
  "Momento especial ✨",
  "Momento especial ✨",
  "Momento especial ✨",
  "Momento especial ✨",
  "1 aninho! 🎂",
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <img
          src={heartFlowers}
          alt="Coração de flores"
          className="w-16 h-16 mx-auto mb-4"
          loading="lazy"
          width={512}
          height={512}
        />
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">
          Minha <span className="italic text-primary">trajetória</span>
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
          Cada foto guarda um pedacinho dessa história linda
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 19 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative cursor-pointer ${
              i === 0 || i === 18 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => setSelectedPhoto(i)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-rose-soft aspect-square shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Placeholder with number - replace with real photos */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="font-display text-4xl sm:text-5xl text-primary opacity-30">
                  {i + 1}
                </span>
                <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 text-center">
                  {monthLabels[i]}
                </span>
                <span className="font-body text-[10px] text-primary opacity-50 mt-1">
                  Toque para adicionar foto
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>

            {/* Label below */}
            <p className="font-body text-xs text-muted-foreground mt-2 text-center truncate">
              {monthLabels[i]}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-card rounded-3xl p-6 max-w-lg w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square rounded-2xl bg-rose-soft flex items-center justify-center mb-4">
              <div className="text-center">
                <span className="font-display text-6xl text-primary opacity-30">
                  {selectedPhoto + 1}
                </span>
                <p className="font-body text-muted-foreground mt-2">
                  Adicione a foto aqui
                </p>
              </div>
            </div>
            <h3 className="font-display text-xl text-foreground">{monthLabels[selectedPhoto]}</h3>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="mt-4 font-body text-sm text-primary hover:text-rose-medium transition-colors"
            >
              Fechar ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PhotoGallery;
