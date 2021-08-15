import React from 'react';

const data = [
  { key: 1, name: 'Key1', 'data-testid': '1' },
  { key: 2, name: 'Key2', 'data-testid': '2' },
  { key: 3, name: 'Key3', 'data-testid': '3' },
];

const App: React.FC = () => {
  return (
    <div data-testid="hallel" className="Test" data-testname="x">
      <ul>
        {data.map((el) => {
          return (
            <li key={el.key} className={'data-testid="X"'} data-testid={el['data-testid']}>
              {el.name}
            </li>
          );
        })}
      </ul>
      <a href='data-testid="x"' data-testid="link">
        Test
      </a>
      <div className="Nesting">
        <div className="Nested">
          <div className="Nested">
            <div className="Nested">
              <div className="Nested">
                <div className="Nested">
                  <div className="Nested" data-testid="x"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Nested">
          <div className="Nested">
            <div className="Nested">
              <div className="Nested">
                <div className="Nested" data-testid="x">
                  <div className="Nested"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Nested">
          <div className="Nested">
            <div className="Nested">
              <div className="Nested" data-testid="x">
                <div className="Nested">
                  <div className="Nested"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Nested">
          <div className="Nested">
            <div className="Nested" data-testid="x">
              <div className="Nested">
                <div className="Nested">
                  <div className="Nested"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Nested">
          <div className="Nested" data-testid="x">
            <div className="Nested">
              <div className="Nested">
                <div className="Nested">
                  <div className="Nested"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
