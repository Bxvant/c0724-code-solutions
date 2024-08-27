import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc: string[] = [
  '/family.jpeg',
  '/library.jpeg',
  '/starry-sky.jpeg',
];
const imageCap: string[] = [' Family ', 'Library', 'A Starry Sky'];
const imageDescrip: string[] = [
  'This is a photo of a happy family. ',
  'This is a photo of a public library. ',
  'This is a photo of a sky that is full of stars!',
];
const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
