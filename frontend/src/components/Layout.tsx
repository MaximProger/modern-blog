import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";
import { ICategory } from "../../types";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: ReactNode;
  categories: ICategory[];
}

const Layout = ({ children, categories }: IProps) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Navbar categories={categories} />
      {children}
    </main>
  );
};

export default Layout;
