import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Button_ = ({type, name, allow, link, color}) => (
  // component button that have especifications about color and if the button is disable or available
  <div>
    <Button type={type === 'submit'?'submit':'button'} className={[color , name.includes('Borrow') && !allow?"disabled": "enabled"]}><Link to={link}>{name}</Link></Button>
  </div>
)

export default Button_