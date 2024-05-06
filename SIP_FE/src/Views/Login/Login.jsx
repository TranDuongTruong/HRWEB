import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thêm logic xử lý đăng nhập ở đây
  };

  return (
    <div className="container">
      <div className="row">
        <div className="module module-login span4 offset4">
          <form className="form-vertical" onSubmit={handleSubmit}>
            <div className="module-head">
              <h3>Sign In</h3>
            </div>
            <div className="module-body">
              <div className="control-group">
                <div className="controls row-fluid">
                  <input
                    className="span12"
                    type="text"
                    id="inputEmail"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="controls row-fluid">
                  <input
                    className="span12"
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="module-foot">
              <div className="control-group">
                <div className="controls clearfix">
                  <button type="submit" className="btn btn-primary pull-right">Login</button>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    /> Remember me
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
