import type { Metadata } from "next";

import EnvelopeIcons from "@icons/envelope.svg";
import LocationIcons from "@icons/marker.svg";
import PhoneCallIcons from "@icons/phone-call.svg";

export const metadata: Metadata = {
  title: "Portfolio Wahyudi Umar",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Home() {
  return (
    <main className="mt-[5rem] lg:mt-[80px] pb-[6rem]">
      <section className="px-4 lg:px-32 h-[17rem] flex flex-col justify-center items-center bg-[url('/images/contact/jumbotron.jpg')] bg-cover bg-center">
        <h2 className="text-3xl lg:text-4xl text-center font-semibold text-neutral-50">
          BLOG
        </h2>
      </section>

      <section className="mt-10 w-full px-6 lg:px-0 lg:w-4/5 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.898268162202!2d119.52102737463292!3d-5.120092751834091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbbefb4ebdcd%3A0x6c458f7ad02032c6!2sWahyu%20Van%20Zitter%20Page!5e0!3m2!1sid!2sid!4v1708933531336!5m2!1sid!2sid"
          className="w-full h-72"
          loading="lazy"
        />
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20 mt-10">
          <ul className="flex flex-col gap-y-5">
            <li className="grid lg:grid-cols-2 gap-y-5 lg:gap-x-6">
              <div>
                <label
                  htmlFor="nama"
                  className="text-neutral-400 font-semibold block mb-4 after:content-['*'] after:ml-1 after:text-red-500 text-sm"
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="nama"
                  className="w-full py-3 px-4 rounded-md outline-none bg-neutral-700 border-transparent focus:border-neutral-500 border-2 text-neutral-400 text-sm duration-200"
                  placeholder="Masukkan nama anda..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-neutral-400 font-semibold block mb-4 after:content-['*'] after:ml-1 after:text-red-500 text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full py-3 px-4 rounded-md outline-none bg-neutral-700 border-transparent focus:border-neutral-500 border-2 text-neutral-400 text-sm duration-200"
                  placeholder="Masukkan email anda..."
                />
              </div>
            </li>
            <li>
              <label
                htmlFor="komentar"
                className="text-neutral-400 font-semibold block mb-4 after:content-['*'] after:ml-1 after:text-red-500 text-sm"
              >
                Komentar
              </label>
              <textarea
                rows={5}
                id="komentar"
                className="w-full py-3 px-4 rounded-md outline-none bg-neutral-700 border-transparent focus:border-neutral-500 border-2 text-neutral-400 text-sm leading-7 duration-200"
                placeholder="Masukkan komentar anda..."
              />
            </li>

            <li>
              <button className="bg-[#CF7500] hover:bg-[#F0A500] duration-200 px-4 py-3 rounded-md text-sm text-neutral-200">
                Kirim Komentar
              </button>
            </li>
          </ul>

          <ul className="w-full flex flex-col gap-y-8 mt-5">
            <li className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-yellow-600 w-16 h-16 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
                <EnvelopeIcons className="w-8 h-8 sm:w-5 sm:h-5 fill-neutral-900" />
              </div>
              <span className="text-neutral-400 text-sm">
                wahyucherryorlove@gmail.com
              </span>
            </li>
            <li className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-yellow-600 w-16 h-16 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
                <LocationIcons className="w-8 h-8 sm:w-5 sm:h-5 fill-neutral-900" />
              </div>
              <span className="text-neutral-400 text-sm text-center sm:text-start">
                Kompleks YPPKG. Blok K3 A No 39, Paccerakkang, Makassar,
                Sulawesi Selatan
              </span>
            </li>
            <li className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-yellow-600 w-16 h-16 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
                <PhoneCallIcons className="w-8 h-8 sm:w-5 sm:h-5 fill-neutral-900" />
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-neutral-400 text-sm">
                  +62 859 6151 8853 ( Telepon )
                </span>
                <span className="text-neutral-400 text-sm">
                  +62 821 9482 3066 ( WhatsApp )
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
