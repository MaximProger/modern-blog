import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const Hero = ({ children, title, description }: IProps) => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize">
            {title}
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Hero;
