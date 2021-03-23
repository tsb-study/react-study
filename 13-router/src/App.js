import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
	return (
		<div>
			<ul>
				<li>
					{/* 링크를 통해 라우터 path와 연결 가능 */}
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
			</ul>
			<hr />
			<Route path="/" component={Home} exact={true} />
			{/* 중괄호 내 배열로 여러 개의 path 사용 가능 */}
			<Route path={['/about', '/info']} component={About} />
		</div>
	);
};

export default App;
