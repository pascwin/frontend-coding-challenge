import App from './App';
import {act} from 'react-dom/test-utils';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

describe('App', function () {
  it('should display pass in number', function () {
      let container = document.createElement('div');
      container.id = "root"
      document.body.appendChild(container);
      const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
      act(() => {
        root.render(<App/>)
      })
      const header = container.querySelector('h1') as HTMLElement
      expect(header.innerHTML).toBe("Absence Manager")
  });
});

reportWebVitals();