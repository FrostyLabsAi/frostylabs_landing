import Image from 'next/image';
import type { ReactNode } from 'react';

export function Lead({ children }: { children: ReactNode }) {
	return (
		<p className='text-xl md:text-2xl leading-relaxed text-white/85 font-display font-medium mb-8'>
			{children}
		</p>
	);
}

export function P({ children }: { children: ReactNode }) {
	return <p className='text-[17px] leading-8 text-white/75 my-5'>{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
	return (
		<h2 className='font-display text-2xl md:text-3xl font-bold text-[#f2f0ff] mt-14 mb-4 tracking-tight'>
			{children}
		</h2>
	);
}

export function Strong({ children }: { children: ReactNode }) {
	return <strong className='font-semibold text-[#f2f0ff]'>{children}</strong>;
}

export function Em({ children }: { children: ReactNode }) {
	return <em className='italic text-white/85'>{children}</em>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
	const external = href.startsWith('http');
	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
			className='text-[#67e8f9] underline decoration-[#22d3ee]/40 underline-offset-4 hover:decoration-[#22d3ee] transition-colors'
		>
			{children}
		</a>
	);
}

/** Ordered list with brand-colored markers. */
export function OL({ children }: { children: ReactNode }) {
	return (
		<ol className='my-6 space-y-3 text-[17px] leading-7 text-white/75 list-decimal pl-6 marker:font-semibold marker:text-[#22d3ee]'>
			{children}
		</ol>
	);
}

/** Unordered list with gradient-dot bullets. */
export function UL({ children }: { children: ReactNode }) {
	return <ul className='my-6 space-y-2.5 text-[17px] leading-7 text-white/75'>{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
	return (
		<li className="relative pl-6 before:absolute before:left-0 before:top-[11px] before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-r before:from-[#22d3ee] before:to-[#a78bfa] before:content-['']">
			{children}
		</li>
	);
}

/** Numbered walkthrough step with a gradient badge. */
export function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
	return (
		<div className='mt-10'>
			<h3 className='flex items-center gap-3 font-display text-xl font-semibold text-[#f2f0ff]'>
				<span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] text-sm font-bold text-[#05060b]'>
					{n}
				</span>
				{title}
			</h3>
			<div className='mt-3'>{children}</div>
		</div>
	);
}

export function Figure({
	src,
	alt,
	width,
	height,
	caption,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
	caption?: string;
}) {
	return (
		<figure className='my-8'>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-black/40'
			/>
			{caption && (
				<figcaption className='mt-3 text-center text-sm text-white/45'>{caption}</figcaption>
			)}
		</figure>
	);
}

/** Highlighted proof / aside box. */
export function Callout({ children }: { children: ReactNode }) {
	return (
		<div className='my-8 rounded-xl border border-[#22d3ee]/20 bg-[#22d3ee]/[0.04] p-5 text-[16px] leading-7 text-white/80'>
			{children}
		</div>
	);
}
