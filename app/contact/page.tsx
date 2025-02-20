'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_METHODS = [
  {
    icon: '📍',
    title: 'Visit Us',
    details: '123 Fashion Street, Design District',
    color: 'blue',
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: '+1 234 567 890',
    color: 'purple',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: 'contact@essancia.com',
    color: 'pink',
  },
  {
    icon: '⏰',
    title: 'Opening Hours',
    details: 'Mon - Sat: 10AM - 8PM',
    color: 'green',
  },
];

const ContactPage = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      const isOverInteractive = (e.target as HTMLElement).closest(
        'button, input, textarea, a'
      );
      gsap.to(cursor, {
        scale: isOverInteractive ? 1.5 : 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursorDot.remove();
    };
  }, []);

  // Initial animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.contact-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        '.form-element',
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        '.contact-info',
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.8'
      );

    // Scroll animations
    gsap.utils.toArray('section').forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      {/* Hero Section */}
      <section className="h-[90vh] relative overflow-hidden">
        <Image
          src="/images/contact-hero.webp"
          alt="Contact hero"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl px-4">
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-light contact-title text-white">
              Let&apos;s Create Something
              <span
                className="block mt-4 bg-gradient-to-r from-white via-white/90 to-white/80 
                bg-clip-text text-transparent"
              >
                Beautiful Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear
              from you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="text-white text-4xl opacity-80">↓</span>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            {/* Form Side */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="form-element group">
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-white border rounded-xl
                      border-gray-200 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 transition-all duration-300 
                      group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-2 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-element group">
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-6 py-4 bg-transparent border rounded-lg
                      border-gray-200 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 transition-all duration-300
                      group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-element group">
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-6 py-4 bg-transparent border rounded-lg
                      border-gray-200 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 transition-all duration-300
                      group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-element w-full py-4 rounded-lg relative overflow-hidden
                    bg-blue-500 text-white font-medium group"
                >
                  <span
                    className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out 
                    group-hover:w-full"
                  />
                  <span className="relative">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="w-full lg:w-1/2 contact-info space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONTACT_METHODS.map((method, index) => (
                  <div
                    key={method.title}
                    className="p-6 rounded-xl backdrop-blur-lg bg-white 
                      shadow-[0_0_50px_rgba(0,0,0,0.1)] transform transition-all duration-300
                      hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredMethod(index)}
                    onMouseLeave={() => setHoveredMethod(null)}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        hoveredMethod === index ? 'scale-105' : ''
                      } transition-transform duration-300`}
                    >
                      <span
                        className={`p-3 rounded-full bg-${method.color}-500/10 
                        text-${method.color}-500 text-xl`}
                      >
                        {method.icon}
                      </span>
                      <div>
                        <h3 className="font-medium mb-1">{method.title}</h3>
                        <p className="text-gray-600">{method.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Map Section */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/map.webp"
                  alt="Location map"
                  fill
                  className="object-cover transition-transform duration-700
                    group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-medium mb-2">
                      Visit Our Store
                    </h3>
                    <p className="text-white/80">Get directions →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 
          rounded-lg shadow-lg animate-fadeIn flex items-center gap-3"
        >
          <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center">
            <span className="text-xl">✓</span>
          </div>
          <div>
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm text-white/80">
              We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference
          bg-white/20 backdrop-blur-sm border border-white/40"
      />
    </div>
  );
};

export default ContactPage;
