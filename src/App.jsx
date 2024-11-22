import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Card1 from './Card1.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {

    return(
      <>
      <Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Card/>
      <Card1/>
      <Button/>
      <Student name="Sahajat" id="01" age="30" isStudent={true}/>
      <Student name="Alam" id="02" age="42" isStudent={false}/>
      <UserGreeting isLoggedIn={true} username="sahajat"/>
      <List/>
      </>
    );
  
}

export default App
