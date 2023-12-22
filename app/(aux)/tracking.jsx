import { View, Text, Image, StyleSheet } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { images } from '../../constants';

const tracking = () => {
  const labels = ["Request Sent", "Confirmed", "Picked", "Halfway", "Delivered"];
  return (
    <View style={styles.trackingContainer}>
      <Image style={styles.trackingImage} source={images.SEARCHING} />
        <StepIndicator
          customStyles={styles.stepIndicatorStyles}
          currentPosition={1}
          labels={labels}
        />
    </View>

  )
}

const styles = StyleSheet.create({
  trackingContainer: {

  },
  trackingImage:{
    alignSelf:'center'
  },
  stepIndicatorStyles:{
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',

  }
})

export default tracking