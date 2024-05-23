import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';


type ratingValueType = {
  ratingValue: number;
  setratingValue: any;
};

export default function Rating({ratingValue, setratingValue}: ratingValueType) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setratingValue(1)}>
        {ratingValue >= 1 ? (
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={35} />
        ) : (
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={35}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setratingValue(2)}>
        {ratingValue >= 2 ? (
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={35} />
        ) : (
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={35}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setratingValue(3)}>
        {ratingValue >= 3 ? (
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={35} />
        ) : (
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={35}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setratingValue(4)}>
        {ratingValue >= 4 ? (
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={35} />
        ) : (
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={35}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setratingValue(5)}>
        {ratingValue === 5 ? (
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={35} />
        ) : (
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={35}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

type ratingValue = {
  ratingValue: number;
  size: number;
};

export function ReadRating({ratingValue, size}: ratingValue) {
  return (
    <View>
      {ratingValue === 1.0 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue >= 1.5 && ratingValue <= 1.9 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-half-full"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue === 2.0 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue >= 2.5 && ratingValue <= 2.9 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-half-full"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue === 3.0 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue >= 3.5 && ratingValue <= 3.9 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-half-full"
            color={'#CD5C08'}
            size={size}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue === 4.0 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-outline"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : ratingValue >= 4.5 && ratingValue <= 4.9 ? (
        <View style={styles.container}>
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          <MaterialCommunityIcons
            name="star-half-full"
            color={'#CD5C08'}
            size={size}
          />
        </View>
      ) : (
        ratingValue === 5.0 && (
          <View style={styles.container}>
            <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
            <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
            <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
            <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
            <MaterialCommunityIcons name="star" color={'#CD5C08'} size={size} />
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
