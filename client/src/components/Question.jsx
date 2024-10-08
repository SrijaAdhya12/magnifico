import { FiPlus } from 'react-icons/fi'

const Question = ({ ques, ans, defaultChecked }) => {
	return (
		<label className="cursor-pointer">
			<input type="radio" className="peer sr-only" defaultChecked={defaultChecked} name="faq" />
			<div className="duration-600 no-scrollbar peer-checked: group my-4 flex h-[96px] flex-col items-start justify-center gap-4 overflow-auto rounded-2xl p-6 ring-1 ring-gray-300 transition-[height] duration-500 peer-checked:block peer-checked:h-[436px] peer-checked:ring-gray-500 sm:peer-checked:h-[240px]">
				<div className="flex items-center gap-4">
					<FiPlus className="duration-600 size-6 text-gray-500 transition-all ease-in-out peer-checked:group-[]:rotate-45" />
					<h6 className="font-semibold dark:text-white">{ques}</h6>
				</div>
				<p className="duration-600 mx-8 my-4 hidden text-white transition-opacity ease-in-out peer-checked:group-[]:block peer-checked:group-[]:text-gray-500">
					{ans}
				</p>
			</div>
		</label>
	)
}

export default Question
