import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type ImageIconProps = {
  imageSrc: StaticImageData;
  tooltip: string;
  customSize?: {
    height: number;
    width: number;
  };
};

export default function ImageIcon({
  imageSrc,
  tooltip,
  customSize,
}: ImageIconProps) {
  return (
    // <div className="">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            className={twMerge(
              "h-8 w-8 sm:h-12 sm:w-12",
              `h-${customSize && customSize.height} w-${customSize && customSize.width}`,
            )}
            src={imageSrc}
            alt={tooltip}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    // </div>
  );
}
