import React from 'react'
import ReactDOM from 'react-dom/client'
import NewsApp from './components/NewsApp'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 최상위 컴포넌트인 NewsApp은 렌더링하도록 설정
root.render(<NewsApp />)