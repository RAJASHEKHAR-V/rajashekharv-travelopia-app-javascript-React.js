import {useState} from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdAccountBox} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import CreateMyTripNow from '../CreateMyTripNow'

import './index.css'

const TravelopiaHome = props => {
  const [userDetails, setUserInterestDetails] = useState({
    destination: '',
    interest: '',
    noOfTravelers: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    days: '',
    date: '',
    planToHaveTrip: '',
    isYes: false,
    message: 'None',
    isFormSubmitted: false,
  })

  const storeDataInLocalStorage = updateUserDetails => {
    const localList = localStorage.getItem('usersList')
    if (localList !== null) {
      const parsedList = JSON.parse(localList)
      const data = JSON.stringify([...parsedList, updateUserDetails])
      localStorage.setItem('usersList', data)
    } else {
      const data = JSON.stringify([updateUserDetails])
      localStorage.setItem('usersList', data)
    }
    setUserInterestDetails({
      destination: '',
      interest: '',
      noOfTravelers: '',
      budget: '',
      name: '',
      email: '',
      phone: '',
      days: '',
      date: '',
      planToHaveTrip: '',
      isYes: false,
      message: 'None',
      isFormSubmitted: true,
    })
    console.log('Submiited')
  }

  const onSubmitOfForm = event => {
    event.preventDefault()
    const {
      destination,
      interest,
      noOfTravelers,
      budget,
      name,
      email,
      phone,
      days,
      date,
      planToHaveTrip,
      message,
    } = userDetails
    const updateUserDetails = {
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
    }
    if (
      destination === '' ||
      interest === '' ||
      noOfTravelers === '' ||
      budget === ''
    ) {
      // eslint-disable-next-line no-alert
      alert('Hello! fill the details in Starting Form then fill this form')
    } else {
      storeDataInLocalStorage(updateUserDetails)
    }
  }

  const updateUserInfo = (key, value) => {
    setUserInterestDetails(prevDetails => ({
      ...prevDetails,
      [key]: value,
    }))
  }

  const onClickOfYesOrNo = () => {
    setUserInterestDetails(prevState => ({
      ...prevState,
      isYes: !prevState.isYes,
    }))
  }

  const onAdmin = () => {
    const {history} = props

    history.replace('/admin')
  }

  const onResetButton = () => {
    console.log('OnReset')
    setUserInterestDetails(prevState => ({
      ...prevState,
      isFormSubmitted: false,
    }))
  }

  return (
    <div className="bg-container">
      <div className="header-card">
        <div className="web-logo-card">
          <img
            src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_1024,h_576,c_fit/travelopia-web/2021/08/Enchanting-Travels-Logo.png"
            className="travelopia-logo"
            alt="travelopia logo"
          />
          <p className="traveler-quote">
            Private tailor-made journeys of a lifetime
          </p>
        </div>
        <nav className="nav-card">
          <p className="phone-number">1 888 263 2574</p>
          <BsFillTelephoneFill className="mobile-view-phone-icon" />
          <GiHamburgerMenu className="mobile-view-phone-icon" />
          <button type="button" className="contact-us">
            Contact Us
          </button>
          <button type="button" className="admin-button" onClick={onAdmin}>
            Go to Admin
          </button>
          <button type="button" className="small-mobile" onClick={onAdmin}>
            <MdAccountBox className="icon" />
          </button>
        </nav>
      </div>
      <CreateMyTripNow
        details={userDetails}
        onClickOfYesOrNo={onClickOfYesOrNo}
        onSubmitOfForm={onSubmitOfForm}
        updateUserInfo={updateUserInfo}
        onResetButton={onResetButton}
      />
    </div>
  )
}

export default TravelopiaHome
