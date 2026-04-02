import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PhotoGallery />
      <FooterSection />
    </div>
  );
};

export default Index;
