import React from "react";
import Card from "./Cards";
import Contacts from "../contacts";

// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       telefone={contact.phone}
//       email={contact.email}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map((createCard) => (
        <Card
          key={createCard.id}
          name={createCard.name}
          img={createCard.imgURL}
          telefone={createCard.phone}
          email={createCard.email}
        />
      ))}

      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        telefone={Contacts[0].phone}
        email={Contacts[0].email}
      />

      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        telefone={Contacts[1].phone}
        email={Contacts[1].email}
      />

      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        telefone={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
