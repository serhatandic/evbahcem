import ArticleGrid from '../components/ArticleGrid';
import Navbar from '../components/Navbar';

const Articles = () => {
	return (
		<div>
			<div className='md:px-24 px-4'>
				<Navbar source={'articles'} />
			</div>
			<ArticleGrid />
		</div>
	);
};

export default Articles;
