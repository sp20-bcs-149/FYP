import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../../components/clinic/clinicOrder/consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import categories from '../../../components/clinic/clinicOrder/consts/categories';
import vaccinesData from '../../../components/clinic/clinicOrder/consts/vaccines';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const route = useRoute();
  const passDatatoOrder = route.params;
  
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVaccines, setFilteredVaccines] = useState(vaccinesData);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setFilteredVaccines(vaccinesData);
    } else {
      const filteredData = vaccinesData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredVaccines(filteredData);
    }
  };

  const selectCategory = (category, index) => {
    setSelectedCategoryIndex(index);
    if (category.id === 'all') {
      setFilteredVaccines(vaccinesData);
    } else {
      const filteredData = vaccinesData.filter(
        (item) => item.category === category.id
      );
      setFilteredVaccines(filteredData);
    }
  };

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.8}
            onPress={() => selectCategory(category, index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryImgBtnCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 3,
                  color: selectedCategoryIndex === index ? COLORS.white : COLORS.primary,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ vaccine,passDatatoOrder }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', {vaccine,passDatatoOrder })}
      >
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={vaccine.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {vaccine.name}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {vaccine.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              ${vaccine.price}
            </Text>
            <View style={styles.addToCartBtn}>
              {/* <MaterialIcons name="add" size={20} color='white' /> */}
              <MaterialIcons name="star" size={24} color="#ff8c00" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#fff" }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              {passDatatoOrder.clinic_name}!
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            Welcome back to Shop!
          </Text>
        </View>
        <Image
          source={require('../../../components/clinic/clinicOrder/1.png')}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.inputContainer}>
          <MaterialIcons name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for vaccine"
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View style={{paddingHorizontal: 5}}>
      <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // style={{marginBottom: 10}}
        data={filteredVaccines}
        renderItem={({ item }) => <Card vaccine={item} passDatatoOrder={passDatatoOrder} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryImgBtnCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 225,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
