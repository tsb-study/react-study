import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

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
				<li>
					<Link to="/profiles">프로필</Link>
				</li>
				<li>
					<Link to="/history">History 예제</Link>
				</li>
			</ul>
			<hr />
			<Switch>
				<Route path="/" component={Home} exact={true} />
				{/* 중괄호 내 배열로 여러 개의 path 사용 가능 */}
				<Route path={['/about', '/info']} component={About} />
				<Route path="/profiles" component={Profiles} />
				<Route path="/history" component={HistorySample} />
				<Route
					render={({ location }) => (
						<div>
							<h2>이 페이지는 존재하지 않습니다</h2>
							<p>{location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
};

export default App;
