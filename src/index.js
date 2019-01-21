import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Cutter from './components/Cutter';
import Hamburger from './components/Hamburger';
import LangSelector from './components/LangSelector';
import Title from './components/Title';
import Menu from './pages/Menu';
import Courses from './pages/Courses';
import Questions from './pages/Questions';
import Sections from './pages/Sections';
import New from './pages/New';
import Result from './pages/Result';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
	let [lang, setLang]  = useState(localStorage.getItem('lang') || 'en');
	let [cutter, setCutter]  = useState('flat');
	let locale = require('./locale.json');

	function ts(text) {
		let ts;

		if(typeof text === "object"){
			ts = (text[lang]) ? text[lang] : text['en'];
			//if (!text[lang]) console.warn(text['en']);
		} else {
			ts = (locale[text] && lang!=="en") ? locale[text] : text;
			//if (!locale[text]) console.warn(text);
		}

		return ts;
	}

	function toggleLang() {
		lang = (lang === "en" ? "bi" : "en");
		localStorage.setItem('lang', lang);
		setLang(lang);
	}

	return (
		<Router>
			<div className="container">
				<Route render={(props) => <Cutter {...props} cutter={cutter} setCutter={setCutter} />} />

				<header className="clear">
					<Route render={(props) => <Hamburger {...props} />} />
					<Route render={(props) => <Title {...props} />} />
					<Route render={(props) => <LangSelector {...props} lang={lang} toggleLang={toggleLang} />} />
				</header>

				<div className="pages">
					<Switch>
						<Route path="/" render={(props) => <Courses {...props} ts={ts} />} exact/>
						<Route path="/menu" render={(props) => <Menu {...props} ts={ts} />}/>
						<Route path="/result" render={(props) => <Result {...props} ts={ts} />}/>
						<Route path="/courses/:section/:id" render={(props) => <Questions {...props} ts={ts} />}/>

						<Route path="/courses/:section" render={(props) => <Sections {...props} 
							ts={ts}
							cutter={cutter}
							setCutter={setCutter} />}/>

						<Route path="/new" render={(props) => <New {...props} ts={ts} />}/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
