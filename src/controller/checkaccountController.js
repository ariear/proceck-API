import axios from 'axios'

const endpoint = 'https://order-sg.codashop.com/initPayment.action'

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
        console.log(mlresult);
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