const Contact = () => {
  return (
    <section className="font-sourceSans relative p-1" id="contact">
      <div className="absolute inset-0 bg-gradient-to-r from-overlay-white to-overlay-white z-10"></div>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center z-0"></div>

      <div className="relative flex flex-col items-center justify-around z-20">
        {/* Contact Heading  */}
        <div className="flex flex-col items-center space-y-7 w-5/6 mt-32">
          <h1 className="text-4xl font-sourceSansBold  font-bold tracking-wider ">
            CONTACT
          </h1>
          <p className="border-2 border-primary w-8 rounded-lg text-3xl"></p>
          <p className="text-[#555555] text-[21px] font-medium text-center block leading-8 max-w-[50rem]">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        {/* FORM */}
        <form
          className="bg-white rounded-lg border-4 shadow-lg p-1 max-w-[50rem] w-5/6  mx-auto  my-20 "
          action="https://formspree.io/f/xjkbkrgd"
          method="POST"
        >
          <div className="mx-8 my-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow  border-4 border-[#ebebeb] rounded w-full p-4 text-gray-700 bg-[#f0f0f0] leading-tight "
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mx-8 my-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow  border-4 border-[#ebebeb] rounded w-full p-4 text-gray-700 bg-[#f0f0f0] leading-tigh"
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mx-8 my-10">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow border-4  border-[#ebebeb] rounded w-full p-4 text-gray-700 bg-[#f0f0f0] leading-tigh h-56 resize-none overflow-hidden"
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <div className="text-right my-6 mx-7">
            <button className="text-white bg-primary my-8 border-0 py-4 px-14 rounded-md text-sm font-sourceSansBold font-bold tracking-wider shadow-2xl uppercase">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
