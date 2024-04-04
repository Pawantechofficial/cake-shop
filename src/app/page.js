"use client";
import Accord from "../components/Accord";
import Carousels from "../components/Carousels";
import Category from "../components/Category";
import FooterSection from "../components/FooterSection";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import PriceRange from "../components/PriceRange";
import WhyChoose from "../components/WhyChoose";
import OurClient from "../components/OurClient";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-16 px-2">
      <Hero />
      <div className="text-center mb-4">
        <SectionHeader subHeader={"Today's"} mainHeader={"Offer"} />
      </div>
      <Carousels />
      <div className="text-center my-4">
        <SectionHeader subHeader={"Shop by"} mainHeader={"CATEGORY"} />
      </div>
      <Category />
      <div className="text-center my-4">
        <SectionHeader subHeader={"Why Choose"} mainHeader={"HJ-Cake's"} />
      </div>
      <WhyChoose />
      <FooterSection />
      <div className="text-center my-6">
        <SectionHeader subHeader={"Our Happy"} mainHeader={"Client's"} />
      </div>
      <OurClient />
      <div className="text-center my-6">
        <SectionHeader
          subHeader={""}
          mainHeader={"Frequently Asked Questions"}
        />
      </div>
      <Accord />
      <div className="text-center my-6">
        <SectionHeader subHeader={"Price Range of"} mainHeader={"Cake's"} />
      </div>
      <PriceRange />
      <ScrollAnimation />
    </main>
  );
}
