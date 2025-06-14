"use client"

import NewsCarousel from "@/components/newsCarousel";
import MainPost from "@/components/mainPost";
import MoreChecks from "@/components/moreChecks/index";
import InstitucionalSec from "@/components/institucionalSec/index";
import FAQSection from "@/components/faq/index";
import useHandle from "./useHandle";

const carouselPostCount = 5;

export default function Home() {
  const {
    postsData,
  } = useHandle();

  return (
    <div>
      <NewsCarousel data={postsData.slice(0, carouselPostCount)}/>
      {/*<MainPost data={postsData}/>*/}
      <MoreChecks data={postsData.slice(carouselPostCount)} isChecks={false} />
      <InstitucionalSec />
      <FAQSection />
    </div>
  );
}
