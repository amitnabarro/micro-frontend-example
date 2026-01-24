import { Component, type ErrorInfo, type ReactNode } from 'react'
import { UncaughtErrorPage } from '../../pages'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}
/**
 * ErrorBoundary is a React class component that catches JavaScript errors
 * anywhere in its child component tree, logs those errors, and displays
 * a fallback UI instead of the component that crashed.
 *
 * It is important to note that React Error Boundaries do not catch errors in:
 * - **Event handlers** (e.g., onClick, onChange)
 * - **Asynchronous code** (e.g., setTimeout, requestAnimationFrame callbacks, Promises)
 * - **Server-side rendering**
 * - **Errors thrown in the error boundary component itself** (only its children)
 *
 * For errors in event handlers or asynchronous code, standard JavaScript
 * `try...catch` blocks must be used within the respective functions.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  /**
   * getDerivedStateFromError is called after an error has been thrown
   * by a descendant component. It receives the error that was thrown
   * as a parameter and should return a value to update state.
   */
  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error,
      errorInfo: null, // errorInfo is handled in componentDidCatch
    }
  }

  /**
   * componentDidCatch is called after an error has been thrown by a
   * descendant component. It receives two parameters: the error and
   * an object with componentStack information.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error)
    // captureException(error, { componentStack: errorInfo.componentStack })
    this.setState({
      errorInfo: errorInfo,
    })
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <UncaughtErrorPage />
    }

    return this.props.children
  }
}

export default ErrorBoundary
