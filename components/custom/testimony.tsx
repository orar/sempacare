import Image from "next/image";
import {TestimonialType} from "@/types";
import cn from "clsx";


export function TestimonialCard ({ testimony, className, style, maxContent }: {
  testimony: TestimonialType,
  className?: string,
  maxContent?: number
  style?: any
}) {

  const cls = cn('break-inside-avoid', className);
  const _style = !!style && typeof style === "object" ? style : {};
  let _review = !!Number(maxContent) ? testimony.review.slice(0, maxContent) : testimony.review;

  if (testimony.review.length > _review.length) {
      _review += "..."
  }

  return (
    <div className={cls} >
      <div className="relative rounded-xl border bg-muted/25" style={_style}>
        <div className="flex flex-col px-4 py-5 sm:p-6">
          <div>
            <div className="relative mb-4 flex items-center gap-3">
                      <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full text-base">
                        <Image
                          width={100}
                          height={100}
                          className="size-full rounded-full border"
                          src={testimony.image}
                          alt={testimony.name}
                        />
                      </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimony.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimony.job}
                </p>
              </div>
            </div>
            <q className="text-muted-foreground">{_review}</q>
          </div>
        </div>
      </div>
    </div>
  )
}