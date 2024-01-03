import Attributes from './components/Attributes/Attributes';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import YourResults from './components/YourResults/YourResults';

const App = () => {
	return (
		<Container>
			<YourResults
				title='Your Result'
				puntuation={76}
				totalPuntuation={100}
				calification='Great'
				description='Your performance exceed 65% of the people conducting the test here!'
			/>
			<div>
				<Attributes></Attributes>
				<Card
					color='red'
					src='./public/images 3/icon-reaction.svg'
					name='Reaction'
					calificationNumber={80}
					calificaitonTotal={100}
				/>
				<Card
					color='orange'
					src='./public/images 3/icon-memory.svg'
					name='Memory'
					calificationNumber={92}
					calificaitonTotal={100}
				/>
				<Card
					color='green'
					src='./public/images 3/icon-verbal.svg'
					name='Verbal'
					calificationNumber={61}
					calificaitonTotal={100}
				/>
				<Card
					color='blue'
					src='./public/images 3/icon-visual.svg'
					name='Visual'
					calificationNumber={73}
					calificaitonTotal={100}
				/>
				<Button></Button>
			</div>
		</Container>
	);
};

export default App;
