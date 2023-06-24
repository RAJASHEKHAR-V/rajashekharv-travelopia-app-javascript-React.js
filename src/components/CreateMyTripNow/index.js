import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const planningOptionsList = [
  {id: 1, option: 'Still Dreaming'},
  {id: 2, option: 'Need a destination Expert'},
  {id: 3, option: 'I want to book a trip'},
]

const countryList = [
  {id: 1, name: 'India'},
  {id: 2, name: 'United States of America'},
  {id: 3, name: 'China'},
  {id: 4, name: 'Brazil'},
  {id: 5, name: 'Russia'},
  {id: 6, name: 'Japan'},
  {id: 7, name: 'Germany'},
  {id: 8, name: 'United Kingdom'},
  {id: 9, name: 'Australia'},
  {id: 10, name: 'Canada'},
]

const interestList = [
  {id: 1, name: 'Wildlife'},
  {id: 2, name: 'Beaches'},
  {
    id: 3,
    name: 'Adventure Sports',
  },
  {
    id: 4,
    name: 'Historical Sites',
  },
  {
    id: 5,
    name: 'Cultural Festivals',
  },
  {
    id: 6,
    name: 'Cuisine Exploration',
  },
  {id: 7, name: 'Nature Hiking'},
  {id: 8, name: 'City Exploration'},
  {id: 9, name: 'Shopping'},
  {
    id: 10,
    name: 'Relaxation Retreats',
  },
]

const noTravelersList = [
  {id: 1, count: 1},
  {id: 2, count: 2},
  {id: 3, count: 3},
  {id: 4, count: 4},
  {id: 5, count: 5},
  {id: 6, count: 6},
  {id: 7, count: 7},
  {id: 8, count: 8},
  {id: 9, count: 9},
  {id: 10, count: 10},
]

const budgetList = [
  {id: 1, label: '$4000 to $5000'},
  {id: 2, label: '$5000 to $6000'},
  {id: 3, label: '$6000 to $7000'},
  {id: 4, label: '$7000 to $8000'},
  {id: 5, label: '$8000 to $9000'},
  {id: 6, label: '$10000+'},
]

