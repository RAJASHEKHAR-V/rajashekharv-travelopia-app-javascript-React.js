import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import UserItem from '../UserItem'
import UserItemMobile from '../UserItemMobile'

import './index.css'

const Admin = props => {
  const registeredUserList = localStorage.getItem('usersList')
  let parsedUserList
  if (registeredUserList !== null) {
    parsedUserList = JSON.parse(registeredUserList)
  }
  console.log(parsedUserList)

  const onLogout = () => {
    const {history} = props

    history.replace('/')
  }

  const addButton = (
    <button
      type="button"
      className="btn btn-primary logout m-3"
      onClick={onLogout}
    >
      Go To Home
    </button>
  )

  return (
    <div className="trip-container">
      {registeredUserList !== null && (
        <>
          <div className="table-card">
            <table className="travel-table">
              <th className="header-style">Name</th>
              <th className="header-style">Email-ID</th>
              <th className="header-style ">Phone-Number</th>
              <th className="header-style category-header">Trip Days</th>
              <th className="header-style">Date</th>
              <th className="header-style ">Planning Status</th>
              <th className="header-style ">Special Request</th>
              <th className="header-style category-header">Destination</th>
              <th className="header-style category-header">interest</th>
              <th className="header-style category-header">No travelers</th>
              <th className="header-style category-header">Budget</th>
              <tbody>
                {parsedUserList.map(eachUser => (
                  <UserItem
                    key={eachUser.name + eachUser.date}
                    userObject={eachUser}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mobile-card">
            {parsedUserList.map(eachUser => (
              <UserItemMobile
                key={eachUser.name + eachUser.date}
                userObject={eachUser}
              />
            ))}
          </ul>
          {addButton}
        </>
      )}
      {registeredUserList === null && (
        <div className="no-details-card">
          <h1 className="no-details-heading">No Details Found</h1>
          <p className="no-details-para">Dear Admin no users registered Yet</p>
          {addButton}
        </div>
      )}
    </div>
  )
}

export default Admin
