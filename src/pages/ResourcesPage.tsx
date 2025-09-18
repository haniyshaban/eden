import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20 text-center">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="mt-4">This is the new Resources page. Add your content here!</p>
      </main>
      <Footer />
    </div>
  );
};