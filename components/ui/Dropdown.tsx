"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { ChevronDownIcon } from "lucide-react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  triggerLabel: string;
  items: DropdownItem[];
  className?: string;
}

export function Dropdown({ triggerLabel, items, className }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          {triggerLabel}
          <ChevronDownIcon className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item, index) => {
          if (item.href) {
            return (
              <DropdownMenuItem key={index} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          }
          return (
            <DropdownMenuItem key={index} onClick={item.onClick}>
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
