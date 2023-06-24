import './index.css'

const UserItemMobile = props => {
  const {userObject} = props
  const {
    name,
    email,
    phone,
    days,
    date,
    planToHaveTrip,
    message,
    destination,
    interest,
    noOfTravelers,
    budget,
  } = userObject

  return (
    <li className="user-item-mobile">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Phone-No : {phone}</p>
      <p>No Of Days of Trip:{days}</p>
      <p>Date of Trip : {date}</p>
      <p>Status of Trip : {planToHaveTrip}</p>
      <p>Message : {message}</p>
      <p>Destination : {destination}</p>
      <p>Interest : {interest}</p>
      <p>No of Travelers : {noOfTravelers}</p>
      <p>Budget : {budget}</p>
    </li>
  )
}

export default UserItemMobile
