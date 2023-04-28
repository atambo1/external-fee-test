// Import the JSON data
import feed from '../../server/db.json';

// Define a component to display the JSON data
function JsonDisplay() {
  return feed
}

// Render the component in your app
ReactDOM.render(<JsonDisplay />, document.getElementById('root'));