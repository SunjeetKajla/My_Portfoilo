import FuzzyText from './components/404';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <FuzzyText fontSize="clamp(3rem, 8vw, 8rem)" color="#fff">
          404
        </FuzzyText>
        <p className="text-white text-xl mt-4">Page Not Found</p>
      </div>
    </div>
  );
}