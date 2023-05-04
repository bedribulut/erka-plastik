import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Abdioglu",
    href: "https://www.abdiogullari.com/",
    image: "/images/brands/abdioglu.png",
  },
  {
    id: 2,
    name: "Ekonet1",
    href: "http://www.ekonetbranda.com.tr/",
    image: "/images/brands/ekonet1.png",
  },
  /* {
    id: 3,
    name: "Ekonet2",
    href: "http://www.ekonetbranda.com.tr/",
    image: "/images/brands/ekonet2.png",
  }, */
  {
    id: 4,
    name: "Ekonet3",
    href: "http://www.ekonetbranda.com.tr/",
    image: "/images/brands/ekonet3.png",
  },
  {
    id: 5,
    name: "Ekonet4",
    href: "http://www.ekonetbranda.com.tr/",
    image: "/images/brands/ekonet4.png",
  },
  {
    id: 6,
    name: "Kimpack",
    href: "https://kimpack.com.tr/",
    image: "/images/brands/kimpack.jpg",
  },
  {
    id: 7,
    name: "Nakpilsa",
    href: "/",
    image: "/images/brands/nakpilsa.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-primary py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-2 md:py-[px] md:px-[10px] xl:p-[10px] 2xl:py-[120px] 2xl:px-[10px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[80px] sm:mx-4 lg:max-w-[230px] xl:mx-6 xl:max-w-[250px] 2xl:mx-8 2xl:max-w-[260px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} sizes="(max-width: 300px)" width={150} height={100} />
      </a>
    </div>
  );
};
