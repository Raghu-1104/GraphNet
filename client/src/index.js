import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ApolloProvider from './ApolloProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ApolloProvider);

reportWebVitals();;
