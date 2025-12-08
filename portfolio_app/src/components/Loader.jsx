const rotations = Array.from({ length: 10 }, (_, index) => index)

const isExternal = (href = '') => /^https?:\/\//.test(href);

function Loader() {
  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <div className="loader-screen__inner">
        <div className="main">
          <div className="loaders">
            {rotations.map((idx) => (
              <span key={`loader-${idx}`} className="loader" />
            ))}
          </div>

          <div className="loadersB">
            {rotations.map((idx) => (
              <span key={`loaderA-${idx}`} className="loaderA">
                <span
                  className="ball"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
