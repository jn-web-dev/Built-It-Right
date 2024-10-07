'use client'

import React from "react";

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
    <div className="px-8 sm:px-12 md:px-16 lg:px-24 items-center "> 
      <NavigationMenu className="flex flex-col sm:flex-row justify-between">
      
        <NavigationMenuList className="flex flex-col sm:flex-row">
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
              <FaEnvelope className="mr-2" />
              Contact Us
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem className="sm:hidden">  
            <NavigationMenuTrigger className="justify-end ">
              <FaBars className="mr-2" /> 
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
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