import ReactDom from 'react-dom';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
