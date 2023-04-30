'use client';

import { Section, type Sections } from '#/lib/config';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';


export function GlobalNav({
                              path,
                              queryParam,
                              categorySlug,
                          }: {
    path: 'rsid'
    queryParam: string;
    categorySlug: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <div className="flex items-center justify-between gap-x-4">
            <nav className="flex space-x-4" aria-label="Tabs">
                {Section.map((category, index) => {
                    return (
                        <div key={category.name}>
                            <div className="space-y-1">
                                <GlobalNavItem
                                    key={index}
                                    close={close}
                                    path={path}
                                    queryParam={queryParam}
                                    section={category}
                                    categorySlug={categorySlug}
                                />
                            </div>
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}

function GlobalNavItem({

                           close,
                           path,
                           section,
                           categorySlug,
                           queryParam,
                       }: {
    section: Sections
    close: () => false | void;
    path: 'variant' | 'gene' | 'region' | 'rsid';
    categorySlug?: string | null;
    queryParam?: string;
}) {
    const category = section.slug;
    const subCategory = section.items?.map((item) => item.slug)[0] || '';
    const isActive = category === categorySlug;

    return (
        <Link
            onClick={close}
            href={`/${path}/${queryParam}/${category}/${subCategory}`}
            className={clsx('block px-3 py-3 text-sm font-medium', {
                'text-gray-500 hover:text-gray-700': !isActive,
                'border-r-none rounded-t-md border-t border-l border-b bg-indigo-100 text-indigo-700':
                isActive,
            })}
        >
            {section.name}
        </Link>
    );
}

