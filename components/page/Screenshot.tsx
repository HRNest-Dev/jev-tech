import Image from "next/image";
import { staffdemScreens, type StaffdemScreen } from "@/content/staffdem";
import { BrowserFrame } from "@/components/visuals/Frames";

type ScreenshotProps = {
  screen: StaffdemScreen;
  url?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/** A real product screenshot in browser chrome. */
export default function Screenshot({
  screen,
  url = "yourcompany.staffdem.com",
  sizes = "(min-width: 1280px) 1100px, 100vw",
  priority,
  className,
}: ScreenshotProps) {
  const s = staffdemScreens[screen];
  return (
    <BrowserFrame url={url} className={className}>
      <Image src={s.src} alt={s.alt} sizes={sizes} priority={priority} placeholder="blur" className="block h-auto w-full" />
    </BrowserFrame>
  );
}
