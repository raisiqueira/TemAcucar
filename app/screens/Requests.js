import React, {
  Component,
  Text,
  View,
} from 'react-native'
import MapView from 'react-native-maps'
import Slider from 'react-native-slider'
import haversine from 'haversine'

import Colors from "../Colors"
import Button from "../components/Button"
import Sentence from "../components/Sentence"
import Request from "../components/Request"

export default class Requests extends Component {
  renderMap() {
    const { latitude, longitude } = this.props.auth.currentUser
    return (
      <View style={{
        borderBottomWidth: 0.5,
        borderColor: Colors.ice,
      }}>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          style={{
            height: 170,
            alignSelf: 'stretch',
          }}
          region={{
            latitude: parseFloat(latitude), 
            longitude: parseFloat(longitude),
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <MapView.Marker 
            coordinate={{latitude, longitude}}
            image={require('../img/marker.png')}
          />
        </MapView>
      </View>
    )
  }

  render() {
    const { latitude, longitude } = this.props.auth.currentUser
    return (
      <View style={{
        paddingBottom: 100,
      }}>
        <View style={{
          paddingBottom: 12,
        }}>
          { latitude && longitude && this.renderMap() }
          <View style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            left: 40,
            right: 40,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
            paddingBottom: 1.5,
          }}>
            <View style={{
              flex: 3,
              backgroundColor: Colors.white,
              paddingVertical: 4,
            }}>
              <Sentence style={{
                color: Colors.brown, 
                fontFamily: 'OpenSans-Bold', 
                textAlign: 'center',
                fontSize: 12,
              }}>
                132 pessoas em sua vizinhança
              </Sentence>
            </View>
          </View>
        </View>
        <View>
          <Request />
          <Request />
          <Request />
          <Request />
        </View>
      </View>
    )
  }
}
