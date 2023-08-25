import ArticleGrid from '../components/ArticleGrid';
import FloatingNavbar from '../components/FloatingNavbar';

const Articles = () => {
	return (
		<div>
			<div className='md:px-24 px-4'>
				<FloatingNavbar source={'articles'} />
			</div>
			<ArticleGrid />
		</div>
	);
};

export default Articles;
