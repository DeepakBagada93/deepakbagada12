
"use client";

import Link from 'next/link';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Home, Briefcase, Settings, Send, LayoutGrid, CodeXml } from 'lucide-react';

const navItems = [
  { href: "/#hero", label: "Home", icon: Home },
  { href: "/#expertise", label: "Expertise", icon: Briefcase },
  { href: "/#how-i-work", label: "Process", icon: Settings },
  { href: "/#projects", label: "Projects", icon: LayoutGrid },
  { href: "/#contact", label: "Contact", icon: Send },
];

export default function AppSidebar() {
  return (
    <Sidebar side="left" collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-3 justify-center items-center group-data-[collapsible=icon]:p-2.5">
        <Link href="/" className="flex items-center gap-2 w-full group-data-[collapsible=icon]:justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary flex-shrink-0">
            <path d="M8.5 7C7.67157 7 7 7.67157 7 8.5V15.5C7 16.3284 7.67157 17 8.5 17H11" />
            <path d="M15.5 7C16.3284 7 17 7.67157 17 8.5V15.5C17 16.3284 16.3284 17 15.5 17H13" />
          </svg>
          <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden whitespace-nowrap">Deepak Bagada</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton 
                asChild 
                tooltip={{
                  children: item.label, 
                  side: 'right', 
                  align: 'center',
                  className: "group-data-[collapsible=icon]:block hidden" // Show tooltip only when sidebar is icon-collapsed
                }}
                className="justify-start"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
