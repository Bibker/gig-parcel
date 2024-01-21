import Toast from 'react-native-root-toast';

const showToast = (msg, status) => {
    const statusColors = {
        info: "blue",
        warning: "#fe7013",
        success: "green",
        failed: "red"
    }
    Toast.show(msg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: statusColors[status],
        opacity: 1,
        delay: 200
    })
}

module.exports = showToast;