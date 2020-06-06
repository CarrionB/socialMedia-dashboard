import React, {useRef, useEffect, useState} from 'react'
import './switch.css'

function Switch() {
  const [checked, setChecked] = useState(false);

  const ref = useRef(null);

  const changeMedia = (mq) => {
    setChecked(mq.matches)
  };

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(changeMedia)
    setChecked(mediaQuery.matches)
  }, [])

  const handleChange = () =>{
    var checked = ref.current.checked;
    setChecked(checked)
    if (checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
      console.log('true')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
      console.log('false')
    }
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange = {handleChange} checked ={checked} type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox"/>
    </div>
  )
}

export default Switch;