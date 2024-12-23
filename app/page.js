import {
  Header,
  Hero,
  LogoScroll,
  HowItWorks,
  UseCases,
  WhyHappyRobot,
  Integration,
  Testimonials,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoScroll />
      <HowItWorks />
      <UseCases />
      <WhyHappyRobot />
      <Integration />
      <Testimonials />
      <Footer />
    </main>
  );
}
