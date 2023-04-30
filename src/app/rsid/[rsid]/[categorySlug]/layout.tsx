import {GlobalNav} from "#/components/global-nax";
import cx from "clsx";
import {SidebarNav} from "#/components/sidebar-nav";
import Heading from "#/components/heading";
import {fetchData} from "#/lib/fetch";

export default async function Layout({
                                         children,
                                         params,
                                     }: {
    children: React.ReactNode;
    params: { rsid: string; categorySlug: string; subCategorySlug: string };
}) {
    const height = 'min-h-[300px]'
    const path = 'rsid'
    const rsidData = await fetchData();

    return (
        <>
            <Heading label={params.rsid} rsids={rsidData}/>
            <SidebarNav
                path={path}
                queryParam={params.rsid}
                categorySlug={params.categorySlug}
            />
            <div className="px-4 py-8 sm:px-6 md:px-8 lg:pl-60">
                <div>
                    <GlobalNav path={path} categorySlug={params.categorySlug} queryParam={params.rsid}/>
                    <div>
                        <div className={cx('bg-indigo-100 p-3.5 lg:p-8', height)}>
                            <div className="space-y-9">
                                <div>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}