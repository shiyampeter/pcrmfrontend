import toast from 'react-hot-toast';
export function errorAlert(msg) {
    if (typeof msg === 'object') {
        for (const key in msg) {
            // if (Object.prototype.hasOwnProperty.call(errors, key)) {
            const errorMsg = msg[key];
            if (Array.isArray(errorMsg)) {
                toast.error(errorMsg[0]);
            }
            else {
                toast.error(errorMsg);
            }
            // break;
            // }
        }
    }
    else {
        toast.error(msg);
    }
}
export function successAlert(msg) {
    toast.success(msg);
}
export function warning(msg) {
    toast.info(msg);
}
