import Statistics from "./Statistics";
import pilot from "../public/img/pilot.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-black px-6 py-20 sm:py-32 lg:px-8 shadow-xl">
      <div className="" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-black shadow-xl shadow-indigo-600/10  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl  lg:max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            who
          </span>
          ami
        </h2>
        <figure className="mt-1">
          <figcaption className="mt-2">
            <img
              className="mx-auto h-40 w-40 rounded-full"
              src="https://res.cloudinary.com/the-anant/image/upload/v1714676169/the_anant.jpg"
              alt=""
            />
            <div className="mt-1 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Anant Kumar</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">student of IIT Madras</div>
            </div>
            
          </figcaption>
          <blockquote className="text-center text-xl font-semibold leading-8 dark:text-slate-500 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <Statistics/>
          
        </figure>
      </div>
    </section>
  );
}
