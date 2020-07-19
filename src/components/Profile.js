import React from 'react'
import {Link} from 'gatsby'

const Profile = () => (
  <div className="dashboard-header">
    <nav>
      <Link to="/dashboard/secret" activeClassName="active">
        Secret Stuff
      </Link>
      <Link to="/dashboard/base" activeClassName="active">
        see your base
      </Link>
    </nav>
    <span>TODO: show login status</span>
  </div>
)
export default Profile
