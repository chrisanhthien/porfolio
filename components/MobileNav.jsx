"use client";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';



const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

const MobileNav = () => {
    const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries  className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <VisuallyHidden>
                <SheetHeader>
                    <SheetTitle>Sidebar</SheetTitle>
                    <SheetDescription>Sidebar</SheetDescription>
                </SheetHeader>
            </VisuallyHidden>
            {/* logo */}
            <div className='mt-32 mb 40 text-center text-2xl'>
                <Link href="/">
                    <h1>
                        Chris Thien<span className='text-accent'>..</span>
                    </h1>
                </Link>
            </div>
            

            {/* Navigation */}
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav