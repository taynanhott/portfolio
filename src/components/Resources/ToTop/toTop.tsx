interface Props {
  isVisible: boolean;
}
export default function ToTop({ isVisible }: Props) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-3 p-3 backdrop-blur-sm border border-current rounded-full shadow-lg hover:bg-slate-700 focus:outline-none transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      ↑
    </button>
  )
}