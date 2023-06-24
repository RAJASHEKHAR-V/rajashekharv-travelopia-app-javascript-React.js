import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './index.css'

const UserItem = props => {
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
    <tr>
      <td className="cell-style">{name}</td>
      <td className="cell-style">{email}</td>
      <td className="cell-style mobile">{phone}</td>
      <td className="cell-style">{days}</td>
      <td className="cell-style">{date}</td>
      <td className="cell-style mobile">{planToHaveTrip}</td>
      <td className="cell-style mobile">{message}</td>
      <td className="cell-style">{destination}</td>
      <td className="cell-style">{interest}</td>
      <td className="cell-style">{noOfTravelers}</td>
      <td className="cell-style mobile">{budget}</td>
    </tr>
  )
}

export default UserItem
