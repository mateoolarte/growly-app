// components
import Layout from "../components/shared/Layout";
import Hero from "../components/Hero";
import HowDoesWorkSection from "../components/HowDoesWorkSection";

export default function Home() {
  return (
    <Layout title="Inicio - Growly">
      <Hero />

      <HowDoesWorkSection />
    </Layout>
  );
}
