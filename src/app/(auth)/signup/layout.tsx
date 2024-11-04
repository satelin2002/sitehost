import React from "react";
import { FeaturesList } from "@/components/features/FeaturesList";
import { Testimonial } from "@/components/features/Testimonial";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-grow bg-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 to-purple-100/10 pointer-events-none"></div>
        {children}
      </div>
      <aside className="w-full lg:w-96 bg-gray-100 p-4 sm:p-6 lg:p-8 flex-col overflow-y-auto hidden lg:flex">
        <FeaturesList />
        <Testimonial />
      </aside>
    </div>
  );
}
