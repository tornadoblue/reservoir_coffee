const API_ENDPOINT = process.env.REACT_APP_API || "https://reservoircoffee.ca/api"

const businessInfo = async () => {

    return await (await fetch(`${API_ENDPOINT}/business_info`)).json()

}

export const api = {businessInfo}

export default api