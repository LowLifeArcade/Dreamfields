// import { useIsFetching} from 'react-query'
// use above at some point

export default function Loader() {
  // probably need to subscribe to a provider to get loading info
  return (
    <div className="loader spinner" style={{ opacity: 1 }}>
      <div className="inner">hi</div>
      {/* const isFetching = useIsFetching() */}
      {/* add turnery with useisfecthing to opacity 0 and 1 */}
      <style jsx>{`
        .loader {
          position: fixed;
          top: 14.54rem;
          left: 20.5rem;
          font-size: 1.5rem;
          transition: 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .inner {
          color: #5a585800;
          font-size: 1.1rem;
          border-radius: 50%;
          //box-shadow: inset 0 0 2px rgba(0, 0, 0, .6);
        }
        .spinner {
          cursor: progress;
          border: 8px solid #5a5858;
          border-top: 1px double #5a5858;
          box-shadow: 0 0 6px rgba(0, 0, 0, .6), 0 0 2px rgba(0, 0, 0, .6);
          border-radius: 50%;
          width: 25px;
          height: 25px;
          animation: spin .9s linear infinite;
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
      `}</style>
    </div>
  );
}
