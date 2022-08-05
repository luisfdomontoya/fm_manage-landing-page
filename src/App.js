import './App.css';
import Header from './Header';
import {navContent, featuresContent, testimonialContent} from './content';
import FeatureList from './FeatureList';
import TestimonialList from './TestimonialList';

function App() {
  return (
    <div className="App">
      <Header navItems={ navContent } />
      <FeatureList featureItems={ featuresContent } />
      <TestimonialList testimonialItems={ testimonialContent } />
    </div>
  );
}

export default App;