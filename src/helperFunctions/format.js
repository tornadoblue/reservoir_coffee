
export const formatDate = (timestamp) => {

    const date = new Date(timestamp);
    
    const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long'
    }).replace(/ /g, ' ');

    return formattedDate
}
