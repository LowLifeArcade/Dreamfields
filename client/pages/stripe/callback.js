import {useContext,useEffect} from 'react'
import { Context } from '../../context'
import UserRoute from '../../components/routes/UserRoute'
import axios from 'axios'

const StripeCallback = () => {
  const {state:{user}, dispatch} = useContext(Context)

  useEffect(() => {
      user && axios.post('/api/get-account-status').then((res) => {
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        })
        window.localStorage.setItem('user', JSON.stringify(res.data))
        window.location.href='/creator'
      })
  }, [user])

  return <div className="container">
    <h1>spinner</h1>
  </div>
}

export default StripeCallback
