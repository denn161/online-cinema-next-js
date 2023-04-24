import ReduxToastrlib from 'react-redux-toastr'

const ReduxToastify = () => {
	return (
	   <ReduxToastrlib
		 timeOut={4000}
		 newestOnTop={false}
		 preventDuplicates
		 position="top-right"		 
		 transitionIn="fadeIn"
		 transitionOut="fadeOut"
		 progressBar
		 closeOnToastrClick
		 />
	)
}

export default ReduxToastify