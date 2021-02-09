import React, { useState } from 'react';

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]); //중괄호 밖에 대괄호 있어야 함

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id, 초기값은 배열의 마지막 index인 4 다음 숫자

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat(
            {id : nextId, text: inputText}
        );

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id); //클릭한 item 제외한 names 배열 생성
        setNames(nextNames);
    };

    const nameList = names.map(name => <li key = {name.id} onDoubleClick = {() => onRemove(name.id)}>{name.text}</li>);
    return (
        <div>
            <input value = {inputText} onChange = {onChange}/>
            <button onClick = {onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;