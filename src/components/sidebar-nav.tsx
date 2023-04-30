'use client';

import { Section, type Sections } from '#/lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function SidebarNav({
                               path,
                               queryParam,
                               categorySlug,
                           }: {
    path: 'variant' | 'gene' | 'region' | 'rsid';
    queryParam: string;
    categorySlug?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    return (
        <>
            <div className="absolute top-56 flex w-full flex-col lg:bottom-0 lg:w-60">
                <div
                    className={clsx('pt-24 lg:static lg:block', {
                        'fixed inset-x-0 bottom-0 top-0': isOpen,
                        hidden: !isOpen,
                    })}
                >
                    <nav className="pl-4 sm:pl-6 md:pl-8">
                        {Section.map((section) => {
                            if (section.slug !== categorySlug) return null;
                            return (
                                <div key={section.name}>
                                    <div className="space-y-1">
                                        {section.items?.map((item) => {
                                            return (
                                                <SideBarItem
                                                    key={item.slug}
                                                    item={item}
                                                    close={close}
                                                    path={path}
                                                    queryParam={queryParam}
                                                    categorySlug={categorySlug}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}

export function SideBarItem({
                                item,
                                close,
                                path,
                                queryParam,
                                categorySlug,
                            }: {
    item: {name: string, slug: string}
    close: any;
    path: 'variant' | 'gene' | 'region' | 'rsid';
    queryParam: string;
    categorySlug?: string | null;
}) {
    const pathname = usePathname();
    const selectedSubCategory = pathname?.split('/').splice(-1)[0];
    const subCategory = item.slug;
    const isActive = subCategory === selectedSubCategory;

    return (
        <Link
            onClick={close}
            href={`/${path}/${queryParam}/${categorySlug}/${subCategory}`}
            className={clsx('block px-3 py-3 text-sm font-medium', {
                'text-gray-500 hover:text-gray-700': !isActive,
                'border-r-none rounded-l-md border-t border-l border-b bg-indigo-100 text-indigo-700':
                isActive,
            })}
        >
            {item.name}
        </Link>
    );
}