
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const formatDate = (timestamp) => {
    
    const [year, month, day] = timestamp.split("-")
    
    try {
        return `${parseInt(day)} ${months[parseInt(month)-1]}`
    }
    catch (error) {
        // return original format if it can't be parsed
        console.log(`formatDate Error: ${error}`)
        return timestamp
    }
    
}
