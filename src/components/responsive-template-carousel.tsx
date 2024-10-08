/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/etEDzghkfuL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { useSession } from "next-auth/react";

export function ResponsiveTemplateCarousel() {
	// const { data: session, status } = useSession();
	return (
		<Carousel className="w-full max-w-4xl">
			<CarouselContent>
				<CarouselItem>
					<div className="grid grid-cols-1 gap-4 grid-cols-2">
						<Card className="flex flex-col justify-center items-center gap-4 p-6">
							<img
								src="https://docs.google.com/presentation/d/1RQBSmZrNamMKE-9K3sTU_dFWLdJ-S34RKnKl6S_9ew4/export?format=png&pageid=p"
								width={500}
								height={200}
								alt="Template Thumbnail"
								className="rounded-md"
							/>
							<div className="text-center">
								<h3 className="text-lg font-semibold">Horizontal</h3>
							</div>

							<Button
								size="sm"
								onClick={() =>
									window.open(
										`https://docs.google.com/presentation/d/1RQBSmZrNamMKE-9K3sTU_dFWLdJ-S34RKnKl6S_9ew4/copy`,
										"_blank"
									)
								}
							>
								사용하기
							</Button>
						</Card>
						<Card className="flex flex-col justify-center items-center gap-4 p-6">
							<img
								src="https://docs.google.com/presentation/d/1s-J961sUXSewWbj3HUPcCRK7sBjVIe3-UR9Xyng_sZw/export?format=png&pageid=p"
								width={300}
								height={200}
								alt="Template Thumbnail"
								className="rounded-md"
							/>
							<div className="text-center">
								<h3 className="text-lg font-semibold">Vertical</h3>
							</div>
							<Button
								size="sm"
								onClick={() =>
									window.open(
										`https://docs.google.com/presentation/d/1s-J961sUXSewWbj3HUPcCRK7sBjVIe3-UR9Xyng_sZw/copy`,
										"_blank"
									)
								}
							>
								사용하기
							</Button>
						</Card>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
