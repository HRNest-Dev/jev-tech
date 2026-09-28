import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "StaffDem — HR, payroll and people operations in one platform";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: "Products by JEV · StaffDem", title: "HR, payroll and people operations in one platform." });
}
