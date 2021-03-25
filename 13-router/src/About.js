import React from 'react';
//쿼리 문자열을 컴포넌트로 변환
import qs from 'qs';

const About = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true, //주소?param에서 ? 생략
	});

	const showDetail = query.detail === 'true'; //쿼리 파싱 결과 값은 문자열
	return (
		<div>
			<h1>소개</h1>
			<p>Introduce</p>
			{showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
		</div>
	);
};

export default About;
