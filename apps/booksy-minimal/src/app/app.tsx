// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import AddBook from './components/AddBook/AddBook';
import Header from './components/Header/Header';
import Library from './components/Library/Library';

export function App() {
  return (
      <div className='App'>
        <Header/>
        <AddBook/>
        <Library/>
      </div>
  );
}

export default App;
