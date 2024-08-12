import store from '~/store';
import {_setModal,_removeModal} from "~/store/modal/index.js";

export const setModal = (name,data = false ) => store.dispatch(_setModal({name , data}))
export const removeModal = () => store.dispatch(_removeModal())