import TeamGrid from "./TeamGrid";

export default function About() {
  return (
    <div className="relative container mt-20 md:mt-28 mb-10">
      <div className="flex flex-col">
        <h1 className="~text-2xl/5xl font-zentry font-bold pt-10">About </h1>
        <h2 className="~text-2xl/5xl font-primary font-semibold text-center pt-20">
          Neo Technology Developers
        </h2>
        <p className="text-center ~text-base/2xl pt-10">
          “Its not a faith in technology. Its faith in people.” - Steve Jobs
        </p>
        <p className="text-center ~text-base/2xl pt-1">
          Faith placed in Neo Technology Developers is faith not misplaced.
        </p>
        <button
          data-hover
          className="text-center ~text-base/lg block w-fit mx-auto bg-text text-white rounded-full py-3 px-6 mt-10 cursor-pointer transition-colors duration-200 hover:bg-[#00d5ffc9] font-secondary"
        >
          BOOK A FREE CONSULTATION NOW
        </button>
      </div>

      <div className="mt-28">
        <h1 className="~text-2xl/5xl font-zentry font-bold">Our Team</h1>
        <p className="~text-base/2xl pt-10 max-w-2xl pb-10">
          The NEO-Founders met each other while studying at Montclair State
          University, forming NeoTechnology Developers LLC. in 2015 to fulfill
          businesses and individuals increasing needs for expert/skilled IT
          services.
        </p>
        <TeamGrid />
      </div>

      <div className="mt-20">
        <h1 className="~text-2xl/5xl font-zentry font-bold">
          Our Mission & Values
        </h1>
        <h2 className="~text-lg/2xl font-primary font-semibold pt-20">
          INSPIRED BY DIFFERENCE.
        </h2>
        <p className="~text-base/2xl pt-10 max-w-2xl">
          We offer quick, reliable support and uninterrupted communication at
          affordable rates. Our mission is to deliver the highest quality of
          service to small, medium and large businesses, specializing in:
          security, networking, service & repairs, and much more! We do so by
          providing flexible and cost-effective solutions customized to your IT
          needs
        </p>
      </div>
    </div>
  );
}
