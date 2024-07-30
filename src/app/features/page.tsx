// src/app/about/page.tsx
import { CommunityPage } from "@/components/community-page"; // Adjust the path if necessary
import { FeaturesPage } from "@/components/features-page";

export default function Community() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<FeaturesPage />
		</main>
	);
}
