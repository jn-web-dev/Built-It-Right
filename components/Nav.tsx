'use client'

import React from "react";
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { FaHome, FaInfoCircle, FaFolderOpen, FaToolbox, FaEnvelope, FaBars } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-24 items-center gap-4 ">
      <NavigationMenu className="flex flex-col sm:flex-row justify-between">
      <div className="fixed z-10 top-0 left-0 right-0 ml-4 sm:ml-2">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={110}
        className="mx-auto sm:mx-0 max-w-auto max-h-auto"
        style={{ position: 'sticky', top: 0 }}
      />
    </div>
        <NavigationMenuList className="flex flex-col sm:flex-row gap-5 ml-10">
          <NavigationMenuItem onClick={() => { window.location.reload(); }} className="hidden sm:flex items-center">
            <NavigationMenuTrigger className="flex items-center hover:text-purple">
              <FaHome className="mr-2" />
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:flex items-center">
            <NavigationMenuTrigger className="flex items-center hover:text-purple">
              <FaInfoCircle className="mr-2" />
              About Us
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:flex items-center">
            <NavigationMenuTrigger className="flex items-center hover:text-purple">
              <FaFolderOpen className="mr-2" />
              Projects Portfolio
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:flex items-center">
            <NavigationMenuTrigger className="flex items-center hover:text-purple">
              <FaToolbox className="mr-2" />
              Services
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:flex items-center">
            <NavigationMenuTrigger className="flex items-center hover:text-purple">
              <FaEnvelope className="mr-4" />
              Contact Us
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="sm:hidden">
            <NavigationMenuTrigger className="justify-end ">
              <FaBars className="mr-2" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-5">
              <NavigationMenuLink>Home</NavigationMenuLink>
              <NavigationMenuLink>About Us</NavigationMenuLink>
              <NavigationMenuLink>Projects Portfolio</NavigationMenuLink>
              <NavigationMenuLink>Services</NavigationMenuLink>
              <NavigationMenuLink>Contact Us</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;