import { ButtonContainer } from './ButtonContainer.tsx';
import { Header } from './Header.tsx';
import { ImageCaption } from './ImageCaption.tsx';
import { ImageContainer } from './ImageContainer';
import { ImageDescription } from './ImageDescription';
import './App.css';

export function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App();
