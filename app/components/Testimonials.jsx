import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "SuperVoice is one of the best partners we are working with right now. They have been committed to our needs with a great attention to detail. We will continue to expand SuperVoice into additional use cases across our brokerage and other companies as their offerings grow. We are looking forward to a long partnership with them.",
      author: "Benjamin Mayo",
      role: "IT Director | Syfan Logistics",
      avatar: "/images/avatar.jpeg",
    },
    {
      quote:
        "We've completed over 300,000 AI driven calls in 2024 with SuperVoice. Next year, we project to do 3-5x that amount and continue to free up employees to focus on more meaningful work. In the modern era, people should use the phone to build relationships, not just to exchange data.",
      author: "Andrew Smith",
      role: "SVP | Circle Logistics",
      avatar: "/images/avatar.jpeg",
    },
    {
      quote:
        "The implementation was seamless and the results were immediate. Our team can now focus on strategic tasks while SuperVoice handles routine communications efficiently.",
      author: "Sarah Johnson",
      role: "Operations Director | Global Transport",
      avatar: "/images/avatar.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[40px] leading-tight font-medium text-gray-900 mb-16 text-center">
          Real results for logistics leaders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-gray-900 rounded-full p-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>

              <blockquote className="text-gray-600 mb-8 text-lg leading-relaxed italic">
                {testimonial.quote}
              </blockquote>

              <div className="mt-auto">
                <div className="flex items-center">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover ring-2 ring-gray-900 ring-offset-2"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
