import { toast } from 'react-toastify';

export function errorAlert(message: string) {
	return toast.error(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}
