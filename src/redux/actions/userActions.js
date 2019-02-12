import sha256 from 'crypto-js/sha256';
import BootcampAPI from '../../helpers/BootcampAPI';
import { API } from '../../constants';

/* --------- actions ------------ */





/* --------- action creators ------------ */



export const register = (username, email, password) => {
    return BootcampAPI.post(API.REGISTER, {
        email,
        username,
        hashedPassword: sha256(password)

    })

        .then((res) => console.log(res))
        .catch(err => console.log(err));
};

