import { Routes, Route, Link } from "react-router-dom";
import svgPaths from "../imports/svg-goshzmvjsh";
import appleIcon from '../assets/images/apple_icon.svg'
import googlePlayIcon from "../assets/images/googleplay_icon.svg";
import cathedralImg from "../assets/images/cathedral.png";
import heroImg from "../assets/images/hero_image.png";
import groupSvg from "../assets/images/Group.svg";
import { useOS } from "./components/ui/utils";
import PrivacyPolicy from "./PrivacyPolicy";

// Desktop Logo (64px)
export function HymnalLogo() {
  return (
    <div className="absolute inset-[26.37%_20.9%_26.38%_20.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 31">
        <g id="Group">
          <path d={svgPaths.p151ecf00} fill="var(--fill-0, #F7EA2F)" id="Vector" />
          <path d={svgPaths.p14c8e380} fill="var(--fill-0, #27B373)" id="Vector_2" />
          <path d={svgPaths.p1b118c00} fill="var(--fill-0, #27B373)" id="Vector_3" />
          <path d={svgPaths.p19b36280} fill="var(--fill-0, #271E3E)" id="Vector_4" />
          <path d={svgPaths.p1b2b8e00} fill="var(--fill-0, #271E3E)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

export function Anglican() {
  return (
    <div className="bg-[#271e3e] overflow-clip relative rounded-[8.125px] md:rounded-[16.25px] shrink-0 size-[32px] md:size-[64px]" data-name="Anglican">
      <HymnalLogo />
    </div>
  );
}

export function HymnalContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Anglican />
      <p className="font-playfair-semibold font-semibold leading-[normal] relative shrink-0 text-[#271e3e] text-[20px] md:text-[32px] text-nowrap tracking-[0.2px] md:tracking-[0.32px]">Anglican Hymnal</p>
    </div>
  );
}

// Mobile "Get the app" button
function GetAppButton() {
  const href = useOS();
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="cursor-pointer transition-transform hover:scale-105 block"
    >
      <div className="bg-black content-stretch flex h-[48px] items-center justify-center overflow-clip px-[16px] relative rounded-[16px] shrink-0">
        <p className="font-public-sans-semibold font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Get the app</p>
      </div>
    </a>
  );
}

// Desktop App Store buttons
function AppStoreButton() {
  return (
    <a 
      href="https://apps.apple.com/app/anglican-hymnal/id123456789" 
      target="_blank" 
      rel="noopener noreferrer"
      className="cursor-pointer transition-transform hover:scale-105"
    >
      <div className="bg-black content-stretch flex gap-[4px] h-[60px] items-center overflow-clip pl-0 pr-[14px] py-0 relative rounded-[16px] shrink-0 w-[176px]">
        <div className="relative shrink-0 size-[56px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={appleIcon} />
        </div>
        <div className="font-public-sans-semibold font-semibold leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[14px]">Download on</p>
          <p className="text-[16px]">App Store</p>
        </div>
      </div>
    </a>
  );
}

function PlayStoreButton() {
  return (
    <a 
      href="https://play.google.com/store/apps/details?id=com.anglican.hymnal" 
      target="_blank" 
      rel="noopener noreferrer"
      className="cursor-pointer transition-transform hover:scale-105"
    >
      <div className="bg-black content-stretch flex gap-[4px] h-[60px] items-center overflow-clip pl-0 pr-[14px] py-0 relative rounded-[16px] shrink-0">
        <div className="relative shrink-0 size-[56px]" data-name="image 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[18.74%] max-w-none size-[67.2%] top-[16.4%]" src={googlePlayIcon} />
          </div>
        </div>
        <div className="font-public-sans-semibold font-semibold leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[14px]">Get app on</p>
          <p className="text-[16px]">Google Play</p>
        </div>
      </div>
    </a>
  );
}

function StoreButtonContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <AppStoreButton />
      <PlayStoreButton />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] md:px-[40px] py-[24px] rounded-bl-[16px] rounded-br-[16px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] mx-[16px] md:mx-[32px]" data-name="header">
      <HymnalContainer />
      {/* Mobile button */}
      <div className="md:hidden">
        <GetAppButton />
      </div>
      {/* Desktop buttons */}
      <div className="hidden md:flex">
        <StoreButtonContainer />
      </div>
    </div>
  );
}

