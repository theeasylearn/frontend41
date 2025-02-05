import { Bounce, toast } from 'react-toastify';
const config = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
};
export function showMessage(message) {
    toast.success(message, config);
}
export function showError(message) {
    toast.error(message, config);
}
export function showNetworkError(error) {
    //catch block will execute if server does not responed. 
    //error is one type of object. it has information about error
    console.log(error);
    if (error.code === 'ERR_NETWORK') {
        showError('it seems you are offline or server is offline.');
    }
    else 
        showError('oops something went wrong. please try after sometimes...');
}