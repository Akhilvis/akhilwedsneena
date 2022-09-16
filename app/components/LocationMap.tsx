import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.40565047844!2d76.67641201396306!3d8.934715192920619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e28f9f021339%3A0x61d20bedb4cb6728!2sAmbadi%20Auditorium!5e0!3m2!1sen!2sin!4v1661879597384!5m2!1sen!2sin";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.40565047844!2d76.67641201396306!3d8.934715192920619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e28f9f021339%3A0x61d20bedb4cb6728!2sAmbadi%20Auditorium!5e0!3m2!1sen!2sin!4v1661879597384!5m2!1sen!2sin";
const MAP_TITLE = "Ambadi Auditorium, Perumpuzha, Kottarakkara, Kollam";
const MAP_ADDRESS =
  "Jl. Batu Galing No.60, Talang Rimbo Lama, Kec. Curup Tengah, Kabupaten Rejang Lebong, Bengkulu 39119";

const LocationMap = () => {
  return (
    <div className="py-10 ">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Wedding Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              {/* <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p> */}
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
