import axios from 'axios'
import 'dotenv/config'

const endpoint = process.env.API_ENDPOINT

export const checkAccountFF = async (req, res) => {
    const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&voucherTypeName=FREEFIRE&shopLang=id_ID`
    
    try {
        const ff = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const ffresult = ff.data
        
        if (ffresult.errorCode === 12) {
            res.status(404).json({
                status: 404,
                message: ffresult.errorMsg
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Free Fire',
                    id: ffresult.confirmationFields.userId,
                    name: ffresult.confirmationFields.roles[0].role,
                    country: ffresult.confirmationFields.country
                }
            })
        }

    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountML = async (req, res) => {
    const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1579.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=${req.params.zoneid}&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID`
    
    try {
        const ml = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const mlresult = ml.data
        if (mlresult.errorCode === 1003) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Mobile Legends',
                    id: mlresult.confirmationFields.userId,
                    name: mlresult.confirmationFields.username,
                    country: mlresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountAOV = async (req, res) => {
    const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&voucherTypeName=AOV&shopLang=id_ID`
    
    try {
        const aov = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const aovresult = aov.data
        if (aovresult.errorCode === 1003) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Arena Of Valor',
                    id: aovresult.confirmationFields.userId,
                    name: aovresult.confirmationFields.roles[0].role,
                    country: aovresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountCOD = async (req, res) => {
    const body = `voucherPricePoint.id=46114&voucherPricePoint.price=5000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID`
    
    try {
        const cod = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const codresult = cod.data
        if (codresult.errorCode === 22) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Call Of Duty Mobile',
                    id: codresult.confirmationFields.userId,
                    name: codresult.confirmationFields.roles[0].role,
                    country: codresult.confirmationFields.country
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountSM = async (req, res) => {
    const body = `voucherPricePoint.id=256513&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=global-release&voucherTypeName=SAUSAGE_MAN&shopLang=id_ID`
    
    try {
        const sm = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const smresult = sm.data
        if (smresult.errorCode == -100) {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Sausage Man',
                    id: smresult.confirmationFields.userId,
                    name: smresult.confirmationFields.username,
                    country: 'Global'
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}

export const checkAccountGI = async (req, res) => {
    let zoneData = {
        zoneId: '',
        server: ''
    }

    if (req.params.id.startsWith(6)) {
        zoneData = {
            zoneId : 'os_usa',
            server: 'America'
        }
    }else if (req.params.id.startsWith(7)) {
        zoneData = {
            zoneId: 'os_euro',
            server: 'Europe'
        }
    }else if (req.params.id.startsWith(8)) {
        zoneData = {
            zoneId: 'os_asia',
            server: 'Asia'
        }
    }else if (req.params.id.startsWith(9)) {
        zoneData = {
            zoneId: 'os_cht',
            server: 'SAR (Taiwan, Hong-Kong, Macao)'
        }
    }
    
    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${req.params.id}&user.zoneId=${zoneData.zoneId}&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
    
    try {
        const gi = await axios.post(endpoint,body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const giresult = gi.data
        if (giresult.errorCode == '-102') {
            res.status(404).json({
                status: 404,
                message: 'Id not Found'
            })
        }else {
            res.status(200).json({
                status: 200,
                response: {
                    game: 'Genshin Impact',
                    id: giresult.confirmationFields.userId,
                    name: giresult.confirmationFields.username,
                    server: zoneData.server
                }
            })
        }
    } catch (error) {
        res.status(504).json({
            status: 504,
            message: 'Error Gateway Timeout'
        })
    }
}