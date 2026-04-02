import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackgroundMusic />
      <HeroSection />
      <PhotoGallery />
      <FooterSection />
    </div>
  );
};

export default Index;
