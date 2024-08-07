import { Video2 } from '../assets'
import { SecondaryButton } from '../components'

const ImproveWorkflow = () => {
	return (
		<section id="improve-workflow" className="mt-20 flex flex-col px-5 sm:mt-52 sm:flex-row sm:gap-72 xl:gap-56">
			<div className="w-full sm:w-1/2 xl:w-4/6">
				<h1 className="my-4 text-4xl font-bold dark:text-blue-600 xs:text-5xl sm:my-5 sm:text-6xl sm:font-extrabold sm:leading-[80px]">Improve workflow</h1>
				<div className="my-7 flex sm:w-full">
					<button className="flex w-1/3 items-center justify-center rounded-l-lg border p-3 px-16 dark:border-blue-700 dark:bg-blue-200">Research</button>
					<button className="flex w-1/3 items-center justify-center border p-3 dark:border-blue-700 dark:text-white">Plan</button>
					<button className="flex w-1/3 items-center justify-center rounded-r-lg border p-3 dark:border-blue-700 dark:text-white">Design</button>
				</div>
				<div>
					<p className="mt-8 text-sm leading-7 text-gray-500 xs:text-xl">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				</div>
				<div className="my-10 flex">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="w-full items-center justify-center sm:w-1/2 xl:w-[700px]">
				<img src={Video2} />
			</div>
		</section>
	)
}

export default ImproveWorkflow
