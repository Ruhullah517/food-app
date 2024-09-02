import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';



const Map = ({ width, height }) => {

    const startLocation = {
        latitude: 37.78825,
        longitude: -122.4324,
    };
    const endLocation = {
        latitude: 37.75825,
        longitude: -122.4624,
    };

    return (
        <View style={{ borderRadius: 11, overflow: "hidden" }}>

            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: (startLocation.latitude + endLocation.latitude) / 2,
                    longitude: (startLocation.longitude + endLocation.longitude) / 2,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {/* Marker for the starting point */}
                <Marker coordinate={startLocation} title="Start Location" />

                {/* Marker for the ending point */}
                <Marker coordinate={endLocation} title="End Location" />

                {/* Polyline to show the route */}
                <Polyline
                    coordinates={[startLocation, endLocation]}
                    strokeColor="#FF5733" // Change this color to match your theme
                    strokeWidth={4}
                />
            </MapView>
        </View>
    )
};
export default Map;
