import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert, Pressable, Dimensions,ToastAndroid, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Image, Button, Icon, Input } from 'react-native-elements';

import SCheader from '../components/screensheader'
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import Cloc from '../assets/svg/clocation.svg'
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width, height } = Dimensions.get('window');


function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}
const MapModal = ({ navigation }) => {

  const ASPECT_RATIO = width / height;
  const [LATITUDE, setLATITUDE] = useState(29.9418);
  const [LONGITUDE, setLONGITUDE] = useState(-95.3990887);
  const [LATITUDE_DELTA, setLATITUDE_DELTA] = useState(0.05);
  const [LONGITUDE_DELTA, setLONGITUDE_DELTA] = useState(LATITUDE_DELTA * ASPECT_RATIO);

  const currentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
        console.log(location);
        setRegions(
          {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        )
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
  }

  const setRegion = (e) => {
    // console.log(e.nativeEvent)
    console.log(e)
    setRegions(
      {
        latitude: e.latitude,
        longitude: e.longitude,
        latitudeDelta: e.latitudeDelta,
        longitudeDelta: e.longitudeDelta,
      }
    )
  }

  const changeAddress = (e) => {
    console.log(e)
  } 

  const [markerV,setMarkerV] = useState(false)
  const [regions,setRegions] = useState(
    {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }
  )

  return (
    <View style={styles.container}>
      <SCheader navigation={navigation} backbutton={true} name={'Map'} wallet={false} />
      <View style={{ position: 'absolute', bottom: 20, left: 0, zIndex: 9999, width: '100%', paddingHorizontal: 20 }}>
        <View>

          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 8, backgroundColor: '#fff', borderRadius: 50, elevation: 5, marginBottom: 20, width: 43 }} onPress={() => currentLocation()}>
              <Cloc style={{ fill: '#2196F3', height: 25, width: 25 }} />
            </TouchableOpacity>
          </View>
          <Button
            title="Save"
            type="solid"

            buttonStyle={{
              backgroundColor: '#1E3865',
              padding: 15,
              borderRadius: 15,
            }}
          />

        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: height, width: width }}
        initialRegion={regions}
        region={regions}
        // showsUserLocation={true}
        loadingEnabled={true}
        onRegionChangeComplete={e => setRegion(e)}
        onMapReady={()=> setTimeout(()=>{setMarkerV(true)},2000) }
        // onUserLocationChange={e => setRegion(e)}
        // onPress={e => setRegion(e)}
        // addressForCoordinate(myCoordinates).then(address => console.log(address))
        // addressForCoordinate={e => changeAddress(e)}
        
      >

      </MapView>
      
      {
        markerV ? (
          <>
            <View style={styles.markerFixed}>
              <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" }} style={{ height: 35, width: 35 }} />
            </View>
          </>
        ) : (
          null
        )
      }
      
      
      <View style={{ position: 'absolute', top: 120, left: 0, zIndex: 9999, width: '100%', paddingHorizontal: 20 }}>
          <GooglePlacesAutocomplete
            query={{
              key: 'AIzaSyBfX3nuExh13kcWSNhwhbSD7J3LNHldO-w',
              language: 'en',
            }}
            placeholder='Search'
            onPress={(data, details) => console.log(data, details)}
            textInputProps={{
              errorStyle: { color: 'red' },
            }}
            onFail={error => console.error(error)}
          />
      </View>
    </View>
  )
}
export default MapModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
  , markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
    zIndex: 999,
  },
})