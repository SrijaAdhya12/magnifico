import { CircleOfNetworks as image1 } from '../assets'
import { SecondaryButton } from '../components'

const Tools = () => {
	return (
		<section id="tools" className="mx-auto my-28 flex flex-col gap-16 font-roboto sm:my-44 sm:flex-row sm:gap-72 sm:py-16">
			<div className="w-full justify-center px-7 sm:w-1/2">
				<h1 className="text-4xl font-bold xs:text-5xl sm:text-6xl sm:font-extrabold sm:leading-[80px] dark:text-blue-600">Get all the tools your team needs</h1>
				<p className="mt-8 text-sm leading-7 text-gray-500 xs:text-xl">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
				<div className="mt-7">
					<SecondaryButton arrow color="blue">
						Check the tools
					</SecondaryButton>
				</div>
			</div>
			<div className="flex w-full items-center justify-center sm:w-1/2">
				<img src={image1} alt="Circle Of Networks" />
			</div>
		</section>
	)
}

export default Tools
