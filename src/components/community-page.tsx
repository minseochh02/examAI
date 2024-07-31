/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Nb9xGtJtesc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CommunityPage() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "unauthenticated") {
		router.push("/");
		return null;
	}
	return (
		<div className="flex flex-col h-full">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link
					href="/"
					className="flex items-center justify-center"
					prefetch={false}
				>
					<CompanyIcon />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						href="/"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href="/features"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Features
					</Link>
					{/* <Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Pricing
					</Link>*/}
					<Link
						href="/tutorial"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Tutorial
					</Link>
					<Link
						href="#"
						className="text-sm font-medium underline underline-offset-4"
						prefetch={false}
					>
						Community
					</Link>
				</nav>
			</header>
			<header className="bg-primary text-primary-foreground p-6">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold">Acme Community</h1>
					<p className="text-muted-foreground">
						A place for Acme product enthusiasts to connect and share.
					</p>
				</div>
			</header>
			<main className="flex-1 container mx-auto py-8">
				<div className="bg-background rounded-lg shadow-lg p-6 mb-6">
					<form className="flex items-center gap-4">
						<Avatar className="h-10 w-10">
							<AvatarImage src="/placeholder-user.jpg" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Textarea
							placeholder="What's on your mind?"
							className="flex-1 bg-muted rounded-md p-2 text-sm"
						/>
						<Button type="submit">Post</Button>
					</form>
				</div>
				<div className="space-y-6">
					<div className="bg-background rounded-lg shadow-lg p-6">
						<div className="flex items-start gap-4 mb-4">
							<Avatar className="h-10 w-10">
								<AvatarImage src="/placeholder-user.jpg" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex-1">
								<div className="flex items-center justify-between">
									<div className="font-medium">Olivia Davis</div>
									<div className="text-xs text-muted-foreground">
										2 hours ago
									</div>
								</div>
								<p className="text-sm">
									Excited to be part of the Acme community! Can&apos;t wait to
									connect with fellow enthusiasts and learn more about the
									products.
								</p>
							</div>
						</div>
						<Separator />
						<div className="mt-4">
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="font-medium">John Doe</div>
										<div className="text-xs text-muted-foreground">
											1 hour ago
										</div>
									</div>
									<p className="text-sm">
										Great to see you here, Olivia! I&apos;m also a big fan of
										Acme products. Looking forward to connecting.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="font-medium">Jane Smith</div>
										<div className="text-xs text-muted-foreground">
											30 minutes ago
										</div>
									</div>
									<p className="text-sm">
										Awesome, can&apos;t wait to see what you guys come up with
										next! The Acme community is the best.
									</p>
								</div>
							</div>
							<form className="flex items-center gap-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Input
									placeholder="Add a comment..."
									className="flex-1 bg-muted rounded-md p-2 text-sm"
								/>
								<Button type="submit">Comment</Button>
							</form>
						</div>
					</div>
					<div className="bg-background rounded-lg shadow-lg p-6">
						<div className="flex items-start gap-4 mb-4">
							<Avatar className="h-10 w-10">
								<AvatarImage src="/placeholder-user.jpg" />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<div className="flex-1">
								<div className="flex items-center justify-between">
									<div className="font-medium">John Doe</div>
									<div className="text-xs text-muted-foreground">
										4 hours ago
									</div>
								</div>
								<p className="text-sm">
									Just got my hands on the new Acme product and I&apos;m loving
									it! Can&apos;t wait to see what else the team has in store.
								</p>
							</div>
						</div>
						<Separator />
						<div className="mt-4">
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>OD</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="font-medium">Olivia Davis</div>
										<div className="text-xs text-muted-foreground">
											3 hours ago
										</div>
									</div>
									<p className="text-sm">
										I agree, John! The new Acme product is a game-changer.
										Can&apos;t wait to see what else is in the pipeline.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>JS</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div className="font-medium">Jane Smith</div>
										<div className="text-xs text-muted-foreground">
											2 hours ago
										</div>
									</div>
									<p className="text-sm">
										Totally agree, the new Acme product is amazing! Can&apos;t
										wait to see what else is in store.
									</p>
								</div>
							</div>
							<form className="flex items-center gap-4">
								<Avatar className="h-8 w-8">
									<AvatarImage src="/placeholder-user.jpg" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Input
									placeholder="Add a comment..."
									className="flex-1 bg-muted rounded-md p-2 text-sm"
								/>
								<Button type="submit">Comment</Button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
function CompanyIcon() {
	return <img src="/icon.png" alt="icon" className="h-14 w-24" />;
}
