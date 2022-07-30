import Component from './Component';
import useNotification from './hooks/useNotification';

function App() {
  const { displayNotification } = useNotification();

  return (
    <div className='App'>
      <Component />

      {/* displayNotification is responsible for the jsx code */}
      {/* call this function to render notifications on screen */}
      {/* better to use it on a top level component or 'layout' component */}
      {displayNotification()}
    </div>
  );
}

export default App;
