import React, { useId } from 'react'

const UseIdHooks = () => {
  const id = useId();
  const id2 = useId();
  const id3= useId();
  return (
    <>
     <div>
     <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
     </div>
      <label htmlFor={id2}>Do you like JS?</label>
      <input id={id2} type="checkbox" name="react"/>
      <label htmlFor={id3}>Do you like HTML?</label>
      <input id={id3} type="checkbox" name="react"/>
      <label htmlFor={id}>Do you like CSS?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
}

export default UseIdHooks