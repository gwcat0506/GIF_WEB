import React, { useState, useEffect } from 'react';

const MainUI = () => {
  const [leftContent, setLeftContent] = useState('');
  const [rightContent, setRightContent] = useState('');

  const handleLeftChange = (e) => {
    setLeftContent(e.target.value);
  };

  const handleRightChange = (e) => {
    setRightContent(e.target.value);
  };

  useEffect(() => {
    // 1초마다 왼쪽 화면에 무작위 문구를 입력하는 함수
    const addRandomTextToLeft = () => {
      const phrases = ['Hello!', 'How are you?', 'React is awesome!', 'Welcome to my app!'];
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setLeftContent((prevContent) => prevContent + phrases[randomIndex] + '\n');
    };

    // 1초마다 addRandomTextToLeft 함수를 호출
    const intervalId = setInterval(addRandomTextToLeft, 1000);

    // 컴포넌트가 unmount될 때 인터벌을 정리(cleanup)
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
        <textarea
          value={leftContent}
          onChange={handleLeftChange}
          style={{ width: '100%', height: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '20px' }}
        />
      </div>
      <div style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
        <textarea
          value={rightContent}
          onChange={handleRightChange}
          style={{ width: '100%', height: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '16px' }}
        />
      </div>
    </div>
  );
};

export default MainUI;
