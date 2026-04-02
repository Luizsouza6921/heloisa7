import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackgroundMusic />
      <Header />
      <div id="hero"><HeroSection /></div>
      <div id="galeria"><PhotoGallery /></div>
      <div id="mensagem"><FooterSection /></div>
    </div>
  );
};

export default Index;
