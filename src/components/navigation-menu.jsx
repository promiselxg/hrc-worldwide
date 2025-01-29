/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              `bg-transparent hover:bg-transparent active:bg-transparent text-[25px] md:text-[17px] ${
                location?.pathname?.startsWith("/ministry")
                  ? "text-[--active]"
                  : ""
              }`
            )}
          >
            Ministries
          </NavigationMenuTrigger>
          <NavigationMenuContent className="font-lato">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    href="/ministry"
                    className={cn(
                      `flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md `
                    )}
                  >
                    <div className="mb-2 mt-4 text-[16px] font-[600] font-lato">
                      MINISTRIES
                    </div>
                    <p className="text-[12px] leading-tight text-[--primary-bg] capitalize">
                      we&apos;re passionate about empowering individuals to grow
                      in their faith and fulfill their purpose.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/ministry" title="Children Ministry">
                we&apos;re passionate about raising purpose-driven adults.
              </ListItem>
              <ListItem href="/ministry" title="Youth Ministry">
                The HRC Youth Ministry operates through two main streams:
                Fellowship and Ministry.
              </ListItem>
              <ListItem href="/ministry" title="Music Ministry">
                Our Music Ministry is dedicated to creating an atmosphere that
                invites the presence of God, inspires spiritual growth, and
                fosters a sense of community.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          to={props.href}
          {...props}
        >
          <div className="text-[14px] font-lato font-[600] capitalize">
            {title}
          </div>
          <p className="line-clamp-2 text-[12px] capitalize leading-snug text-[rgba(0,0,0,0.7)]">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
