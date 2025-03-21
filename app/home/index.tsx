"use client"

import MainPost from "@/components/mainPost";
import MoreChecks from "@/components/moreChecks/index";
import InstitucionalSec from "@/components/institucionalSec/index";
import FAQSection from "@/components/faq/index";
import useHandle from "./useHandle";

export default function Home() {
  const {
    postsData,
  } = useHandle();

  return (
    <div>
      <MainPost data={postsData}/>
      <MoreChecks data={postsData} isChecks={false} />
      <InstitucionalSec />
      <FAQSection />
    </div>
  );
}
