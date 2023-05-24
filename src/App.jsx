import { DarkNightTemplate } from './template';
import { EditorField } from './components';
import styles from './styles';

function App() {

	return (
		<div className={`w-full flex h-[100%]`}>
			<EditorField />
			<div className={`flex ${styles.flexCenter} w-[50%]`}>
				<DarkNightTemplate />
			</div>
		</div>
	);
}

export default App;