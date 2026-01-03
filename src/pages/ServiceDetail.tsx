import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <Link
          to="/services"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200">
                {service.description}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Service Details
                  </h2>
                  <div className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                        <p className="text-gray-700 text-lg">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {service.materials && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      Materials We Work With
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {service.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 px-6 py-3 rounded-full font-semibold text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Why Choose This Service?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert team brings decades of experience in traditional craftsmanship,
                    ensuring every project meets the highest standards of quality and authenticity.
                    We combine time-honored techniques with modern precision to deliver
                    exceptional results that stand the test of time.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                  <p className="mb-6 text-amber-50">
                    Interested in this service? Contact us for a consultation
                    and let's bring your vision to life.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:9885051999"
                      className="flex items-center justify-center space-x-3 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full"
                    >
                      <Phone size={20} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/919885051999?text=Hello, I'm interested in your temple construction services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp</span>
                    </a>
                    <Link
                      to="/contact"
                      className="block text-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors w-full"
                    >
                      Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Related Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  to={`/services/${relatedService.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {relatedService.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
