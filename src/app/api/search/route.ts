import { NextResponse } from "next/server";

import data from "#/lib/data.json";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const initialData = data.filter((p) =>
        p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
    );
    return NextResponse.json(initialData.slice(0, 10));
}