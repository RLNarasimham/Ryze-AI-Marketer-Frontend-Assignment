import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050507] px-6 py-16 text-white">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-white/70">
              Please refresh the page. If the problem persists, try again later.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                className="btn-primary min-touch"
                onClick={() => window.location.reload()}
              >
                Refresh
              </button>
              <a className="btn-secondary min-touch focus-ring" href="#">
                Go home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}


