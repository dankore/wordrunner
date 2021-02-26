import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import WPMSlider from '@/components/wpm-slider';
import { IStateProps } from '@/constants/types';

const Appbar = ({ state, send }: IStateProps) => {
	const [showSettings, setShowSettings] = useState(false);

	return (
		<div className="pt-safe w-full bg-gray-900 fixed top-0">
			<header className="bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800">
				<div className="mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between">
					<Link href="/">
						<a>
							<h1 className="font-medium dark:text-gray-300 text-gray-900">
								WordRunner
							</h1>
						</a>
					</Link>
					<nav className="space-x-6 flex items-center">
						<ThemeToggle />
						<div className="relative flex">
							<button
								type="button"
								className="text-gray-500 dark:text-gray-300 text-2xl cursor-pointer focus:outline-none"
								aria-expanded={showSettings}
								aria-label="toggle settings"
								onClick={() => setShowSettings(!showSettings)}
							>
								<svg
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									width="15"
									height="15"
								>
									<path
										clipRule="evenodd"
										d="M5.944.5l-.086.437-.329 1.598a5.52 5.52 0 00-1.434.823L2.487 2.82l-.432-.133-.224.385L.724 4.923.5 5.31l.328.287 1.244 1.058c-.045.277-.103.55-.103.841 0 .291.058.565.103.842L.828 9.395.5 9.682l.224.386 1.107 1.85.224.387.432-.135 1.608-.537c.431.338.908.622 1.434.823l.329 1.598.086.437h3.111l.087-.437.328-1.598a5.524 5.524 0 001.434-.823l1.608.537.432.135.225-.386 1.106-1.851.225-.386-.329-.287-1.244-1.058c.046-.277.103-.55.103-.842 0-.29-.057-.564-.103-.841l1.244-1.058.329-.287-.225-.386-1.106-1.85-.225-.386-.432.134-1.608.537a5.52 5.52 0 00-1.434-.823L9.142.937 9.055.5H5.944z"
										stroke="currentColor"
										strokeLinecap="square"
										strokeLinejoin="round"
									/>
									<path
										clipRule="evenodd"
										d="M9.5 7.495a2 2 0 01-4 0 2 2 0 014 0z"
										stroke="currentColor"
										strokeLinecap="square"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<div
								className={`${ showSettings ? 'block' : 'hidden' } absolute z-10 mx-6 mt-8 transform px-2 w-screen max-w-xs md:max-w-md lg:max-w-lg -translate-x-3/4`}
							>
								<div className="overflow-hidden">
									<div className="rounded-lg relative bg-white dark:bg-gray-800 px-5 py-6 sm:p-8">
										<WPMSlider state={state} send={send} />
									</div>
								</div>
							</div>
						</div>
						<Link href="https://github.com/jkytoela/wordrunner">
							<a>
								<h1 className="text-indigo-600 dark:text-gray-300 hover:underline">
									GitHub
								</h1>
							</a>
						</Link>
						<div
							className="w-10 h-10 bg-gray-200 dark:bg-gray-800 bg-cover bg-center rounded-full shadow-inner"
							style={{ backgroundImage: 'url(/images/icon-512.png' }}
						/>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Appbar;
