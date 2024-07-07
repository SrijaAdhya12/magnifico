import { Pic1 as image1, Pic2 as image2, Pic3 as image3 } from '../assets'
import { SecondaryButton } from '../components'

const TimeWorking = () => {
	return (
		<section className="flex container sm:px-2 mx-auto sm:mt-52">
			<div className="flex gap-4 w-1/2 justify-center">
				<img className="h-96 mt-20" src={image1} alt="women" />
				<img className="h-96" src={image2} alt="group" />
				<img className="h-96 mt-14" src={image3} alt="women" />
			</div>
			<div className="sm:w-1/2 sm:px-10 px-7">
				<h1 className="sm:text-6xl text-5xl font-bold sm:leading-[80px] sm:font-extrabold">
					Enjoy your time
					<br />
					working
				</h1>
				<p className="text-gray-500 mt-8 text-xl leading-7">Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
				<div className="mt-7">
					<SecondaryButton arrow color="blue">
						See how it helped others
					</SecondaryButton>
				</div>
			</div>
		</section>
	)
}

export default TimeWorking
