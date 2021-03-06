import {
    getAddress,
    getCategorys

} from '../api'


import {SAVE_ADDRESS, SAVE_CATEGORYS} from "./mutation-type";

export default {
    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        if (result.code === 0) {
            // commit(SAVE_ADDRESS, {address: result.data})
            commit(SAVE_ADDRESS, {address: result.data})

        }

    },

    async getCategorysAction({commit}){
        let result = await getCategorys()
        if (result.code === 0) {
            commit(SAVE_CATEGORYS, {categorys: result.data})

        }

    },


} 