import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { images } from '../../constants';
import { useEffect, useState } from 'react';
import GiggerTrackingDetails from '../components/GiggerTrackingDetails';
import { RootSiblingParent } from 'react-native-root-siblings';
import showToast from '../components/Toast';


const tracking = () => {
  const labels = ["Request Sent", "Confirmed", "Picked", "Halfway", "Delivered"];
  const [trackingStatus, setTrackingStatus] = useState([]);
  const gigger = {
    "image": "path/to/image1.jpg",
    "fullName": "Bibek Bhusal",
    "pickupLocation": "Devinagar, Butwal",
    "deliveryLocation": "Drivertole, Tilottama",
    "contactNumber": "123-456-7890"
  };
  useEffect(() => {
    const data = [
      {
        trackingTime: '17 Jan, 2023 02:40PM',
        status: 'Delivered'
      },
      {
        trackingTime: '17 Jan, 2023 02:25PM',
        status: 'Halfway Completed'
      },
      {
        trackingTime: '17 Jan, 2023 02:13PM',
        status: 'Picked From Sender'
      },
      {
        trackingTime: '17 Jan, 2023 02:07PM',
        status: 'Request Confirmed'
      },
      {
        trackingTime: '17 Jan, 2023 02:06PM',
        status: 'Pickup Request Sent'
      }
    ];
    setTrackingStatus(data);
  }, []);
  return (
    <RootSiblingParent>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.trackingContainer}>
          <View>
            {trackingStatus.length == 5 ?
              <>
                <Image style={styles.trackingImage} source={images.DELIVERED} />
                {showToast("Your Order is delivered", "success")}
              </>
              :
              <Image style={styles.trackingImage} source={images.SEARCHING} />
            }
          </View>
          <View style={styles.trackingStatusStepsContainer}>
            <StepIndicator
              customStyles={styles.trackingStatusSteps}
              currentPosition={trackingStatus.length}
              labels={labels}
            />
          </View>

          <View style={styles.trackingStatusUpdateContainer}>
            {trackingStatus.map((data, index) =>
            (
              <View key={index} style={styles.trackingStatusUpdate}>
                <Text style={styles.trackingStatusUpdateText}>{data.trackingTime}</Text>
                <Text style={styles.trackingStatusUpdateText}>{data.status}</Text>
              </View>
            )
            )}
          </View>
          <GiggerTrackingDetails gigger={gigger} />
        </View>
      </ScrollView>
    </RootSiblingParent>
  )
}

const styles = StyleSheet.create({
  trackingContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  trackingImage: {
    alignSelf: 'center'
  },
  trackingStatusStepsContainer: {
    marginBottom: 20,
  },
  trackingStatusSteps: {
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
  },
  trackingStatusUpdateContainer: {
    borderRadius: 10,
    padding: 15,
    margin: 5,
    backgroundColor: '#fafdff'
  },
  trackingStatusUpdate: {
    display: 'flex',
    fontSize: 25,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '',
  },
  trackingStatusUpdateText: {
    fontSize: 16,
    fontWeight: '400'

  }
})

export default tracking