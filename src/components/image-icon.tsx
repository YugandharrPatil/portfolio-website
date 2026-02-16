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
    <div className="cursor-pointer rounded-md p-1 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              className={twMerge(
                "h-8 w-8 max-[500px]:h-6 max-[500px]:w-6 sm:h-12 sm:w-12",
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
    </div>
  );
}
