import MainArea from '../../components/main-area';

function Home({setPage, theme}) {
  return (
    <div className='home'>
      <MainArea setPage={setPage} theme={theme}/>
    </div>
  );
}

export default Home;