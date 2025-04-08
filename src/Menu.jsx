import React, { useState } from 'react'
import RadioButtonGroup from './RadioButton';


const Menu = () => {
    const [selectedDelivery, setSelectedDelivery] = useState("");
    const [selectedCrust, setSelectedCrust] = useState("");
    const [selectedToppings, setSelectedToppings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for ordering your pizza, To be ${selectedDelivery}`);
      };


  
    {/*const deliveryOption = [
      { label: "Delivery", value: "Delivery" },
      { label: "Carryout", value: "Carryout" },
      
    ];
  
    const crustOption = [
      { label: "Handtossed", value: "Handtossed" },
      { label: "New York Style", value: "New york style" },
      { label: "Thin", value: "Thin" },
    ];
    const toppings = [
      { label: "Supreme", value: "Supreme" },
      { label: "Meatlovers", value: "Meatlovers" },
      { label: "Veggielovers", value: "veggielovers" },
      { label: "Pepperoni", value: "pepperoni" },
      { label: "Sausage", value: "sausage" },
      { label: "Cheese", value: "cheese" },
    ];*/}
  
    return (
    <section id="radiogroups">
        <div className="menusection">
        <h2>Select Delivery or Carryout</h2>
        <RadioButtonGroup
          name="delivery"
          options={["Delivery", "Carryout"]}
          selectedValue={selectedDelivery}
          onChange={setSelectedDelivery}
        />
        </div>
        <br/><br/><br/>
        <h3></h3>
      
        <div className="menusection">
        <h2>Select Your Crust</h2>
        <RadioButtonGroup
          name="crust"
          options={["Handtossed", "New York Style", "Thin"]}
          selectedValue={selectedCrust}
          onChange={setSelectedCrust}
        />
        <br/><br/><br/>
        </div>
       
        <div className="menusection">
        <h2 className="text-xl font-semibold">Select Your Toppings</h2>
        <RadioButtonGroup
          name="toppings"
          options={["Supreme", "Sausage", "Pepperoni", "Meatlovers", "Veggielovers", "Cheeselovers"]}
          selectedValue={selectedToppings}
          onChange={setSelectedToppings}
        />
        </div>
        <br/><br/><br/>
      
        <div className="menusection">
        <h2 className="text-lg font-bold">Your Selection:</h2>
        <p>Delivery: {selectedDelivery}</p>
        <p>Crust: {selectedCrust}</p>
        <p>Toppings: {selectedToppings}</p>
        </div>
        

        <div id="button">
        <button id="button" onClick={handleSubmit}>Order</button>
        </div>
        
    </section>
    );
  };
  export default Menu;








