import Image from "next/image"

export default function ProductsLanding () {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Fiery Selection</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product items */}
          <div>
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Pasilla Chili"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 text-sm text-gray-500">Rich, earthy flavor with mild heat. Perfect for sauces and mole.</p>
          </div>
          {/* Additional product items */}
        </div>
      </div>
    </section>
  )
}