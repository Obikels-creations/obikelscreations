import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-8">
            {`Founded in 2017, the brand has since grown into a
thriving business that celebrates the beauty and versatility of this timeless craft.`}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/accessories/bucket_hats/IMG_20240628_222138.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ladies/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240531234007_20240921202246.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ladies/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240804192104_20240921202217.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ladies/IMG_20240723_114049.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our journey",
      content: (
        <div className="font-medium">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg  mb-8">
            {`Our journey began with a small collection of handmade pieces, each one a labour of
love with our first slogan “Handmade with Love”. As we shared our creations with the
world, we received an overwhelming response, inspiring us to expand our offerings
and reach a wider audience.`}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg  mb-8">
           {`Over the years, we have honed our skills and perfected our techniques, continuously
striving to push the boundaries of crochet fashion. We have collaborated with
talented artisans, explored new materials, and embraced innovative techniques to
bring our vision to life.`}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/obikels_creations_1727511223092.jpeg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           <Image
              src="/obikels_creations_1727517694516.jpeg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our Achievements",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
            {`Our dedication to quality and creativity has been recognized with numerous
accolades.`}
          </p>
          <div className="mb-8 space-y-7 font-medium">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-base">
              {`✅ We have had the privilege of being honoured by the wife of the former
vice president of Nigeria, her Excellency Mrs. Dolapo Osinbajo and bestowed with
an honorary badge for exceptional creativity and craftmanship.`}
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-base">
              {`✅ Additionally, we have 
had the opportunity to collaborate with a few outstanding fashion houses such as Mudvii and
Tularoo.`} 
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-base">
              {`✅ We have also had the honour to be featured in the prestigious Vanguard
Allure for our exceptional creativity and designs.`} 
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-base">
              {`✅ These achievements are a testament to the hard work, passion, and talent of our
team. We are grateful for the support we have received from our customers and the
community.`}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/PSX_20190607_183751.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/IMG-20190619-WA0005.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/IMG-20190607-WA0033.jpg"
              alt="Obikels Creations Ltd"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our Vision for the Future",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
            {`As we look ahead, we are excited about the possibilities that lie ahead.`}
          </p>
          <div className="mb-8 space-y-6 font-medium">
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-lg">
              {`Our vision is
to continue to be a leader in the world of crochet fashion, inspiring others to embrace
this beautiful craft. We plan on expanding our product line, opening physical stores,
and collaborating with other fashion brands.`}
            </div>
            <div className="flex gap-2 items-center text-neutral-800 dark:text-neutral-300 text-base md:text-lg">
              {`Our commitment to sustainability and ethical practices will remain at the core of our
business. We strive to create products that are not only beautiful but also
responsible and environmentally friendly.`}
            </div>
           
          </div>
        </div>
      ),
    },
  ];
  return (
    
    <div className="w-full">
      <Timeline data={data} />
    </div>
    
  );
}
