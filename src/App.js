import gaYoung from './images/ga-young.jpg'
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>lee ga young</title>
        <meta name="description" content="ga young app application" />

        {/* open graph tag */}
        <meta property="og:title" content="ga young app" />
        <meta property="og:description" content="ga young app application" />
        <meta property="og:image" content="https://react-seo-ochre.vercel.app/images/ga-young.jpg" />
        <meta property="og:url" content="https://react-seo-ochre.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* twitter tag */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Website" />
        <meta name="twitter:description" content="This is my website." />
        <meta name="twitter:image" content="https://react-seo-ochre.vercel.app/images/ga-young.jpg" />
      </Helmet>

      <div className='card'>
        <h1>안녕하세요</h1>
        <p>제 이름은 "이가영" 입니다.</p>
        <img src={gaYoung} alt='이가영 이모지'/>
      </div>
    </div>
  );
}

export default App;
