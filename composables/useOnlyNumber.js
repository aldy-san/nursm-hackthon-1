export default (val) => {
    const number = "1234567890"
    const button =  [8,37,38,39,40]
    if(!number.includes(val.key) && !button.includes(val.keyCode)) val.preventDefault();
    return ''
}