import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isNumber = (val) => {
  return !Number.isNaN(+val);
};

const Checkout = (props) => {
  const [valid, setValid] = useState({
    n: true,
    s: true,
    p: true,
    c: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const pinInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const pin = pinInputRef.current.value;
    const city = cityInputRef.current.value;

    console.log("name: ", name, street, pin, city);

    const nv = !isEmpty(name);
    const sv = !isEmpty(street);
    const pv = isNumber(pin);
    const cv = !isEmpty(city);

    console.log(nv, sv, pv, cv);

    const fv = nv && sv && pv && cv;

    if (!fv) {
      setValid({
        n: nv,
        s: sv,
        p: pv,
        c: cv,
      });
    } else {
      setValid({
        n: true,
        s: true,
        p: true,
        c: true,
      });
      // );
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!valid.n && <p>Invalid!!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!valid.s && <p>Invalid!!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={pinInputRef} />
        {!valid.p && <p>Invalid!!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!valid.c && <p>Invalid!!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