const CreateMyTripNow = props => {
  const {
    onClickOfYesOrNo,
    updateUserInfo,
    onSubmitOfForm,
    details,
    onResetButton,
  } = props

  const {
    name,
    email,
    phone,
    days,
    date,
    destination,
    interest,
    noOfTravelers,
    planToHaveTrip,
    budget,
    isYes,
    message,
    isFormSubmitted,
  } = details
  console.log(isYes)
  const addSelectElement = (
    <>
      <select
        className="select-el"
        name="destination"
        value={destination}
        onChange={event => updateUserInfo('destination', event.target.value)}
      >
        <option value="" disabled hidden>
          Where you want to go?
        </option>
        {countryList.map(eachItem => (
          <option key={eachItem.id} value={eachItem.name}>
            {eachItem.name}
          </option>
        ))}
      </select>

      <select
        className="select-el"
        name="interest"
        value={interest}
        onChange={event => updateUserInfo('interest', event.target.value)}
      >
        <option value="" disabled hidden>
          Your interests?
        </option>
        {interestList.map(eachItem => (
          <option key={eachItem.id} value={eachItem.name}>
            {eachItem.name}
          </option>
        ))}
      </select>

      <select
        className="select-el"
        name="noOfTravelers"
        value={noOfTravelers}
        onChange={event => updateUserInfo('noOfTravelers', event.target.value)}
      >
        <option value="" disabled hidden>
          No of Travellers?
        </option>
        {noTravelersList.map(eachItem => (
          <option key={eachItem.id} value={eachItem.count}>
            {eachItem.count} Travelers
          </option>
        ))}
      </select>

      <select
        className="select-el"
        name="budget"
        value={budget}
        onChange={event => updateUserInfo('budget', event.target.value)}
      >
        <option value="" disabled hidden>
          Budget per person?
        </option>
        {budgetList.map(eachItem => (
          <option key={eachItem.id} value={eachItem.label}>
            {eachItem.label}
          </option>
        ))}
      </select>
    </>
  )

  const addFormFields = (
    <>
      <h1 className="form-heading">
        Hey You Are Almost There! Book the Trip Here.
      </h1>
      <div className="mobile-view">{addSelectElement}</div>
      <label htmlFor="name-id" className="label-el">
        Name
      </label>
      <input
        placeholder="Enter your name"
        type="text"
        id="name-id"
        className="input-el"
        value={name}
        onChange={event => updateUserInfo('name', event.target.value)}
        required
      />
      <label htmlFor="email-id" className="label-el">
        Email
      </label>
      <input
        placeholder="Enter your email"
        type="text"
        id="email-id"
        className="input-el"
        value={email}
        onChange={event => updateUserInfo('email', event.target.value)}
        required
      />
      <label htmlFor="phone-id" className="label-el">
        Phone Number
      </label>
      <input
        placeholder="Enter your phone number"
        type="text"
        id="phone-id"
        className="input-el"
        onChange={event => updateUserInfo('phone', event.target.value)}
        value={phone}
        required
      />
      <div className="duration-card">
        <label htmlFor="days-id" className="duration-label">
          Duration of trip?
        </label>
        <input
          placeholder="Enter no of days of trip"
          type="text"
          id="days-id"
          className="days-input"
          onChange={event => updateUserInfo('days', event.target.value)}
          value={days}
          required
        />
        <label htmlFor="date-id" className="duration-label">
          When?
        </label>
        <input
          placeholder="Enter date of trip"
          type="date"
          id="date-id"
          className="date-input"
          onChange={event => updateUserInfo('date', event.target.value)}
          value={date}
          required
        />
      </div>
      <select
        className="planing-options"
        value={planToHaveTrip}
        onChange={event => updateUserInfo('planToHaveTrip', event.target.value)}
        required
      >
        <option value="" disabled hidden>
          What stage of planning are you in?
        </option>
        {planningOptionsList.map(eachItem => (
          <option key={eachItem.id} value={eachItem.option}>
            {eachItem.option}
          </option>
        ))}
      </select>
      <div className="notes-card">
        <p className="note-para">Any Special Request</p>
        <label htmlFor="yes-id" className="notes-label">
          Yes
        </label>
        <input
          type="radio"
          id="yes-id"
          name="request"
          onChange={onClickOfYesOrNo}
          defaultChecked={isYes}
        />
        <label htmlFor="no-id" className="notes-label">
          No
        </label>
        <input
          type="radio"
          id="no-id"
          name="request"
          onChange={onClickOfYesOrNo}
          defaultChecked={!isYes}
        />
      </div>
      {isYes && (
        <textarea
          className="text-input"
          value={message}
          onChange={event => updateUserInfo('message', event.target.value)}
        />
      )}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </>
  )

  return (
    <div className="welcome-card">
      <h1 className="travel-quote">
        Travelopia Taking Care of Every Detail, So You Can Travel Stress-Free
      </h1>
      <div className="my-trip-body">
        <div className="desk-view">{addSelectElement}</div>
        <Popup
          modal
          trigger={
            <button type="button" className="book-my-trip">
              Create My Trip Now
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="form-body">
              <button
                className="close-button"
                type="submit"
                data-testid="closeButton"
                onClick={() => {
                  close()
                  onResetButton()
                }}
              >
                <IoMdClose className="close-icon" />
              </button>
              <form className="form-card" onSubmit={onSubmitOfForm}>
                {!isFormSubmitted && addFormFields}
                {isFormSubmitted && (
                  <>
                    <h1 className="saved-heading">
                      Your trip Details are saved. Thank You!
                    </h1>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/854/912/original/earth-and-airplane-line-icons-tour-and-travel-symbol-design-template-vector.jpg"
                      className="trip-logo"
                      alt="trip logo"
                    />
                  </>
                )}
              </form>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default CreateMyTripNow
