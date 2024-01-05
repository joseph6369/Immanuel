import {useState} from 'react'
import "./NewDelhi.css"

function NewDelhi() {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const [inputValue, setInputValue] = useState('');
  // State to hold the list of entered data
  const [dataList, setDataList] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Add the input value to the dataList
    setDataList([...dataList, inputValue]);
    // Clear the input field
    setInputValue('');
  };

  const handleGuestChange = (event) => {
    const guests = parseInt(event.target.value, 10);
    setNumberOfGuests(guests);

    // Calculate total amount with service charge
    const total = guests * 100 + guests * 10;
    setTotalAmount(total);
  };
  return (
    <div class="NewDelhi-parent">
      <img class="NewDelhi-image"src="image9.jfif"/>
      <section class="newdelhi-child">
        <span class="newdelhi-para">$100/per Person</span>
        <p class="newdelhi-para1">Information</p>
       <div class="newdelhi-name">
        <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>
    </div>
  
<div class='newdelhi-number'>
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Enter 10-digit phone number" required/>
    </div>
   
<div class='newdelhi-born'>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required/>
    </div>
   
<div class='newdelhi-gmail'>
    <label for="email">Gmail:</label>
    <input type="email" id="email" name="email" placeholder="example@gmail.com" required/>
    </div>
    <div>
    <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestChange}
      />
       <p>Guests: {numberOfGuests}</p>
       <p>Service Charge:{numberOfGuests *10}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
    <button class="NewDelhi-btn">Book Now</button>
     
      </section>
      <div class="newdelhi-child2">
        <h1>Review </h1>
      {/* Input field */}
      <input class="newdelhi-text"type="text" value={inputValue} onChange={handleInputChange} />

      {/* Button to add data */}
      <button onClick={handleButtonClick}>Add Data</button>

      {/* Display the entered data as a list */}
      <ul>
        {dataList.map((data, index) => (
          <li  key={index}>{data}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default NewDelhi