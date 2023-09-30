import {loginStart,loginSuccess,loginFailure} from './userRedux'
import {publicRequest} from '../requestMethods'

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('https://wtl4yt-5001.csb.app/api/auth/login',user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
        
    }
}