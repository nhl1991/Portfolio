import { GitRepository } from "@/lib/interface";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(
            "https://api.github.com/users/nhl1991/repos?sort=pushed&direction=desc&per_page=6",
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_PAT}`,
                },
                next: {revalidate: 3600, tags: ['repository/nhl1991']}
            }
        );
        if (!response.ok) throw new Error('NETWORK_ERROR');

        const result: GitRepository[] = await response.json()


        const repos = result.filter((q) => q.private != true).slice(0,5);

        return NextResponse.json({ repos }, { status: 200 })
    } catch (e) {
        console.log(e);
        throw new Error("FAILED_TO_FETCH");
    }
}