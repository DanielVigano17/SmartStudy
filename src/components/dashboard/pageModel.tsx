import { cn } from "@/lib/utils"

export type PageModelGenericProps<T = unknown> = {
    children: React.ReactNode
    className?: string
} & T

export function PageModel({
    className,
    children,
  }: PageModelGenericProps){
  return (
    <section className={cn([
        'h-screen',
        className,
      ])}>
    {children}
    </section>
  )
}

export function PageModelHeader({
    className,
    children,
  }: PageModelGenericProps){
    return (
        <header
          className={cn([
            'px-6 h-12 flex items-center border-b border-border',
            className,
          ])}
        >
          {children}
        </header>
    )
}

export function PageModelHeaderTitle({
    className,
    children,
  }: PageModelGenericProps){
    return (
        <h1
        className={cn([
          'text-muted-foreground uppercase',
          className,
        ])}
      >
        {children}
      </h1>
    )
}

export function PageModelHeaderNav({
    className,
    children,
  }: PageModelGenericProps){
    return (
        <nav
        className={cn([
          '',
          className,
        ])}
      >
        {children}
      </nav>
    )
}

export function PageModelMain({
    className,
    children,
  }: PageModelGenericProps){
    return (
       <main
          className={cn([
            'p-6',
            className,
          ])}
        >
          {children}
        </main>
    )
}



  


