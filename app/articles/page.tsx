import ArticleGrid from '../components/ArticleGrid';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Articles = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
			<div className='mb-4'>
				<Link
					href={'/'}
					className='text-4xl font-bold text-gray-900 mb-8 pl-4'
				>
					<Button>Ana Sayfa</Button>
				</Link>
			</div>
			<ArticleGrid />
		</div>
	);
};

export default Articles;
