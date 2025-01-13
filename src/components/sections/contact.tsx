
"use client";

import { motion } from "framer-motion";
import { Phone,  Instagram, MessageCircle, LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  delay?: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, href, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-blue-100 p-4 text-blue-600 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.a>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 179, 237, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-blue-600 font-medium mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Let&apos;s Start Your Project Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-lg text-gray-600"
          >
            Ready to transform your ideas into reality? Connect with us through any of these channels.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+91 8708787989"
            href="tel:+918708787989"
            delay={3}
          />
          {/* <ContactCard
            icon={Mail}
            title="Email"
            value="contact@graphics.com"
            href="mailto:contact@graphics.com"
            delay={4}
          /> */}
          <ContactCard
            icon={Instagram}
            title="Instagram"
            value="@mehta_graphicss"
            href="https://instagram.com/mehta_graphicss"
            delay={5}
          />
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value="Message Us"
            href="https://wa.me/8708787989"
            delay={6}
          />
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Prefer email? Write to us at{" "}
            <a 
              href="mailto:contact@graphics.com" 
              className="text-blue-600 hover:underline"
            >
              contact@graphics.com
            </a>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
