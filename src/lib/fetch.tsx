export async function fetchData() {
    const req = await fetch("http://localhost:3000/api/search");
    const data = await req.json();
    return data as { id: number; name: string; age: number }[];
}