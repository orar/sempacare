import cn from "clsx"

export function Blockquote({ children, className }) {

  return (
    <div className={cn(className)}>
      <blockquote>
        {children}
      </blockquote>
    </div>
  )
}