import Increment from "../components/Increment";

const Home = () => {

  const MainContent = () => {
    return (
      <Increment />
    );
  };

  return (
    <div className='App'>
      <MainContent />
    </div>
  );
};

export default Home;
