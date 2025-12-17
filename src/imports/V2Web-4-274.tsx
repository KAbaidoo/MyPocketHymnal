import svgPaths from "./svg-goshzmvjsh";
import imgImage2 from "figma:asset/25698dc498d2a78b06424a77d6abc51a77ede870.png";
import imgImage3 from "figma:asset/4946df0d84a42d5d94e5ad0c0c97237f294fcca0.png";
import imgMainContent from "figma:asset/ff7abc3b099be04e13f851a5c02fff459914518d.png";
import imgImage5 from "figma:asset/98d7829512251a3efd250d2ced6abe6a73b6c91d.png";

function Group() {
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

function Anglican() {
  return (
    <div className="bg-[#271e3e] overflow-clip relative rounded-[16.25px] shrink-0 size-[64px]" data-name="Anglican">
      <Group />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Anglican />
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#271e3e] text-[32px] text-nowrap tracking-[0.32px]">Anglica Hymnal</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-black content-stretch flex gap-[4px] h-[60px] items-center overflow-clip pl-0 pr-[14px] py-0 relative rounded-[16px] shrink-0 w-[176px]">
      <div className="relative shrink-0 size-[56px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="font-['Public_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="mb-0 text-[14px]">Download on</p>
        <p className="text-[16px]">App Store</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-black content-stretch flex gap-[4px] h-[60px] items-center overflow-clip pl-0 pr-[14px] py-0 relative rounded-[16px] shrink-0">
      <div className="relative shrink-0 size-[56px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[18.74%] max-w-none size-[67.2%] top-[16.4%]" src={imgImage3} />
        </div>
      </div>
      <div className="font-['Public_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="mb-0 text-[14px]">Get app on</p>
        <p className="text-[16px]">Google Play</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[32px] px-[40px] py-[24px] rounded-bl-[16px] rounded-br-[16px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] top-0 w-[1448px]" data-name="header">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[129.466px] relative shrink-0 w-[160px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 130">
        <g id="Group">
          <path d={svgPaths.p1a3a4300} fill="var(--fill-0, #F7EA2F)" id="Vector" />
          <path d={svgPaths.pa0b3840} fill="var(--fill-0, #27B373)" id="Vector_2" />
          <path d={svgPaths.p13684d80} fill="var(--fill-0, #27B373)" id="Vector_3" />
          <path d={svgPaths.p33ead080} fill="var(--fill-0, #271E3E)" id="Vector_4" />
          <path d={svgPaths.pd200b00} fill="var(--fill-0, #271E3E)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="font-['Pink_Sunset:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[64px] text-white tracking-[0.64px] w-full">
        <p className="mb-0">{`Anglican `}</p>
        <p>Hymnal</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Group1 />
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-white tracking-[0.28px] w-full">Worship anywhere, anytime</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[34px] relative shrink-0 text-[#f7ea2f] text-[24px] w-full">Carry your Anglican hymnal in your pocket: beautifully organized, searchable and ready for every moment of worship.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame9 />
    </div>
  );
}

function AppleFill() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="apple-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="apple-fill">
          <path d={svgPaths.p19ae6780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[210px]">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <AppleFill />
        <div className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[16px]">Available on the</p>
          <p className="text-[24px]">App Store</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GooglePlayFill() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="google-play-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="google-play-fill">
          <path d={svgPaths.p17a7a800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[12px] shrink-0">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[12px] relative rounded-[inherit]">
        <GooglePlayFill />
        <div className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[0px] text-nowrap text-white">
          <p className="mb-0 text-[16px]">Get app on</p>
          <p className="text-[24px]">Google Play</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-white tracking-[0.24px] w-full">Click to download</p>
      <Frame8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[444px]">
      <Frame11 />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.16px]">30-day free trial. No upfront payment. Cancel anytime.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[59px] items-start left-[80px] top-[166px] w-[526.004px]">
      <Frame10 />
      <Frame18 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[844px] left-[32px] overflow-clip rounded-[24px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] top-[151px] w-[1448px]" data-name="Main content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[24px] size-full" src={imgMainContent} />
        <div className="absolute bg-[rgba(45,10,34,0.85)] inset-0 rounded-[24px]" />
      </div>
      <div className="absolute h-[582.256px] left-[735.26px] top-[141.9px] w-[648.164px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <Frame12 />
    </div>
  );
}

function Group2() {
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

function Anglican1() {
  return (
    <div className="bg-[#271e3e] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Anglican">
      <Group2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Anglican1 />
      <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#271e3e] text-[14px] text-nowrap tracking-[0.14px]">Anglica Hymnal</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame17 />
      <div className="flex flex-col font-['Onest:Regular',sans-serif] font-normal h-[17.5px] justify-center leading-[0] relative shrink-0 text-[#525866] text-[12.3px] w-[44.375px]">
        <p className="leading-[17.5px]">© 2025</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Onest:Medium',sans-serif] font-medium gap-[28px] items-center leading-[0] relative shrink-0 text-[#525866] text-[12.3px] text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[17.5px] text-nowrap">Privacy Policy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[17.5px] text-nowrap">Terms of Service</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#525866] text-[14px] text-center text-nowrap">
        <p className="leading-[normal]">
          <span>{`Initiative by `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Curve Concepts</span>
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[32px] items-start left-[32px] overflow-clip px-[100px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] w-[1448px]" data-name="footer">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

export default function V2Web() {
  return (
    <div className="bg-[#fbf8f3] relative size-full" data-name="v2/web">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}