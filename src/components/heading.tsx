'use client';

import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import clx from 'clsx';

export default function Heading({
                                    label,
                                    rsids,
                                }: {
    label: string;
    rsids: { id: number; name: string; age: number; }[]

}) {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-indigo-50 px-4 sm:px-6 md:px-8">
                <BreadCrumb pathname={pathname} />
            </div>
            <RenderSlug label={label} rsids={rsids} />
        </>
    );
}

function BreadCrumb({ pathname }: { pathname: string | null }) {
    return (
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <div className="my-4 flex items-center space-x-4 text-sm leading-5 text-zinc-600 transition">
                <div>
                    <Link href="/">
                        <span>Home</span>
                    </Link>
                </div>
                {pathname ? (
                    <>
                        <ChevronRightIcon
                            className="h-4 w-4 text-zinc-600"
                            aria-hidden="true"
                        />
                        {pathname
                            .split('/')
                            .slice(1)
                            .map((segment, index) => {
                                return (
                                    <React.Fragment key={segment}>
                    <span>
                      <span key={index} className="rounded-full px-1.5 py-0.5">
                        {segment}
                      </span>
                    </span>

                                        <ChevronRightIcon
                                            className="h-4 w-4 text-zinc-600"
                                            aria-hidden="true"
                                        />
                                    </React.Fragment>
                                );
                            })}
                    </>
                ) : null}
            </div>
        </nav>
    );
}

const RenderSlug = ({
                        label,
                        rsids,
                    }: {
    label: string;
    rsids: { id: number; name: string; age: number; }[]
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentVariant, setCurrentVariant] = React.useState(
        rsids[0].name
    );

    return (
        <div className="flex items-center justify-between border-b-2 border-slate-100 px-4 sm:px-6 md:px-8">
            <div className="my-4 flex min-w-0 flex-1">
                <h2 className="py-2 text-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {label}
                </h2>
                <div className="rounded-md px-3 py-2 text-sm font-medium">
                    <ChevronRightIcon
                        className="inline-flex h-4 w-4 text-zinc-600"
                        aria-hidden="true"
                    />
                    {/*  Create a dropbox */}
                    <Menu as="div" className="relative inline-block px-3 text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Found {rsids.length} items for {label}
                                <ChevronDownIcon
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 left-2 z-[40] mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {rsids.map((item) => (
                                        <Menu.Item key={item.id}>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={clx(
                                                        active
                                                            ? 'bg-indigo-50 text-gray-900'
                                                            : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                        currentVariant === item.name
                                                            ? 'bg-indigo-50 text-gray-900'
                                                            : 'text-gray-700'
                                                    )}

                                                    // onClick set the state to current item.name and
                                                    // reflect the changes in Page.tsx

                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

