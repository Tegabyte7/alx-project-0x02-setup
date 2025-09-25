import Header from '@/components/layout/Header'
import Card from '@/components/common/Card';


const HomePage: React.FC = () => {
	const obj = [
		{
			title: "Benefits of sitting down to read",
			content: "Sitting down to read has a tremedious benefit to both human health and psychological state of well being."
		},
		{
			title: "Things fall Apart",
			content: "This book was written by chinwe Achebe. It talks about a story of a great warrior named Okonkwo who has a lazy son."
		},
		{
			title: "The gods must be crazy",
			content: "I first saw this as a movie. It is very interesting to watch, and i will like you to see it and decide for yourself if this is something you will want to do. "
		}
	]

	return (
		<div> 
			<Header />
			<h1>This is the home page</h1>
			<div className="grid grid-cols-2 w-full h-screen">
				{
					obj.map((item, key) => (
						<Card title={item.title} content={item.content} key={key} />
					))
				}
				<Card title="New title" content="implementation of the content to show a different kind of component usage"/>
			</div>
		</div>
	)
}
export default HomePage;
