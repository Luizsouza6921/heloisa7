import { motion } from "framer-motion";
import heartFlowers from "@/assets/heart-flowers.png";

const FooterSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <img
          src={heartFlowers}
          alt=""
          className="w-20 h-20 mx-auto mb-6"
          loading="lazy"
          width={512}
          height={512}
        />
        <h2 className="font-display text-3xl sm:text-4xl text-foreground italic">
          Feliz 1 aninho!
        </h2>
        <p className="font-body text-muted-foreground mt-4 leading-relaxed">
          Que sua vida seja repleta de alegria, amor e muitas aventuras.
          Você é o maior presente que já recebemos. 💕
        </p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-primary opacity-30" />
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Com todo amor
          </span>
          <span className="w-8 h-px bg-primary opacity-30" />
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;
