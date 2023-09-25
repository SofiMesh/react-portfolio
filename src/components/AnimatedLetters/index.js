import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  if (!strArray || strArray.length === 0) {
    return null; 
  }

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;