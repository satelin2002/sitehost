import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100/10 to-purple-100/10 p-4 sm:p-6 lg:p-8">
      {children}
    </div>
  );
}
