import { Flame, Globe, Calendar } from "lucide-react"

export default function ServicesLanding() {
  return (
    <section className="w-full bg-red-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Spicy Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
            <Flame className="size-12 text-red-500" />
            <h3 className="text-xl font-bold">Customized Orders</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Tailor your order with specific quantities and varieties to meet your unique needs.
            </p>
          </div>
          {/* Additional service items */}
        </div>
      </div>
    </section>
  )
}