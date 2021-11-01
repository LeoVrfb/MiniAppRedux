/* import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import phone from "../img/phone.png";
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer() {


      const phones = useSelector(state => state.phones)    
      const dispatch = useDispatch()

  return (
    <div>
      <div className="container" style={{ position:"relative", top:'200px' }}>
        <img
          src={phone}
          style={{ width:"200px" }}
          alt="phone"
        />
        <p>
            disponibilités :
            <span id='count'>{phones}</span>
        </p>
        <button onClick={() => dispatch(buyPhone())}>Acheter</button>
      </div>
      
    </div>
  );
}

export default PhoneContainer; */







import React, { useState } from "react";
import { connect } from 'react-redux'
import phone from "../img/phone.png";
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer(props) {

    const [totalPhone, setTotalPhone] = useState(1)

  return (
    <div>
      <div className="container">
        <img
          src={phone}
          style={{ width:"200px" }}
          alt="phone"
        />
        <p>
            disponibilités :
            <span id='count'> { props.phones }</span>
        </p>
        <div>
            <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
            <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)} />
        </div>
      </div>
      
    </div>
  );
}

const mapStateToProps = (state) => {


    return {
    phones: state.phone.phones
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: totalPhone => dispatch(buyPhone(totalPhone))
    }
    }

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);

