// src/app/about/page.tsx
"use client";
import { CommunityPage } from "@/components/community-page"; // Adjust the path if necessary

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Community() {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/");
		}
	}, [status, router]);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (!session) {
		return null; // This will never be rendered because of the useEffect hook
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CommunityPage />
		</main>
	);
}
