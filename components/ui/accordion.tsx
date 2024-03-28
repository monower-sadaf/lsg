"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root




const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border mb-4", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isActive, setIsActive] = React.useState<boolean>(false)

  return <AccordionPrimitive.Header className="flex font-medium text-14 md:text-20 group">
    <AccordionPrimitive.Trigger
      onClick={e => setIsActive(!isActive)}
      ref={ref}
      className={cn(
        "flex items-center justify-between w-full p-4 font-medium text-left rounded-md bg-lightgreen focus:drop-shadow-lg transition-all duration-700 hover:bg-green-900 hover:text-white [&[data-state=open]>svg]:rotate-45 data-[state=open]:bg-primary data-[state=open]:text-white [&[data-state=open]>svg]:text-white",
        className
      )}
      {...props}
    >
      {children}


      <PlusIcon className="h-6 w-6 text-primary shrink-0 transition-all duration-700 group-hover:text-slate-200" />


    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="p-4 text-14 md:text-20 leading-5 md:leading-7">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
