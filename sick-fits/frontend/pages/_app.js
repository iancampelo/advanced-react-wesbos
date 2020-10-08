
import App, { Container } from 'next/app';

class MyApp extends App {
  
  render() {

    return (
      <Container>
        
      </Container>
    );
  }
}

export default MyApp;

// Create a simple React App that shows a list of numbers. 
// The Application will have a text input that only accepts integers, 
// when the user presses enter on the input, the number will be added 
// to the list. The App will show each of the numbers as “Number #” 
// with a checkbox next to it. The list of numbers will always show 
// the highest number first, the lowest number last, the rest of the 
// numbers appear in the same order they are added,
// when a number’s checkbox is checked, the number will have a line 
// through as indication of an excluded number, and if checked, the 
// number cannot be considered neither as maximum nor minimum, If 
// unchecked, it goes back to normal behavior. The App should persist 
// the numbers, so if the page is refreshed the list is in the same state as before.