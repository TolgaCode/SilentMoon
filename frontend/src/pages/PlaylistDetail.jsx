import SpotifyLogin from '../components/SpotifyLogin'
import Dashboard from '../components/Dashboard'
import login from '../assets/img/spotify-login.png';

const code = new URLSearchParams(window.location.search).get('code')


const PlaylistDetail = () => {
    
    return (
        <div>
            <h1>Login to spotify for a weekly updated guided meditation</h1>
            <p>Please login to get access to spotify content.
                You will automatically be redirected to this page after login.</p>
            {code ? <Dashboard code={code} /> : <SpotifyLogin />}
        </div>
        
    )
   
}
 
export default PlaylistDetail;