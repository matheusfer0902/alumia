import MainPost from "@/components/mainPost";
import MoreChecks from "@/components/moreChecks/index"
import InstitucionalSec from "@/components/institucionalSec/index"
import FAQSection from "@/components/faq/index"

export default function Home() {
  return (
    <div>
      <MainPost/>
      <MoreChecks/>
      <InstitucionalSec/>
      <FAQSection/>
    </div>
  );
}