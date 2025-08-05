import { ITestimonials } from "@/types/types";

export default function Testimonials(props: ITestimonials) {
  const { title, subtitle, userAvatars, testimonials } = props;

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-[164px] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div className="lg:flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 lg:max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* User Avatars */}
          <div className="flex items-center gap-1 lg:flex-shrink-0">
            {userAvatars.map((avatar, index) => (
              <div key={index} className={`relative ${index > 0 ? '-ml-3' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt={`User ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Simple user avatar SVG placeholder
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                        fill="currentColor"
                      />
                      <path 
                        d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" 
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Company Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.companyName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    // Company building icon as placeholder
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-500"
                    >
                      <path 
                        d="M3 21H21V19H19V10H15V12H13V6H11V4C11 3.45 10.55 3 10 3H8C7.45 3 7 3.45 7 4V8H5V21H3ZM9 5H9V7H9V5ZM9 9H9V11H9V9ZM9 13H9V15H9V13ZM9 17H9V19H9V17ZM7 17H5V19H7V17ZM7 13H5V15H7V13ZM7 9H5V11H7V9ZM15 14H13V16H15V14ZM15 18H13V20H15V18ZM17 14H19V16H17V14ZM17 18H19V20H17V18Z" 
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.companyName}
                </h3>
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
