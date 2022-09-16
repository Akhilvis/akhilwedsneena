const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Marriage+Akhil+%26+Neena+%F0%9F%92%8C&
location=Marriage%20at%20Ambady%20Auditorium%20Perumpuzha%20Kollam%20Reception%20at%20St%20Marys%20Knanaya%20Church%20Karippadom&
dates=20221113T063000Z%2F20221114T120000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Our wedding will be held on:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        Sunday, 13 NOVEMBER 2022
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-[#CE7BB0] hover:bg-[#A267AC] outline-[#6867AC] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          Save on Calender
        </a>
      </div>

      {/* <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          MARRIAGE
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          12.00 PM
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl  font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          RECEPTION
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          5.30 PM
        </div>
      </div> */}
    </div>
  );
};

export default Agendas;
