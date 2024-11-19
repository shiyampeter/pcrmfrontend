import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/common'
import AuthLayout from '@/Layouts/AuthLayout'
import TitleHelmet from '@/components/Common/TitleHelmet'
import { Button, Form, Stack } from 'react-bootstrap'
import AuthMinmal from './AuthMinmal'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/redux/api/public/authService'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const { removeSession } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('admin')
  const [password, setPassword] = useState<string>('123456')
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { isAuthenticated, saveSession } = useAuthContext()
  const redirectUrl = useMemo(
    () =>
      location.state && location.state.from ? location.state.from.pathname : '/dashboards/default',
    [location.state],
  )

  console.log(redirectUrl)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const dispatch = useDispatch()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const response = await dispatch(userLogin({ user_username: username, password })).unwrap()
      toast.success(response?.message)
      setTimeout(() => {
        if (response?.data?.token) {
          localStorage.setItem('token', response?.data?.token)
          saveSession({ ...(response.user ?? {}), token: response?.data?.token })
          navigate(redirectUrl)
        }
      }, 1500)
      navigate(redirectUrl)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <TitleHelmet title="Login" />
      <AuthLayout>
        <AuthMinmal>
          {isAuthenticated && <Navigate to={redirectUrl} replace />}
          <div className="mb-12">
            <h4 className="fw-bold mb-3">Login to your account</h4>
            <p className="fs-16 lead">Hey, Enter your details to get login to your account.</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                // isInvalid={!!emailError}
                required
              />
              {/* <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                // isInvalid={!!passwordError}
                required
              />
              {/* <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback> */}
              <span
                className="btn btn-icon position-absolute translate-middle top-50"
                style={{ right: '-1rem' }}
                onClick={togglePasswordVisibility}>
                <i className={`fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}`}></i>
              </span>
            </Form.Group>
            <Stack direction="horizontal">
              <Form.Check type="checkbox" id="check-api-checkbox">
                <Form.Check.Input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Form.Check.Label>Remember me</Form.Check.Label>
              </Form.Check>
              <Link to="/auth/minimal/forgot-password" className="link-primary ms-auto">
                Forgot password?
              </Link>
            </Stack>
            <div className="d-grid gap-2 my-4">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                // disabled={loading}
                className="text-white">
                {/* {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"></span>
                    Loading...
                  </>
                ) : ( */}
                Login
                {/* )} */}
              </Button>
            </div>
            <div>
              Don't have an account? <Link to="/auth/minimal/register">Create an Account</Link>
            </div>
            <div className="mt-12 mb-6 border-bottom position-relative">
              <span className="small py-1 px-3 text-uppercase text-muted bg-body-tertiary rounded position-absolute translate-middle start-50">
                or
              </span>
            </div>
            <div className="d-grid flex-wrap d-sm-flex gap-2">
              <Button variant="neutral" className="px-3 flex-fill">
                <i className="fi fi-brands-google"></i>
                <span className="ms-2">Login with Google</span>
              </Button>
              <Button variant="neutral" className="px-3 flex-fill">
                <i className="fi fi-brands-facebook"></i>
                <span className="ms-2">Login with Facebook</span>
              </Button>
            </div>
          </Form>
        </AuthMinmal>
      </AuthLayout>
    </>
  )
}

export default Login