// Hero logo and title
function Group1Mobile() {
  return (
    <img src={groupSvg} alt="Group" className="h-[80.5px] w-[88px]" />
  );
}

function Group1Desktop() {
  return (
    <img src={groupSvg} alt="Group" className="h-[129.466px] relative shrink-0 w-[160px]" />
  );
}

function HeroTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="font-pink-sunset-regular leading-[normal] not-italic relative shrink-0 text-[32px] md:text-[64px] text-white tracking-[0.32px] md:tracking-[0.64px] w-full">
        <p className="mb-0">{`Anglican `}</p>
        <p>Hymnal</p>
      </div>
    </div>
  );
}

function HeroLogoAndTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="md:hidden">
        <Group1Mobile />
      </div>
      <div className="hidden md:block">
        <Group1Desktop />
      </div>
      <HeroTitle />
    </div>
  );
}

function HeroSubtitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-onest-medium font-medium leading-[normal] relative shrink-0 text-[18px] md:text-[28px] text-white tracking-[0.18px] md:tracking-[0.28px] w-full">Worship anywhere, anytime</p>
      <p className="font-onest-regular font-normal leading-[24px] md:leading-[34px] relative shrink-0 text-[#f7ea2f] text-[16px] md:text-[24px] w-full">Carry your Anglican hymnal in your pocket: beautifully organized, searchable and ready for every moment of worship.</p>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <HeroLogoAndTitle />
      <HeroSubtitle />
    </div>
  );
}

// Download buttons for hero section
function AppleFill() {
  return (
    <div className="relative shrink-0 size-[38.312px] md:size-[48px]" data-name="apple-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="apple-fill">
          <path d={svgPaths.p19ae6780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroAppleButton() {
  const href = useOS();
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative rounded-[9.578px] md:rounded-[12px] flex-1 md:flex-initial md:w-[210px] cursor-pointer transition-transform hover:scale-105"
    >
      <div className="content-stretch flex gap-[3.193px] md:gap-[4px] items-center overflow-clip p-[9.578px] md:p-[12px] relative rounded-[inherit] w-full">
        <AppleFill />
        <div className="font-public-sans-regular font-normal leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[12px] md:text-[16px]">Available on the</p>
          <p className="text-[18px] md:text-[24px]">App Store</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.596px] md:border-2 border-solid border-white inset-0 pointer-events-none rounded-[9.578px] md:rounded-[12px]" />
    </a>
  );
}

function GooglePlayFill() {
  return (
    <div className="relative shrink-0 size-[38.312px] md:size-[48px]" data-name="google-play-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="google-play-fill">
          <path d={svgPaths.p17a7a800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroGoogleButton() {
  const href = useOS();
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative rounded-[9.578px] md:rounded-[12px] flex-1 md:flex-initial cursor-pointer transition-transform hover:scale-105"
    >
      <div className="content-stretch flex gap-[3.193px] md:gap-[4px] items-center overflow-clip p-[9.578px] md:p-[12px] relative rounded-[inherit]">
        <GooglePlayFill />
        <div className="font-public-sans-regular font-normal leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[12px] md:text-[16px]">Get app on</p>
          <p className="text-[18px] md:text-[24px]">Google Play</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.596px] md:border-2 border-solid border-white inset-0 pointer-events-none rounded-[9.578px] md:rounded-[12px]" />
    </a>
  );
}

function HeroDownloadButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <HeroAppleButton />
      <HeroGoogleButton />
    </div>
  );
}

function HeroDownloadSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full md:w-[444px]">
      <p className="font-onest-medium font-medium leading-[normal] relative shrink-0 text-[16px] md:text-[24px] text-white tracking-[0.16px] md:tracking-[0.24px] w-full">
        <span className="md:hidden">Tap to download</span>
        <span className="hidden md:inline">Click to download</span>
      </p>
      <HeroDownloadButtons />
      <p className="font-onest-medium font-medium leading-[normal] relative shrink-0 text-[14px] md:text-[16px] text-white tracking-[0.14px] md:tracking-[0.16px]">
        <span className="md:hidden">30-day free trial. No upfront payment. Cancel anytime.</span>
        <span className="hidden md:inline text-nowrap">30-day free trial. No upfront payment. Cancel anytime.</span>
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[906px] md:h-[844px] overflow-clip rounded-[24px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] mt-[28px] md:mt-[23px] mx-[16px] md:mx-[32px] relative" data-name="Main content">
      {/* Background image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[24px] size-full" src={cathedralImg} />
        <div className="absolute bg-[rgba(45,10,34,0.85)] inset-0 rounded-[24px]" />
      </div>
      
      {/* Desktop: Phone mockup on the right */}
      <div className="hidden md:block absolute h-[582.256px] left-[735.26px] top-[141.9px] w-[648.164px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={heroImg} />
      </div>
      
      {/* Content wrapper */}
      <div className="relative h-full flex flex-col justify-center px-[16px] py-[80px] md:px-0 md:py-0">
        {/* Mobile: Vertical layout */}
        <div className="md:hidden content-stretch flex flex-col gap-[72px] items-start w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
            <HeroContent />
            <HeroDownloadSection />
          </div>
          <div className="h-[328.784px] relative shrink-0 w-full" data-name="image 5">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={heroImg} />
          </div>
        </div>
        
        {/* Desktop: Absolute positioned content on the left */}
        <div className="hidden md:block absolute left-[80px] top-[166px] w-[526.004px]">
          <div className="content-stretch flex flex-col gap-[59px] items-start">
            <HeroContent />
            <HeroDownloadSection />
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer components
export function MiniHymnalLogo() {
  return (
    <div className="absolute inset-[26.37%_20.9%_26.38%_20.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Group">
          <path d={svgPaths.p86c8d00} fill="var(--fill-0, #F7EA2F)" id="Vector" />
          <path d={svgPaths.p210b6970} fill="var(--fill-0, #27B373)" id="Vector_2" />
          <path d={svgPaths.p3b0a5600} fill="var(--fill-0, #27B373)" id="Vector_3" />
          <path d={svgPaths.p2e421871} fill="var(--fill-0, #271E3E)" id="Vector_4" />
          <path d={svgPaths.p201e5630} fill="var(--fill-0, #271E3E)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

export function Anglican1() {
  return (
    <div className="bg-[#271e3e] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Anglican">
      <MiniHymnalLogo />
    </div>
  );
}

export function FooterLogo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Anglican1 />
      <p className="font-playfair-semibold font-semibold leading-[normal] relative shrink-0 text-[#271e3e] text-[14px] text-nowrap tracking-[0.14px]">Anglica Hymnal</p>
    </div>
  );
}

export function FooterLogoAndCopyright() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center md:justify-start relative shrink-0 w-full md:w-auto">
      <FooterLogo />
      <div className="flex flex-col font-onest-regular font-normal h-[17.5px] justify-center leading-[0] relative shrink-0 text-[#525866] text-[12.3px] w-[44.375px]">
        <p className="leading-[17.5px]">© 2025</p>
      </div>
    </div>
  );
}

export function FooterLinks() {
  return (
    <div className="content-stretch flex font-onest-medium font-medium gap-[28px] items-center justify-center md:justify-start leading-[0] relative shrink-0 text-[#525866] text-[12.3px] text-nowrap w-full md:w-auto">
      <Link to="/privacy-policy" className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[17.5px] text-nowrap">Privacy Policy</p>
      </Link>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[17.5px] text-nowrap">Terms of Service</p>
      </div>
    </div>
  );
}

export function FooterTop() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-0 items-start md:items-center md:justify-between relative shrink-0 w-full">
      <FooterLogoAndCopyright />
      <FooterLinks />
    </div>
  );
}

export function FooterInitiative() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-onest-medium font-medium justify-center leading-[0] relative shrink-0 text-[#525866] text-[14px] text-center text-nowrap">
        <p className="leading-[normal]">
          <span>{`Initiative by `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Curve Concepts</span>
        </p>
      </div>
    </div>
  );
}

 export function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start overflow-clip px-[16px] md:px-[100px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] mx-[16px] md:mx-[32px] mt-[32px]" data-name="footer">
      <FooterTop />
      <FooterInitiative />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fbf8f3] min-h-screen" data-name="v2/web">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export { App };