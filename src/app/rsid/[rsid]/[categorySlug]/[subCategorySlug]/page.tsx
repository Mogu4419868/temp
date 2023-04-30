import {fetchData} from "#/lib/fetch";
export default async function Page({
                                       params
                                   }: {
    params: { subCategorySlug: string; categorySlug: string, rsid: string };
}) {


    const data = await fetchData();

    // Defaults to display the first item in the list
    // When the state changes, the component re-renders and displays the new item

    return (
        <ul>
            {data.map((item, index) => index < 1 && (
                <li key={item.id} className="py-2">
                    <h1>{item.name}</h1>
                    <p>{item.age}</p>
                </li>
            ))}
        </ul>
    )
}
