import { useNavigate } from 'react-router'

const ThankYouPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">Thank you!</h1>
      <p className="mt-2 text-gray-700">Your purchase was successful.</p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-6 h-10 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800"
      >
        Back to catalog
      </button>
    </div>
  )
}

export default ThankYouPage
