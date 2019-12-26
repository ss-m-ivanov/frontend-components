
let notificationObject = {
    title: "Error!",
    message: "Message",
    type: "danger",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 5000,
        onScreen: true
    }
};

export default notificationObject;
