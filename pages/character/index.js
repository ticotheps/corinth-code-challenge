import Link from 'next/link';

export default function CharactersListPage() {
	return (
		<div>
			<h1>Star Wars Characters</h1>
			<div>
				<ul>
					<li>
						<Link href='/character/1'>Luke Skywalker</Link>
					</li>
					<li>
						<Link href='/character/2'>C-3PO</Link>
					</li>
					<li>
						<Link href='/character/3'>R2-D2</Link>
					</li>
					<li>
						<Link href='/character/4'>Darth Vader</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
