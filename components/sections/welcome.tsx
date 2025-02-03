
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Welcome() {
  return (
    <section className="bg-gradient-to-br from-pink-100/20 via-pink-500/10 to-white py-14 text-muted-foreground dark:to-black">
      <MaxWidthWrapper className="py-16">
        <h1 className="mb-10 text-center text-4xl font-bold text-pink-600 dark:text-pink-300">
          Enriching families and lives through care
        </h1>

        <div className="mx-auto max-w-4xl space-y-10 text-center text-xl">
          <p>
            Whether you or your loved one are moving to a care home to be closer to your family, or to simply have a respite break so you aren’t alone, we are here for you every step of the way.
          </p>
          <p>
            Our home teams are here, giving you and your loved ones the peace of mind that everything is taken care of, while empowering our care home residents to continue to live their lives, their way.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
