import {
	A,
	Callout,
	Em,
	Figure,
	H2,
	LI,
	Lead,
	OL,
	P,
	Step,
	Strong,
	UL,
} from '@/components/blog/prose';

export function AgentThatEarns() {
	return (
		<>
			<Lead>An AI agent that can&apos;t get paid is just an expensive script.</Lead>

			<P>
				We&apos;ve spent two years watching &quot;AI agents&quot; get demoed — agents that book
				flights, summarize docs, call APIs. Impressive. But almost all of them stop at the same
				wall: they can <Em>do</Em> things, but they can&apos;t <Em>get paid</Em> for doing them,
				and you have no way to know who they are or whether to trust them. They&apos;re
				capabilities with no economy attached.
			</P>
			<P>
				That last 10% — identity, trust, payment — is the hard part. It&apos;s also the whole
				point. So that&apos;s what we built FrostyFi around. Here&apos;s how you go from a sentence
				describing what you want to an agent earning USDC on Base mainnet — without writing a line
				of code.
			</P>

			<H2>The three problems every &quot;agent&quot; tool punts on</H2>
			<P>
				Before the walkthrough, it&apos;s worth being honest about <Em>why</Em> most tools stop at
				&quot;calls an API.&quot; Turning a workflow into something economically real means
				answering three questions, and each one is genuinely hard:
			</P>
			<OL>
				<li>
					<Strong>Who is this agent?</Strong> If an agent is just an endpoint behind someone&apos;s
					API key, it&apos;s anonymous. You can&apos;t verify it, discover it, or build a
					reputation around it.
				</li>
				<li>
					<Strong>Can I trust it?</Strong> Trust isn&apos;t a vibe — it has to accrue from a track
					record that nobody can fake or quietly delete.
				</li>
				<li>
					<Strong>How does it get paid?</Strong> Subscriptions and invoices don&apos;t fit
					machine-speed, per-request work. An agent that runs 10,000 times a day needs to be paid
					10,000 times, automatically.
				</li>
			</OL>
			<P>
				FrostyFi answers all three at the protocol level — using <Strong>x402</Strong> for payment
				and <Strong>ERC-8004</Strong> for identity and reputation — so you don&apos;t have to.
			</P>

			<H2>The walkthrough</H2>
			<P>
				Here&apos;s the reframe that matters: <Strong>almost any workflow can become a paid agent.</Strong>{' '}
				If it does something genuinely useful — a price check, an alert, a data lookup, an on-chain
				action — then a person (or another agent) has a reason to drop a few cents to call it. The
				workflow is what makes the agent worth paying for; x402 is just how it collects. To keep this
				honest, we&apos;ll take about the simplest agent there is all the way to a real mainnet
				payment: one that returns the current Ethereum gas price.
			</P>

			<Step n={1} title='Describe what you want'>
				<P>
					You don&apos;t start from a blank canvas — you start from a sentence. Tell{' '}
					<Strong>Frosty Architect</Strong> what the agent should do in plain English and it builds
					the workflow for you. Want to change something? Drag nodes on the canvas — LLMs, HTTP
					calls, conditions, loops, code, on-chain actions (Uniswap, Hyperliquid, Jupiter, raw
					EVM/Solana). Or just ship what it generated.
				</P>
				<Figure
					src='/screenshots/heroV1Describe.png'
					alt='Frosty Architect: a box to describe the workflow you want in plain English, with a Generate Workflow button'
					width={512}
					height={291}
					caption='Describe it in plain English — Frosty Architect builds the workflow.'
				/>
				<P>
					The example above asks for a cross-DEX arbitrage scanner; you could just as easily ask for
					a wallet watcher, a news summarizer, or a daily on-chain report. The path from <Em>here</Em>{' '}
					to <Em>earning on mainnet</Em> is the same for all of them — so we&apos;ll follow an even
					simpler one: hit a public RPC and return the gas price.
				</P>
			</Step>

			<Step n={2} title='Deploy the workflow'>
				<P>
					One click deploys the workflow to the execution engine. Now it has a real, callable
					runtime — not just a diagram.
				</P>
			</Step>

			<Step n={3} title='Deploy it as a paid agent'>
				<P>This is where it becomes a business. Deploy the workflow as an agent and set your terms:</P>
				<UL>
					<LI>
						<Strong>Price</Strong> — what each call costs (e.g. $0.01 USDC)
					</LI>
					<LI>
						<Strong>Network</Strong> — USDC on Base
					</LI>
				</UL>
				<P>
					That&apos;s it. Your agent now speaks <Strong>x402</Strong>: when someone calls it, they
					get an HTTP <code className='rounded bg-white/10 px-1.5 py-0.5 font-mono-accent text-[14px] text-[#67e8f9]'>402 Payment Required</code>, their client pays in USDC, and the call goes
					through. (The 402 status code has been reserved in the HTTP spec since 1997 and went
					unused for nearly three decades — x402 is what finally makes it real.)
				</P>
			</Step>

			<Step n={4} title='Give it an on-chain identity'>
				<P>
					Click <Strong>Register Identity</Strong> and your agent registers on-chain via{' '}
					<Strong>ERC-8004</Strong>. Now it&apos;s:
				</P>
				<UL>
					<LI>
						<Strong>Discoverable</Strong> — it shows up in agent registries like 8004scan
					</LI>
					<LI>
						<Strong>Verifiable</Strong> — anyone can confirm it&apos;s the real agent, not an
						impostor
					</LI>
					<LI>
						<Strong>Reputable</Strong> — feedback accrues on-chain over time, and it&apos;s
						permissionless to leave, so nobody can game or scrub the record
					</LI>
				</UL>
				<Figure
					src='/screenshots/agent-gas-oracle.png'
					alt='The FrostyFi Gas Oracle agent on 8004scan, with its on-chain ERC-8004 identity and feedback score'
					width={1280}
					height={800}
					caption='The gas-oracle agent on 8004scan, carrying a verifiable ERC-8004 identity.'
				/>
			</Step>

			<Step n={5} title='Watch it earn'>
				<P>
					Share the agent&apos;s endpoint. Every call that comes in pays you in USDC, and{' '}
					<Strong>settlement happens on-chain</Strong> — not an invoice you have to chase, an
					actual transaction you can point to.
				</P>
				<Figure
					src='/screenshots/agent-usdc-transfer.png'
					alt='BaseScan: a real x402 transaction settling 0.01 USDC from caller to agent owner on Base mainnet'
					width={1374}
					height={902}
					caption='Per-call USDC, settled on Base mainnet — a real x402 transaction.'
				/>
				<Callout>
					Receipts: a real x402 settlement on{' '}
					<A href='https://basescan.org/tx/0xad04a3d5e61f7ab6b4eed0bf6efd926bcd9ceeb42949e11aefec72222be38bdf'>
						Basescan
					</A>{' '}
					and a live FrostyFi agent on{' '}
					<A href='https://8004scan.io/agents/base/54630'>8004scan</A>. The full loop — call → pay → settle → result
					— runs on Base mainnet today.
				</Callout>
			</Step>

			<H2>Why this compounds</H2>
			<P>
				Here&apos;s the part that makes on-chain identity matter, not just sound nice:{' '}
				<Strong>trust is what gets you paid the second time.</Strong>
			</P>
			<P>
				The first call, someone&apos;s taking a chance on you. But every successful call leaves a
				permanent, verifiable mark on your agent&apos;s ERC-8004 reputation. Over time that record
				becomes the reason callers pick your agent over an anonymous one — and the reason they keep
				coming back. You&apos;re not just selling software you have to maintain. You&apos;re
				deploying a worker that bills for itself, builds its own track record, and gets <Em>more</Em>{' '}
				trustworthy (and more valuable) the more it works.
			</P>
			<P>That&apos;s the difference between an expensive script and an agent with an economy.</P>

			<H2>Build one</H2>
			<P>
				A gas oracle is the warm-up. The same five steps turn almost anything you&apos;d automate
				into an agent that earns — the only real question is whether it does something someone wants
				badly enough to pay for. The free tier is enough to build and try this end to end; Pro is for
				when you&apos;re ready to deploy and earn.
			</P>
			<P>
				Tell me what you&apos;d automate — I&apos;m building this in public, and I read every reply.
			</P>
		</>
	);
}
