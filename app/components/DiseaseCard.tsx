import Link from 'next/link';

type DiseaseCardProps = {
	id: number;
	sickness: {
		title: string;
		entryParagraph: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const DiseaseCard = ({ sickness, id }: DiseaseCardProps) => {
	const titleWithoutSpaces = sickness.title.replace(/\s/g, '-');
	return (
		<div className='w-12/12  bg-orange-100 rounded-2xl p-4 flex flex-col'>
			<h3 className='text-2xl font-semibold'>{sickness.title}</h3>
			<p className='mt-4'>
				{sickness.entryParagraph?.slice(0, 250) + '...'}
			</p>

			<div className='flex justify-end mt-auto'>
				<Link href={`hastaliklar/${id}/${titleWithoutSpaces}`}>
					<button className='bg-orange-500 text-white rounded-lg px-4 py-2 mt-8'>
						Daha Fazla
					</button>
				</Link>
			</div>
		</div>
	);
};

export default DiseaseCard;
