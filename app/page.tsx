import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroKinetic from '@/components/home/HeroKinetic'
import TrustStrip from '@/components/home/TrustStrip'
import EditorialIntro from '@/components/home/EditorialIntro'
import ServicesTrio from '@/components/home/ServicesTrio'
import ProcessScroller from '@/components/home/ProcessScroller'
import SelectedWork from '@/components/home/SelectedWork'
import PrincipleMarquee from '@/components/home/PrincipleMarquee'
import EditorialTestimonials from '@/components/home/EditorialTestimonials'
import JournalStrip from '@/components/home/JournalStrip'
import BigCTA from '@/components/home/BigCTA'
import { getLatestPosts } from '@/sanity/queries'

export const revalidate = 60

export default async function Home() {
  const posts = await getLatestPosts(3)

  return (
    <>
      <Navbar />
      <main className="flex-1 relative">
        <HeroKinetic />
        <TrustStrip />
        <EditorialIntro />
        <ServicesTrio />
        <ProcessScroller />
        <SelectedWork />
        <PrincipleMarquee />
        <EditorialTestimonials />
        <JournalStrip posts={posts} />
        <BigCTA />
      </main>
      <Footer />
    </>
  )
}
